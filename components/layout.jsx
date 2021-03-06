import Head from "next/head";
import PropTypes from "prop-types";

import { getGradient } from "@/lib/gradients";

const Layout = ({ title, description, children }) => {
  const gradient = getGradient();

  return (
    <>
      <Head>
        <title>{title} - Sid Adusumelli</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <h1
        className={`text-4xl leading-normal tracking-tighter font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
      >
        {title}
      </h1>
      <h2 className="mt-2 text-gray-600 dark:text-gray-400">{description}</h2>
      {children}
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
