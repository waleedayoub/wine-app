-- CreateTable
CREATE TABLE "EmailNotification" (
    "id" SERIAL NOT NULL,
    "emailGroupId" INTEGER,
    "productListId" INTEGER,
    "userId" INTEGER,
    "scheduledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "EmailNotification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmailNotification" ADD CONSTRAINT "EmailNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailNotification" ADD CONSTRAINT "EmailNotification_productListId_fkey" FOREIGN KEY ("productListId") REFERENCES "ProductList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailNotification" ADD CONSTRAINT "EmailNotification_emailGroupId_fkey" FOREIGN KEY ("emailGroupId") REFERENCES "EmailGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
