/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

function SEO({ description, title, pathname, children }: any) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    defaultTitle,
    title: title || defaultTitle,
    author,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>
        {seo.title} | {seo.defaultTitle}
      </title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:creator" content={seo.author} />
      <link rel="icon" href="/images/logo.svg" />
      {children}

      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){
var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
rzp && rzp.init && rzp.init()}})();`,
        }}
      />
    </>
  );
}

export default SEO;
