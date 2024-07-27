import React from "react";
import woodenHome from "../../assets/images/poert1.png";
import cheeseCake from "../../assets/images/port2.png";
import tint from "../../assets/images/port3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  return (
    <>
      <div className="flex justify-center items-center portfolio">
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
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
            {[woodenHome, cheeseCake, tint, woodenHome, cheeseCake, tint].map(
              (image, index) => (
                <div key={index} className="relative group">
                  <div className="rounded-md overflow-hidden">
                    <img src={image} alt="" />
                    <div className="layer absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="text-white border rounded-full"
                        size="3x"
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
