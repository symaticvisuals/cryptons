import React from "react";
import { ColorConstants } from "../../ColorConstants";

function CreatorPage() {
  return (
    <div
      className="w-screen h-full font-sans flex flex-col justify-center items-center tracking-tighter"
      style={{ color: ColorConstants.white }}>
      <h1
        className="text-5xl font-semibold"
        style={{ color: ColorConstants.green }}>
        Cryptons Creators
      </h1>
      <div className=" flex flex-col gap-4">
        <input
          type="number"
          name=""
          id=""
          placeholder="Amount"
          className="text-black"
          style={{ background: ColorConstants.fadedBlack }}
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="Number of Coupons"
          className="text-black"
          style={{ background: ColorConstants.fadedBlack }}
        />
        <input
          type="date"
          name=""
          id=""
          placeholder="Expiry Date"
          className="text-black"
          style={{ background: ColorConstants.fadedBlack }}
        />
        <input
          type="text"
          placeholder="Custom Coupon Code"
          className="text-black"
          style={{ background: ColorConstants.fadedBlack }}
        />
      </div>
    </div>
  );
}

export { CreatorPage };
