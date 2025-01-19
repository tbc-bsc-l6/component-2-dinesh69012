import React, { useEffect, useState } from "react";
import { SlideBar } from "./SlideBar";
import getPetbyId from "../../Services/Seller/getPetbyId";
import imgURL from "../../Services/Apis/imageurl";
import AddPetForm from "./AddPetForm";
import UpdatePetForm from "./UpdatePetForm";
import deletePetsById from "../../Services/Seller/deletePetsById";

function PetsSeller() {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const [pets, setPets] = useState([""]);
  const userId = localStorage.getItem("sellerId");

  const [id, setId] = useState();

  useEffect(() => {
    fetchdata();
  }, [add, edit]);
  async function fetchdata() {
    try {
      const response = await getPetbyId(userId);
      console.log(response);
      setPets(response.pets);
    } catch (error) {
      console.error(error);
    }
  }

  function handleEdit(ids) {
    setId(ids);
    setEdit(true);
  }
  async function handleDelete(ids) {
    const response = await deletePetsById(ids);
    console.log(response);
    fetchdata();
  }

  return (
    <div className="flex">
      <SlideBar />

      <div className="flex-grow">
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h2 className="text-lg font-semibold">All Products</h2>
              <p className="mt-1 text-sm text-gray-700">
                This is a list of all products. You can, edit or delete existing
                ones.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => setAdd(true)}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add new Product
              </button>
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          <span>Name</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Description
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Categorie
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Price
                        </th>
                        <th scope="col" className="relative px-4 py-3.5">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {pets.map((pet) => (
                        <tr key={pet.id}>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={pet.image_url}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {pet.name}
                                </div>
                                <div className="text-sm text-gray-700">
                                  {pet.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900 ">
                              {pet.description}
                            </div>
                            <div className="text-sm text-gray-700">
                              {pet.id}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            {pet.price}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                            <button
                              onClick={() => handleEdit(pet.id)}
                              className="text-gray-700"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(pet.id)}
                              className="text-gray-700 ml-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <UpdatePetForm edit={edit} id={id} setEdit={setEdit} />
      <AddPetForm add={add} setAdd={setAdd} />
    </div>
  );
}

export default PetsSeller;
