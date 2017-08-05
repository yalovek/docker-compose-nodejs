import Head from 'next/head';
import Link from 'next/link';
import { getInitialProps } from '../utils';

const Page = ({ texts }) => (
  <main>
    <Head>
      <title>{texts.title}</title>
    </Head>
    <h1>{texts.title}</h1>
    <Link href={texts.link.url}><a>{texts.link.text}</a></Link>
  </main>
);

Page.getInitialProps = getInitialProps;

export default Page;
