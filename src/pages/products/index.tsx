import { Text,Table, Checkbox } from '@mantine/core';
import { PrismaClient } from '@prisma/client'
import { useEffect } from 'react';

export default async function  ProductPage() {
    const prisma = new PrismaClient();

    useEffect(async () => {
        await prisma.product.findMany();
      });

  return (
    <>
      <Text>Products</Text>

    </>
  );
}