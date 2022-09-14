-- CreateTable
CREATE TABLE "ProductList" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER,

    CONSTRAINT "ProductList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "categoryId" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductListMapping" (
    "id" SERIAL NOT NULL,
    "productListId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductListMapping_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductList" ADD CONSTRAINT "ProductList_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductListMapping" ADD CONSTRAINT "ProductListMapping_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductListMapping" ADD CONSTRAINT "ProductListMapping_productListId_fkey" FOREIGN KEY ("productListId") REFERENCES "ProductList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
