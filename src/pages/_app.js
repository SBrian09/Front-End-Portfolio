import '@/styles/globals.css';
import Layout from '../componentes/Layout';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}
