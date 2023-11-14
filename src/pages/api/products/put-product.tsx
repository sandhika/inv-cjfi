// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req : any, res:any) => {
  const data = req.body;
  try {
   
    const result = await prisma.product.update({
        where: {
          id: data.id,
        },
        data: {
          name: data.name,
          description: data.description,
          qty: data.qty,
          price: data.price
        },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured while update Product." });
  }
};