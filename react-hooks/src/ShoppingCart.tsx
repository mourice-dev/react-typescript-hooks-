/** @format */

import { useReducer } from "react";

// all state logic lives HERE, clean and organized
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };

    case "REMOVE_ITEM":
      const item = state.items.find((i) => i.id === action.payload);
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
        total: state.total - item.price,
      };

    case "CLEAR_CART":
      return { items: [], total: 0 };

    default:
      return state;
  }
}

const initialState = { items: [], total: 0 };

const products = [
  { id: 1, name: "Keyboard", price: 49 },
  { id: 2, name: "Mouse", price: 29 },
  { id: 3, name: "Monitor", price: 199 },
];

export default function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <h2>🛍️ Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: 8 }}>
          {product.name} — ${product.price}
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
            style={{ marginLeft: 8 }}>
            Add to cart
          </button>
        </div>
      ))}

      <hr />

      <h2>🛒 Cart ({cart.items.length} items)</h2>
      {cart.items.length === 0 && <p>Cart is empty</p>}
      {cart.items.map((item, index) => (
        <div key={index}>
          {item.name} — ${item.price}
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
            style={{ marginLeft: 8 }}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${cart.total}</h3>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        🗑️ Clear Cart
      </button>
    </div>
  );
}
