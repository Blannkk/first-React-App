import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div>
        <div className="footer text-white text-center p-5">
          <div className="cards m-4 flex justify-around">
            <div className="card flex-1">
              <div className="card-body text-center">
                <h3 className="pt-9 font-semibold text-2xl">LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="card flex-1">
              <div className="card-body text-center">
                <h3 className="pt-9 font-semibold text-2xl">AROUND THE WEB</h3>
                <div className="icons flex justify-center space-x-3">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="mx-1 icon p-3 mt-2"
                    size="1x"
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="mx-1 icon p-3 mt-2"
                    size="1x"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="mx-1 icon p-3 mt-2"
                    size="1x"
                  />
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="mx-1 icon p-3 mt-2"
                    size="1x"
                  />
                </div>
              </div>
            </div>
            <div className="card flex-1">
              <div className="card-body text-center">
                <h3 className="pt-9 font-semibold text-2xl">
                  ABOUT FREELANCER
                </h3>
                <p>
                  Freelance is a free to use, licensed Tailwind theme created by
                  Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white py-4">
          <p className="py-2">Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
