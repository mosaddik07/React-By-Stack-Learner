import { useState } from "react";

const productList = [
  {
    id: 1,
    productName: "Keybord",
    stock: 10,
    price: 2000,
  },
  {
    id: 2,
    productName: "Mouse",
    stock: 7,
    price: 1500,
  },
  {
    id: 3,
    productName: "Laptop",
    stock: 5,
    price: 75000,
  },
  {
    id: 4,
    productName: "Headphone",
    stock: 3,
    price: 330,
  },
  {
    id: 5,
    productName: "Blutooth headphone",
    stock: 8,
    price: 440,
  },
  {
    id: 6,
    productName: "Button Phone",
    stock: 20,
    price: 2000,
  },
  {
    id: 7,
    productName: "Touch Phone",
    stock: 15,
    price: 27000,
  },
];

const TableRow = ({ id, productName, stock, price, quantity, total, increment, decrement }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled={quantity === stock} style={{ margin: "3px" }} onClick={() => increment(id)}>
          +
        </button>
        <button
          disabled={quantity === 0}
          onClick={() => {
            decrement(id);
          }}
        >
          -
        </button>
      </td>
    </tr>
  );
};

const Cart = () => {
  const [products, setProducts] = useState(
    productList.map((item) => ({
      ...item,
      quantity: 0,
      total: 0,
    }))
  );

  const incrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (id === product.id && product.stock > product.quantity) {
          product.quantity++;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const decrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (id === product.id && product.quantity > 0) {
          product.quantity--;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);
  console.log(total);

  return (
    <div style={{ margin: "30px" }}>
      <h3 style={{ textAlign: "center" }}>Product List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <TableRow
                key={product.id}
                {...product}
                increment={incrementQuantity}
                decrement={decrementQuantity}
              />
            );
          })}
        </tbody>
      </table>
      {total > 0 && <h3 style={{ marginLeft: "920px" }}>Total: ৳{total} </h3>}
    </div>
  );
};

export default Cart;
