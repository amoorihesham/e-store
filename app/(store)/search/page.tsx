import React from 'react';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const page = async (props: { searchParams: SearchParams }) => {
  const { query } = await props.searchParams;

  return <div> search params: {query} </div>;
};

export default page;
