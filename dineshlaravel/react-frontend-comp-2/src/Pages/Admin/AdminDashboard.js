import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
// import baseURL from "../../Services/Api/api";

export default function AdminDashboard() {
  //Getting total restaurantCount
  const [restaurantno, setRestaurantno] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(baseURL+"restaurants/get-all-restaurants")
  //     .then((resp) => {
  //       setRestaurantno(resp.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // //Getting total customerCount
  const [totalcustomer, setTotalcustomer] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(baseURL+"customers/get-all-customers")
  //     .then((resp) => {
  //       setTotalcustomer(resp.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data.", error);
  //     });
  // }, []);

  //Getting totalordersCount
  const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(baseURL+"orders/get-all-orders")
  //     .then((resp) => {
  //       setOrders(resp.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data.", error);
  //     });
  // });
  return (
    <>
      <div className="flex">
        <AdminHeader />
        <div className="flex-grow">
          <div className="bg-[#ede9e9]  flex flex-col gap-2 justify-center items-center  h-[750px]">
            <div className="flex mt-[-30px] ">
              <div className="bg-white  w-[60vw] h-[100px] flex justify-start items-center">
                <img
                  src="/Image/Tcustomer.png"
                  alt="TotalCustomer"
                  className="h-[60px] ml-[40px] "
                />
                <h1 className="ml-[10px] text-xl font-bold text-[#4293ef]">
                  {totalcustomer.length}
                </h1>
                <p className="mt-[40px] ml-[-20px] text-[10px] font-medium">
                  Total Customers
                </p>
                <img
                  src="/Image/Trestaurant.png"
                  alt="TotalCustomer"
                  className="h-[60px] ml-[100px]"
                />
                <h1 className="ml-[10px] text-xl font-bold text-[#4293ef]">
                  {restaurantno.length}
                </h1>
                <p className="mt-[40px] ml-[-10px] text-[10px] font-medium">
                  Total Sellers
                </p>
                <img
                  src="/Image/Torder.png"
                  alt="TotalCustomer"
                  className="h-[60px] ml-[100px]"
                />
                <h1 className="ml-[10px] text-xl font-bold text-[#4293ef]">
                  {orders.length}
                </h1>
                <p className="mt-[40px] ml-[-20px] text-[10px] font-medium">
                  Total Orders
                </p>
                <img
                  src="/Image/Tsale.png"
                  alt="TotalCustomer"
                  className="h-[60px] ml-[110px]"
                />
                <h1 className="ml-[10px] text-xl font-bold text-[#4293ef]">
                  0
                </h1>
                <p className="mt-[40px] ml-[-20px] text-[10px] font-medium">
                  Total Sale
                </p>
              </div>
            </div>

            <div className="flex gap-[50px] mt-[9px]">
              <div className="bg-white w-[60vw] h-[400px] flex justify-start  pl-5 ">
                <div className="mt-5">
                  <h1 className="text-3xl mb-6 mt-[-20px] ml-7 text-[#0037ffbe] font-semibold">
                    Customer Reviews
                  </h1>
                  <table className=" ml-10">
                    <thead className="">
                      <tr className=" mr-8 flex gap-11 mb-3 ">
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Order Item</th>
                        <th>Review Comment</th>
                        <th>Customer Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" flex gap-24">
                        <td>carlos roberto </td>
                        <td className="ml-[-10px]">20203</td>
                        <td>momo</td>
                        <td className="mr-[30px]">Tasty</td>
                        <td>9837463271</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <i className="text-3xl fa-solid fa-users-gear"></i> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
