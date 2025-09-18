import { useState } from "react";

function AddProduct() {
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const addItem = (e) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ price: price, title: title }),
    });
  };

  return (
    <>
      <form onSubmit={addItem}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            price
          </label>
          <input
            type="text"
            value={price}
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
}

export default AddProduct;
