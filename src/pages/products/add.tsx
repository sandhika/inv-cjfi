import { TextInput, Checkbox, Button, Group, Box,NumberInput,Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useGetProductsQuery } from '@/redux/services/productsApi';
import Link from 'next/link';

export default function  AddProductPage() {
    const form = useForm({
        initialValues: {
          email: '',
          termsOfService: false,
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });

      return (
        <Box maw={340} mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>

          <Select
                 withAsterisk
                label="Category"
                placeholder="Pick Category"
                data={['React', 'Angular', 'Vue', 'Svelte']}
                {...form.getInputProps('email')}
                />
                
            <TextInput
              withAsterisk
              label="Name"
              placeholder="Product Name"
              {...form.getInputProps('email')}
            />
            <TextInput
              withAsterisk
              label="Description"
              placeholder="Description"
              {...form.getInputProps('email')}
            />

           
            <NumberInput
                withAsterisk
                label="Price"
               
                placeholder="Price"
                {...form.getInputProps('email')}
                />
             <NumberInput
                withAsterisk
                label="Quantity"
                
                placeholder="Quantity"
                {...form.getInputProps('email')}
                />

           
           
    
            <Group justify="flex-end" mt="md">
              <Button type="submit"  color={'teal'}>Submit</Button>
            </Group>
          </form>
        </Box>
      );
         
}