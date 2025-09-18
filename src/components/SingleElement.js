import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleElement() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json().then((data) => setProduct(data))
    );
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {id && (
        <>
          <h1>{product.title}</h1>

          <img
            src={product.image}
            className="rounded mx-auto d-block"
            alt="..."
          ></img>

          <h2>{product.price}</h2>
          <p>{product.description}</p>
        </>
      )}
    </>
  );
}

export default SingleElement;
