import { Link } from "react-router-dom";
import "./Orders.css";

function Orders() {
  return (
    <div className="orders">
      <h1 className="orders__title">Your Orders</h1>
      <div className="orders__empty">
        <p>You have no orders yet.</p>
        <p>
          <Link to="/">Start shopping</Link> to place your first order.
        </p>
      </div>
    </div>
  );
}

export default Orders;
