import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Input = ({ label, type, id, name, autoComplete, required }) => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center  py-2 lg:px-8 ">
      <div className="  sm:w-full sm:max-w-sm ">
        <div>
          <div className="flex w-[580px] justify-between ">
            <label
              htmlFor={id}
              className="block text-sm font-small leading-6 text-gray-900"
            >
              {label}
            </label>
            {type === "password" && (
              <div className="text-sm">
                <button
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  onClick={() => {}}
                >
                  Forgot password?
                </button>
              </div>
            )}
          </div>
          <div className="mt-2 relative ">
            <input
              id={id}
              name={name}
              type={type}
              autoComplete={autoComplete}
              required={required}
              className="block w-full rounded-md pl-10 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-[580px] rounded-md sm:text-sm focus:ring-1"
            />
            {type === "email" && (
              <MdEmail
                className="absolute bottom-3.5 left-3 h-5 w-5 text-blue-600"
                aria-hidden="true"
              />
            )}
            {type === "password" && (
              <RiLockPasswordFill
                className="absolute bottom-3.5 left-3  h-5 w-5 text-blue-600"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;