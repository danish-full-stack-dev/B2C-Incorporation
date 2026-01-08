import Head from "next/head";

function SEO({ title, description }) {
  return (
    <Head>
      <title>{title || "Default Title"}</title>
      <meta
        name="description"
        content={description || "Default description."}
      />
      <meta property="og:title" content={title || "Default Title"} />
      <meta
        property="og:description"
        content={description || "Default description."}
      />
    </Head>
  );
}

export default SEO;
