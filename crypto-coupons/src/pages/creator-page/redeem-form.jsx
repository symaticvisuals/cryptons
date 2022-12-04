import React from "react";
import { ColorConstants } from "../../ColorConstants";
import { WorldIDWidget } from "@worldcoin/id";
import axios from "axios";

function RedeemForm() {
  const [worldIDProof, setWorldIDProof] = React.useState(null);

  return (
    <div className=" flex flex-col gap-4 m-auto mt-6 p-4">
      <div className="flex flex-col">
        <label htmlFor="" className="text-left my-2">
          Cryptons URL
        </label>
        <input
          type="url"
          name=""
          id=""
          placeholder="Paste your Coupon Link here"
          className="rounded-lg focus:border-[#7018ff]  focus:ring-0 py-3 px-5"
          style={{ background: ColorConstants.greenDark }}
        />

        <div className="flex justify-center mt-4">
          <WorldIDWidget
            actionId="wid_2878c28b1fdf29e1ca0da6f311c65132" // obtain this from developer.worldcoin.org
            signal="my_signal"
            enableTelemetry
            onSuccess={(verificationResponse) =>
              setWorldIDProof(verificationResponse)
            } // you'll actually want to pass the proof to the API or your smart contract
            onError={(error) => console.error(error)}
          />
        </div>
        <button
          disabled={!worldIDProof}
          class="relative inline-flex items-center justify-center hover:translate-y-1 p-0.5 mb-2 mt-4 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 text-white hover:text-gray-900 focus:outline-none  ">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75   bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
            Claim Bounty
          </span>
        </button>
      </div>
    </div>
  );
}

export { RedeemForm };
