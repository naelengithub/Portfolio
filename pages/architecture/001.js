import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Project001() {
  return (
    <Layout>
      <Head>
        <title>Project No. 1</title>
      </Head>
      <h1>First Project</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
