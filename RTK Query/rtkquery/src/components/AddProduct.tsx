import React, { SyntheticEvent, useState } from 'react';
import Input from './Input.tsx';
import { ProductType } from '../types/productTypes.ts';
import {
  useAddProductMutation,
  useProductsQuery,
} from '../services/productApi.tsx';

const AddProduct: React.FC<{
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShow }) => {
  const [formData, setFormData] = useState<ProductType | {}>({});

  const [addProduct] = useAddProductMutation();
  const { refetch } = useProductsQuery();

  const gotohome = () => {
    // setAdd(false);
    setShow(false);
  };

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.id]: e.target.value,
        rating: {
          rate: 3.9,
          count: 120,
        },
      };
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await addProduct(formData as ProductType);
    refetch();
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          type="text"
          placeholder="Enter title"
          handleFormData={handleFormData}
        />
        <br />
        <Input
          id="price"
          type="number"
          placeholder="Enter price"
          handleFormData={handleFormData}
        />
        <br />
        <Input
          id="description"
          type="text"
          placeholder="Enter description"
          handleFormData={handleFormData}
        />
        <br />
        <Input
          id="category"
          type="text"
          placeholder="Enter category"
          handleFormData={handleFormData}
        />
        <br />
        <Input
          id="image"
          type="text"
          placeholder="Paste image url"
          handleFormData={handleFormData}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={gotohome}>Home</button>
    </div>
  );
};

export default AddProduct;
