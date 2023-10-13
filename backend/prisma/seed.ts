import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Hello World",
      body: "This is my first post",
      description: "This is my first post description",
      published: true,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Hello World 2",
      body: "This is my second post",
      description: "This is my second post description",
      published: true,
    },
  });
  
  console.log({ post1, post2 });
}


main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
  .finally(async () => {await prisma.$disconnect();
});
