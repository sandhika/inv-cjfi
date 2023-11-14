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
import { useRouter } from 'next/router'
import MantineLogo  from '../../public/cjfi-logo.jpg';
import { IconPhoto,IconReceipt,IconShoppingCart } from '@tabler/icons-react';
import Background from '../../public/6079758.jpg';
import { Provider } from "react-redux";
import {store} from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();

  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
    <AppShell header={{ height: 65 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
     
      <AppShell.Navbar p="md">
     
      <Stack >

     
      <Button justify="left" style={{border:"0px"}} fullWidth leftSection={<IconReceipt size={14} />} variant="default" onClick={()=>router.push('/products')}>
        Product
      </Button>
      {/* <Button justify="left" style={{border:"0px"}} fullWidth leftSection={<IconShoppingCart size={14} />} variant="default">
        Transaction
      </Button> */}
    </Stack>
   
      </AppShell.Navbar>
      
      <AppShell.Header >
        <Group h="100%" gap="lg" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image src={MantineLogo} 
           width={45}
           height={45}
           alt='Logo'
          />
          <Text fw={700} c="green.9">MY-INVENTORY</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Main><Component {...pageProps} /></AppShell.Main>
    </AppShell>

    
    </Provider>
    </MantineProvider>
  );
}