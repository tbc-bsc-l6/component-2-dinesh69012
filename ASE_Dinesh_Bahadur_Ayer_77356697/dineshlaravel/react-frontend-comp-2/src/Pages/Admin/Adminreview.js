import React from "react";
import AdminHeader from "./AdminHeader";
import { useEffect } from "react";
import axios from "axios";

export default function Adminreview() {
 

  return (
    <>
      <AdminHeader />
      <div className="flex justify-end  pt-[140px] ">
        <div className=" ">
          <h1 className="text-2xl font-bold text-[#2F80ED]">
            Customer Reviews
          </h1>
          <p>Add Customer Feedbacks to your Homepage. </p>

          <div className="w-[1000px] bg-[#ffffff] mt-[40px] ">
            <table className="table table-hover  table-striped">
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col"> Contact</th>
                  <th scope="col">Customer ID</th>
                  <th scope="col">Rating</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
