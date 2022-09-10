import imp
import os
from typing import AsyncGenerator, List
from uuid import UUID

from fastapi import Depends
from fastapi_users.db import (
    SQLAlchemyBaseOAuthAccountTableUUID,
    SQLAlchemyBaseUserTableUUID,
    SQLAlchemyUserDatabase
)
from fastapi_users_db_sqlalchemy.generics import GUID
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.ext.declarative import DeclarativeMeta, declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy import Column, Integer, String, ForeignKey


DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./test.db")

Base: DeclarativeMeta = declarative_base()

class OAuthAccount(SQLAlchemyBaseOAuthAccountTableUUID, Base):
    pass

class User(SQLAlchemyBaseUserTableUUID, Base):
    oauth_accounts: List[OAuthAccount] = relationship("OAuthAccount", lazy="joined")

class Friend(Base):
    __tablename__="friends"
    id = Column(GUID, primary_key=True)
    email = Column(String(50), nullable=False)
    user_id = Column(GUID, ForeignKey(User.id), primary_key=True)
    user = relationship('User', foreign_keys='Friend.user_id')


engine = create_async_engine(DATABASE_URL)
async_session_maker = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session


async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User, OAuthAccount)

