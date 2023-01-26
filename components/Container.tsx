import Head from "next/head";

export default function Container({
  title,
  children,
  ...props
}: {
  title: string;
  children: React.ReactNode;
  [props: string]: any;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Create your resume with ease. type in your information and download as PDF"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Resume maker" />
        <meta name="robots" content="follow, index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={props.className}>{children}</main>
    </>
  );
}
