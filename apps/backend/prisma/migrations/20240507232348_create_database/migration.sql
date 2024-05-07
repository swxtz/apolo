-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "max_score" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "score" (
    "_id" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "score_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");
