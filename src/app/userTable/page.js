"use client";
import Modal from "@/app/components/Modal";
import { useState } from "react";
import { userData } from "./data";

export default function Home() {
  const [ModalElement, setModalElement] = useState(null);
  const [users, setUsers] = useState(userData);

  const filterUsers = (search) => {
    const filteredUsers = userData.filter((user) =>
      Object.values(user).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      )
    );
    setUsers(filteredUsers);
  };

  return (
    <div className="px-4 py-2 h-full overflow-y-auto relative">
      <div className="pt-4 relative overflow-x-auto sm:rounded-lg">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <div className="relative mb-2">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
              onChange={(e) => filterUsers(e.currentTarget.value)}
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone No.
              </th>

              <th scope="col" className="px-6 py-3">
                Creation Date
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer"
                onClick={() => {
                  setModalElement(
                    <Modal user={user} closeHandler={setModalElement} />
                  );
                }}
              >
                <td className="px-6 py-4">{user.id}</td>
                <th
                  key={index}
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.username}
                </th>
                <td className="px-6 py-4">{user.phone}</td>

                <td className="px-6 py-4">{user.creationDate}</td>
                <td className="px-6 py-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {ModalElement}
    </div>
  );
}
