import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({
        data: Array.from({ length: 25 }, () => ({
            email: faker.internet.email(),
            name: faker.internet.username(),
            address: {
                street: faker.location.street(),
                city: faker.location.city(),
                state: faker.location.state(),
                zip: faker.location.zipCode(),
            }
        }))
    })
}


main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })