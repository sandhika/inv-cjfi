import { Text,Table, Group,Checkbox,Box, Card } from '@mantine/core';
import { useGetProductsQuery } from '@/redux/services/productsApi';
import { useState } from 'react';

export default function  ProductPage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectedAllRows, setSelectedAllRows] = useState(false);
  const dataProduct =  useGetProductsQuery();

  const rows = dataProduct.data?.map((element) => (
    <Table.Tr key={element.id}
    bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
       <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.id)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.id]
                : selectedRows.filter((id) => id !== element.id)
            )
          }
        />
      </Table.Td>

      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.qty}</Table.Td>
      <Table.Td>{element.price}</Table.Td>
      <Table.Td>{element.category?.name}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Box>
      <Card>
      <Table withTableBorder withColumnBorders>
      <Table.Thead>
          <Table.Tr>
          <Table.Th>
            <Checkbox
          aria-label="Select row"
          onChange={(event) =>{
            var result: any[] | ((prevState: number[]) => number[]) = [];
            if(event.currentTarget.checked){
              dataProduct.data?.map((element) => (
                  result.push(element.id)
              ));
            }  
            setSelectedRows(result);
          }}
        /></Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>QTY</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      </Card>
    </Box>
  );
}