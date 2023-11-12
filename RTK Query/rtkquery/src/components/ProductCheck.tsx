import React from 'react';
import { useProductQuery } from '../services/productApi.tsx';

const ProductCheck: React.FC<{ id: number | null }> = ({ id }) => {
  const { data, isLoading, isError, isSuccess } = useProductQuery(id);

  const table = (
    <div>
      <img src={data?.image} alt="Loading..." height={200} width={200} />
      <p>
        <b>Title :</b>
        {data?.title}
      </p>
      <p>
        <b>Price :</b>
        {data?.price}
      </p>
      <p>
        <b>Description :</b>
        {data?.description}
      </p>
    </div>
  );

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error..</h2>}
      {isSuccess && table}
    </>
  );
};

export default ProductCheck;
