
import React, { useState } from "react";
import StatsCard from "../components/StatsCard";
import OrderRow from "../components/OrderRow";

function Dashboard() {

  // useState
  const [filter, setFilter] = useState("All");

  const orders = [
    {
      id: "001",
      customer: "Rahul",
      product: "Laptop",
      status: "Delivered",
      amount: "₹50,000"
    },
    {
      id: "002",
      customer: "Aman",
      product: "Mobile",
      status: "Pending",
      amount: "₹20,000"
    },
    {
      id: "003",
      customer: "Priya",
      product: "Headphones",
      status: "Delivered",
      amount: "₹3,000"
    }
  ];

  return (
    <div id="dashboard">

      <h1>Admin Dashboard</h1>

      <p>Welcome to Admin Dashboard</p>


      {/* Statistics Cards */}

      <div id="statscontainer">

        <StatsCard
          title="Total Users"
          value="1250"
        />

        <StatsCard
          title="Total Orders"
          value="320"
        />

        <StatsCard
          title="Revenue"
          value="₹45,000"
        />

      </div>


      {/* Recent Orders */}

      <div id="orderrow">

        <h2>Recent Orders</h2>


        {/* Filter Buttons */}

        <div className="filter-buttons">

          <button onClick={() => setFilter("All")}>
            All
          </button>

          <button onClick={() => setFilter("Delivered")}>
            Delivered
          </button>

          <button onClick={() => setFilter("Pending")}>
            Pending
          </button>

        </div>


        {/* Orders Table */}

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>

          </thead>


          <tbody>

            {orders
              .filter((order) => {

                if (filter === "All") {
                  return true;
                }

                return order.status === filter;

              })
              .map((order) => (

                <OrderRow
                  key={order.id}
                  id={order.id}
                  customer={order.customer}
                  product={order.product}
                  status={order.status}
                  amount={order.amount}
                />

              ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;
