-- CreateTable
CREATE TABLE "EmailGroup" (
    "id" SERIAL NOT NULL,
    "emails" VARCHAR(500) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "EmailGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmailGroup" ADD CONSTRAINT "EmailGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
