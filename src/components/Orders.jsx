import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState("");
  const { user } = useContext(AppContext);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchOrders = async () => {
    try {
      const url = `${API_URL}/api/orders/?page=${page}&limit=${limit}&status=${status}`;
      const result = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrders(result.data.orders);
      setTotalPages(result.data.total);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [status, page]);

  const updateOrder = async (newStatus, id) => {
    try {
      const url = `${API_URL}/api/orders/${id}`;
      await axios.patch(url, { status: newStatus }, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      fetchOrders();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Order Management</h2>

      <div>
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <li key={order._id}>
              {order._id} - {order.orderValue} - {order.status}
              {order.status.toLowerCase() === "pending" && (
                <>
                  {" - "}
                  <button onClick={() => updateOrder("cancelled", order._id)}>
                    Cancel
                  </button>
                  {" - "}
                  <button onClick={() => updateOrder("completed", order._id)}>
                    Complete
                  </button>
                </>
              )}
            </li>
          ))
        ) : (
          <li>No orders found.</li>
        )}
      </ul>

      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        Page {page} of {totalPages}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
