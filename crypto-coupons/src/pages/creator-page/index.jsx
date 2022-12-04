
// import { getSocialLoginSDK, socialLoginSDK } from "@biconomy/web3-auth";
import React, { useState } from "react";
import { optInSubscription } from "../../backend/pushNotif";

import "@biconomy/web3-auth/dist/src/style.css";
import { ColorConstants } from "../../ColorConstants";
import { CreatorForm } from "./creator-form";
import { RedeemForm } from "./redeem-form";

function CreatorPage() {
  const [data, setData] = useState("No result");

  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    amount: 0,
    number_of_coupons: 0,
    expiry_date: "",
    keywords: "CRYPTONS",
  });

  return (
    <div className="flex justify-center mt-[4vh]  h-full overflow-y-auto">
      <div
        className="font-sans  tracking-tighter xs:w-full sm:w-full md:w-1/3 lg:1/3"
        style={{ color: ColorConstants.white }}>
        {/* <h1 className="text-5xl font-bold bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 text-transparent">
          Cryptons Creators
        </h1> */}

        <h1 className="text-4xl text-[#7018ff] font-bold bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 text-transparent">
          {!checked ? `Generate Coupons` : `Claim Coupons`}
        </h1>
 
        <label class="inline-flex relative items-center cursor-pointer mt-2">
          <input
            type="checkbox"
            class="sr-only peer"
            value={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <div class="w-14 h-7  peer-focus:outline-none rounded-full peer bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-black  after:rounded-full after:h-6 after:w-6 after:transition-all border-gray-600 peer-checked:bg-white"></div>
          <span class="ml-3 text-sm font-medium  text-gray-300">
            Toggle to Claim Coupon
          </span>
        </label>
        <div className="">{!checked ? <CreatorForm /> : <RedeemForm />}</div>
      </div>
    </div>
  );
}

export { CreatorPage };
