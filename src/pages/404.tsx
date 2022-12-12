import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layouts/HomeLayout";
import SEO from "../components/Seo";

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a page that doesn&#39;t exist</p>
    </Layout>
  );
};

export default Page;

export const Head: HeadFC = () => <title>Not found</title>;
