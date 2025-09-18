import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const getAlldata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getAlldata();
  }, []);

  const deleteItem = (e, product) => {
    e.preventDefault();
    fetch(`https://fakestoreapi.com/products/${product.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then(() => getAlldata());
  };

  const updateItem = (e, product) => {
    e.preventDefault();
    fetch(`https://fakestoreapi.com/products/${product.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        price: 200,
      }),
    }).then(() => getAlldata());
  };

  return (
    <>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th> ID </th>
            <th> Title </th>
            <th> Price </th>
            <th> Action </th>
          </tr>
        </thead>
        {products.map((product) => {
          return (
            <tbody key={product.id}>
              <tr>
                <td> {product.id} </td>
                <td> {product.title} </td>
                <td> {product.price} </td>
                <td>
                  <Link
                    type="button"
                    className="btn btn-outline-primary"
                    to={`/products/${product.id}`}
                  >
                    View
                  </Link>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={(e) => {
                      deleteItem(e, product);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={(e) => {
                      updateItem(e, product);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default Home;
