import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center contact">
        <div>
          <div className="sec-head">
            <div className="text-center pt-4">
              <h2 className="uppercase mb-3 text-3xl font-bold">
                Portfolio Component
              </h2>
              <div className="flex items-center justify-center mb-3">
                <div className="line pLine me-3"></div>
                <FontAwesomeIcon
                  icon={faStarHalfStroke}
                  className="text-sky-950"
                  size="2x"
                />
                <div className="line pLine ms-3"></div>
              </div>
            </div>
          </div>
          <form className="w-50  mx-auto  bg-white p-8  relative">
            <div className="mb-10">
              <label
                className="block text-white-700 text-sm font-bold mb-2 "
                htmlFor="name"
              ></label>
              <input
                className="w-full px-3 py-2 bg-white border-b border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                id="name"
                name="name"
                placeholder="userName(john)"
              />
            </div>
            <div className="mb-10">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="userAge"
              ></label>
              <input
                className="w-full px-3 py-2 bg-white border-b border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="age"
                id="userAge"
                name="userAge"
                placeholder="userAge(+12)"
              />
            </div>
            <div className="mb-10">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="email"
              ></label>
              <input
                className="w-full px-3 py-2 bg-white border-b border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-10">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="password"
              ></label>
              <input
                className="w-full px-3 py-2 bg-white border-b border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                id="password"
                name="password"
                placeholder="********(Example: HKsjfe256$)"
              />
            </div>

            <button
              className="w-40 absolute left-8 bg-emerald-500 text-white text-sm font-bold p-2 rounded-md hover:bg-emerald-600 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
