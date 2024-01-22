// components/CustomHead.tsx

import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
  logo?: string;
}

const CustomHead: React.FC<Props> = ({ title, description, logo }) => (
  <Head>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <link rel="icon" href={logo || 'https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1705562452~exp=1705563052~hmac=ff9f526ddb5ae6bbdbb63317495afeeea845eeeae90610fe53f9d5a00e48af8e'} />
  </Head>
);

export default CustomHead;
