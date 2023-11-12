import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    /*
    POLOS
MARMER
DEKORATIF
GRANITI
TERRAZZO
KAYU
BATU
REFLEKSI
    */
    const user = await prisma.category.createMany({
        data: [{
          name: 'POLOS',
          description:'',
          
        },{
            name: 'MARMER',
            description:'',
          
          },{
            name: 'DEKORATIF',
            description:'',
           
          },{
            name: 'GRANITI',
            description:'',
          
          },{
            name: 'TERRAZZO',
            description:'',
          
          },{
            name: 'KAYU',
            description:'',
           
          },{
            name: 'BATU',
            description:'',
           
          },{
            name: 'REFLEKSI',
            description:'',
           
          }
    ],
      })
      console.log(user)


}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })