import { PrismaClient } from "@prisma/client";

// Initialiser Prisma Client
const prisma = new PrismaClient();

async function main() {
    const user1 = await prisma.user.upsert({
        where: {
            email: "koffi@gmail.com",
        },
        update: {},
        create: {
            email: "koffi@gmail.com",
            name: "Koffi",
            role: "Ingénieur",
            badges: {
                create: {
                    num: "ing001",
                },
            },
            empreintes: {
                create: {
                    empreinte1: "kk1",
                    empreinte2: "kk2",
                },
            },
        },
    });

    const user2 = await prisma.user.upsert({
        where: {
            email: "kokou@gmail.com",
        },
        update: {},
        create: {
            email: "kokou@gmail.com",
            name: "Kokou",
            role: "Stagiaire",
            badges: {
                create: {
                    num: "stg001",
                },
            },
            empreintes: {
                create: {
                    empreinte1: "ko1",
                    empreinte2: "ko2",
                },
            },
        },
    });

    const user3 = await prisma.user.upsert({
        where: {
            email: "kossi@gmail.com",
        },
        update: {},
        create: {
            email: "kossi@gmail.com",
            name: "Kossi",
            role: "Stagiaire",
            badges: {
                create: {
                    num: "stgEl001",
                },
            },
            empreintes: {
                create: {
                    empreinte1: "ks1",
                    empreinte2: "ks2",
                },
            },
        },
    });

    console.log({user1, user2, user3});
}

// Exécuter la fonction principale
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // Fermer Prisma Client à la fin
        await prisma.$disconnect();
    });
