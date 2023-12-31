// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: any, res:any) => {
  const { id } = req.body;
  try {
    const deleteFood = await prisma.product.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deleteFood);
  } catch (error) {
    res.status(403).json({ err: "Error occured while deleting a Product item." });
  }
};