import { 
  Text,
  Table, 
  Group,
  Checkbox,
  Box, 
  Card,
  Button,
  Space,
  Flex,
  Title,
  Modal,
 } from '@mantine/core';
import { useGetProductsQuery } from '@/redux/services/productsApi';
import { SetStateAction, useState } from 'react';
import { IconEdit,IconTrash,IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';

import AddProductPage from './add';

export default function  ProductPage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectedAllRows, setSelectedAllRows] = useState(false);
  const dataProduct =  useGetProductsQuery(null);
  const [opened, { open, close }] = useDisclosure(false);


  const rows = dataProduct.data?.map((element) => (
    <Table.Tr key={element.id}
    bg={selectedRows.includes(element.id) ? 'var(--mantine-color-blue-light)' : undefined}
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
      <Table.Td>
          <Group>
            <Link href={'#'}><IconEdit/></Link>
            <Link href={'#'}><IconTrash/></Link>
          </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
    <Box>
      <Card>
        <Card withBorder>
        <Group justify="space-between"
          >
            <Title>Product</Title>
            <Button leftSection={<IconPlus size={14} />} onClick={()=> open()} color={'teal'}>Add Product</Button>
            
          </Group>
        </Card>
        <Space h="md"/>
      <Table withTableBorder withColumnBorders>
      <Table.Thead>
          <Table.Tr>
          <Table.Th>
            <Checkbox
          aria-label="Select row"
          onChange={(event) =>{
            let result: number[] = [];
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
            <Table.Th>Qty</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      </Card>
    </Box>

      <Modal opened={opened} onClose={close} title="Add Product">
          <AddProductPage/>
      </Modal>
      </>     
  );
}