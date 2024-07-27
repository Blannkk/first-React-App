import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import homeImage from "../../assets/images/avataaars.svg";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="home flex justify-center items-center text-white">
        <div className="text-center">
          <img className="mb-3" src={homeImage} alt="smile-child" />
          <div className="sec-head ">
            <div className="text-center pt-4 text-white">
              <h2 className="uppercase mb-3 text-3xl font-bold">
                start Framework
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
          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  );
}
