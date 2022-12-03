
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connectBWallet} from "../../backend/wallet";


import { ColorConstants } from "../../ColorConstants";
import { CreatorForm } from "./creator-form";
import { RedeemForm } from "./redeem-form";

function CreatorPage() {

 
  const [address, setAddress] = useState(null);
  
  useEffect(() => {
    if (address) {
      console.log("hidelwallet");
      socialLoginSDK.hideWallet();
    }
  }, [address]);
  const callConnectWallet = async () =>{
    const res = await connectBWallet();
    console.log(res)
    setAddress(res)
  }

  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    amount: 0,
    number_of_coupons: 0,
    expiry_date: "",
    keywords: "CRYPTONS",
  });

  const [redeemForm, setRedeemForm] = useState({});

  return (
    <div className="flex justify-center mt-[4vh]  h-full overflow-y-auto">
      <div
        className=" font-sans  tracking-tighter xs:w-full sm:w-full md:w-1/3 lg:1/3"
        style={{ color: ColorConstants.white }}>
        <button
        onClick={()=>callConnectWallet()}
          type="button"
          class=" text-gray-900 bg-gradient-to-r transition-all ease-linear duration-200 from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-1 focus:outline-none   font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">
          Connect Wallet
        </button>
        <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 text-transparent">
          Cryptons Creators
        </h1>
        <p className=" m-auto mt-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          sequi enim. Eius velit iure eveniet quasi provident similique
        </p>
        <label class="inline-flex relative items-center cursor-pointer mt-2">
          <input
            type="checkbox"
            class="sr-only peer"
            value={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <div class="w-14 h-7  peer-focus:outline-none peer-focus:ring-4  peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-black  after:rounded-full after:h-6 after:w-6 after:transition-all border-gray-600 peer-checked:bg-gradient-to-r from-teal-200 to-lime-200"></div>
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
