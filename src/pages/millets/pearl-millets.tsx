import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Pearl Millets</h1>

      <div className="block w-full m-auto text-center">
        <StaticImage
          src="../../images/millets/pearl-info.png"
          alt="Pearl Millets"
          placeholder="blurred"
        />
      </div>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Pearl Millets" />;
