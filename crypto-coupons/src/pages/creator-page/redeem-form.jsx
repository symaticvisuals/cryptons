import React from "react";
import { ColorConstants } from "../../ColorConstants";

function RedeemForm() {
  return (
    <div className=" flex flex-col gap-4 m-auto mt-10 p-4">
      <div className="flex flex-col">
        <label htmlFor="" className="text-left">
          Cryptons URL
        </label>
        <input
          type="url"
          name=""
          id=""
          placeholder="Paste your Coupon Link here"
          className="rounded-lg border-none focus:ring-0 py-3 px-5"
          style={{ background: ColorConstants.greenDark }}
        />
        <button class="relative inline-flex items-center justify-center hover:translate-y-1 p-0.5 mb-2 mt-4 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 text-white hover:text-gray-900 focus:outline-none  ">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75   bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
            Claim Bounty
          </span>
        </button>
      </div>
    </div>
  );
}

export { RedeemForm };
