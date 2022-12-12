import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Barnyard Millets</h1>

      <div className="block w-full m-auto text-center">
        <StaticImage
          src="../../images/millets/barnyard-info.png"
          alt="Barnyard Millets"
          placeholder="blurred"
        />
      </div>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Barnyard Millets" />;
