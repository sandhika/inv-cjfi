import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../theme';

import Image from 'next/image'
import { useDisclosure } from '@mantine/hooks';
import { 
  AppShell, 
  Burger, 
  Group, 
  Skeleton,
  MantineProvider,
  Text, 
  Button,
  Stack,
  BackgroundImage,
} from '@mantine/core';
import MantineLogo  from '../../public/cjfi-logo.jpg';
import { IconPhoto,IconReceipt,IconShoppingCart } from '@tabler/icons-react';
import Background from '../../public/6079758.jpg';


export default function App({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>

    <AppShell header={{ height: 65 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
     
      <AppShell.Navbar p="md">
     
      <Stack >

      <Button justify="left" style={{border:"0px"}} fullWidth leftSection={<IconPhoto size={14} />} variant="default">
        Dashboard
      </Button>
      <Button justify="left" style={{border:"0px"}} fullWidth leftSection={<IconReceipt size={14} />} variant="default">
        Product
      </Button>
      <Button justify="left" style={{border:"0px"}} fullWidth leftSection={<IconShoppingCart size={14} />} variant="default">
        Transaction
      </Button>
    </Stack>
   
      </AppShell.Navbar>
      
      <AppShell.Header >
        <Group h="100%" gap="lg" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image src={MantineLogo} 
           width={45}
           height={45}
          />
          <Text fw={700} c="green.9">MY-INVENTORY</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Main><Component {...pageProps} /></AppShell.Main>
    </AppShell>

    
      
    </MantineProvider>
  );
}