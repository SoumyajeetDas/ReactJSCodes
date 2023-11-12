import React, { useState } from 'react';
import './App.css';
import {
  useDeleteProductMutation,
  useProductsQuery,
} from './services/productApi.tsx';
import ProductCheck from './components/ProductCheck.tsx';
import AddProduct from './components/AddProduct.tsx';

function App() {
  // It gives more parameters other than what it is showig down
  const { data, isError, isLoading, isFetching, isSuccess } =
    useProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const [add, setAdd] = useState<boolean>(false);

  const handleButton = (val: number) => {
    setId(val);
    setShow(true);
  };

  const addButton = () => {
    setAdd(true);
    setShow(true);
  };

  const deleteButton = async (value: number) => {
    await deleteProduct(value);
  };

  const table = (
    <div>
      <button onClick={addButton}>Add Product</button>
      <table>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Check it</th>
          <th>Delete it</th>
        </tr>

        {data?.map((val) => {
          return (
            <tr key={val.id}>
              <td>
                <img alt="Loading.." src={val.image} height={100} width={100} />
              </td>
              <td>{val.title}</td>
              <td>
                <button onClick={() => handleButton(val.id)}>
                  ${val.price}
                </button>
              </td>
              <td>
                <button onClick={() => deleteButton(val.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
  return (
    <div className="App">
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {isError && <h2>Error happened..</h2>}
      {!show && isSuccess ? (
        table
      ) : !add ? (
        <ProductCheck id={id} />
      ) : (
        <AddProduct setShow={setShow} />
      )}
      {/* {isSuccess && table} */}
    </div>
  );
}

export default App;
