import React, { useState } from "react";
import ConstantLogDetails from "./ConstantLogDetails";
import TableRow from "./TableRow";

const ErrorContentLayout = ({ isOpen, toggleModal, setItem, setSelectedRow, selectedRow }) => {

  const data = [
    { id: 1, tracking: '#1', description: 'Sample error description', datetime: '2024-05-24 14:23', assignment: 'Emin Arslan', severity: 'H', priority: 'M', status: '-1' },
    { id: 2, tracking: '#2', description: 'Another error description', datetime: '2024-05-25 14:23', assignment: 'Emin Arslan', severity: 'M', priority: 'L', status: "0" },
    { id: 3, tracking: '#3', description: 'Another error description2', datetime: '2024-05-25 14:23', assignment: 'Emin Arslan', severity: 'M', priority: 'L', status: "1" },
    // Daha fazla veri ekleyin
  ];

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="bg-white w-[95%] h-full  mx-auto shadow-2xl justify-center flex-row p-10 ">
      <div>
        <ul className="items-center justify-center flex-row ">
          <li className="flex justify-center">
            <h1 className="text-lg font-semibold">OptiManual</h1>
          </li>
          <li className="flex justify-center">
            <h1 className="text-2xl font-bold">ERROR LOG</h1>
          </li>
        </ul>
      </div>
      <ConstantLogDetails />
      <header className="mt-5 ">
        <div className="w-full flex">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border-x outline-none border-t w-[50%]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="relative w-[50%]">
            <select
              className="block appearance-none w-full h-full text-sm bg-white border-t border-r border-l-gray-300 px-4 py-2 leading-tight focus:outline-none focus:bg-white"
              name="filter"
              id="filter"
            >
              <option disabled selected>
                Filter by
              </option>
              <option value="all">All</option>
              <optgroup label="Status">
                <option value="solving">Solving</option>
                <option value="solved">Solved</option>
                <option value="not_started">Don't starting yet</option>
              </optgroup>
              <optgroup label="Severity">
                <option value="high">High</option>
                <option value="mid">Medium</option>
                <option value="low">Low</option>
              </optgroup>
              <optgroup label="Priority">
                <option value="high">High</option>
                <option value="mid">Medium</option>
                <option value="low">Low</option>
              </optgroup>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 0 1 1.414-1.414L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="min-w-full h-10 bg-blue-500 flex justify-center items-center">
          <span className="text-white text-xl">Error Listing and Details</span>
        </div>
      </header>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white shadow-md rounded-lg sm:text-sm insideofarea">
          <thead className="sm:text-xs">
            <tr>
              <th class="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b">
                Error Tracking #
              </th>
              <th class="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b">
                Description
              </th>
              <th class="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b">
                Date Found
              </th>
              <th class="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b">
              Assignment
              </th>
              <th class="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b">
                Severity (H, M, L)
              </th>
              <th class="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b">
                Priority (H, M, L)
              </th>
              <th class="py-2 px-4 bg-gray-200 font-semibold text-gray-700 border-b">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              isOpen={isOpen}
              toggleModal={toggleModal}
              searchTerm={searchTerm}
              data={data}
              setItem = {setItem}
              setSelectedRow = {setSelectedRow}
              selectedRow = {selectedRow}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ErrorContentLayout;
