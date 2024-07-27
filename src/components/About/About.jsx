import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <div className="about text-white flex justify-center items-center">
        <div>
          <div className="sec-head ">
            <div className="text-center pt-4 text-white">
              <h2 className="uppercase mb-3 text-3xl font-bold">
                About Component
              </h2>
              <div className="flex items-center justify-center mb-3">
                <div className="line me-3 bg-white"></div>
                <FontAwesomeIcon
                  icon={faStarHalfStroke}
                  className="text-white "
                  size="2x"
                />
                <div className="line ms-3 bg-white"></div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="row px-5 flex">
              <div className="flex-1 w-50 ps-5 text-left ">
                <p className="mb-5">
                  Freelancer is a free Tailwind theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="flex-1 w-50 ps-5 text-left ">
                <p className="text-center">
                  Freelancer is a free Tailwind theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
