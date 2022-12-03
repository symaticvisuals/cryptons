
// import { getSocialLoginSDK, socialLoginSDK } from "@biconomy/web3-auth";
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { sendNotification , optInSubscription } from "../../backend/pushNotif";

import SocialLogin, { getSocialLoginSDK } from "@biconomy/web3-auth";
import { ethers } from "ethers";
import "@biconomy/web3-auth/dist/src/style.css"
import { ColorConstants } from "../../ColorConstants";
import { CreatorForm } from "./creator-form";
import { RedeemForm } from "./redeem-form";

function CreatorPage() {
  const [data, setData] = useState("No result");

  // from here
  const initialState = {
    provider: null,
    web3Provider: null,
    ethersProvider: null,
    address: "",
    chainId: "80001",
  };
  const [web3State, setWeb3State] = useState(initialState);
  const { provider, web3Provider, ethersProvider, address, chainId } =
    web3State;
  const [loading, setLoading] = useState(false);
  const [socialLoginSDK, setSocialLoginSDK] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    console.log("hidelwallet");
    if (socialLoginSDK && socialLoginSDK.provider) {
      socialLoginSDK.hideWallet();
    }
  }, [address, socialLoginSDK]);
  const [gSigner, setGSigner] = useState(null);
  const connect = useCallback(async () => {
    if (address) return;
    if (socialLoginSDK?.provider) {
      setLoading(true);
      console.log(socialLoginSDK.provider, "+++++++++++++=");
      console.info("socialLoginSDK.provider", socialLoginSDK.provider);
      const web3Provider = new ethers.providers.Web3Provider(
        socialLoginSDK.provider
      );
      const signer = web3Provider.getSigner();
      setGSigner(signer);
      const gotAccount = await signer.getAddress();
      const network = await web3Provider.getNetwork();
      setWeb3State({
        provider: socialLoginSDK.provider,
        web3Provider: web3Provider,
        ethersProvider: web3Provider,
        address: gotAccount,
        chainId: Number(network.chainId),
      });
      setLoading(false);
      return;
    }
    if (socialLoginSDK) {
      socialLoginSDK.showWallet();
      return socialLoginSDK;
    }
    setLoading(true);
    const sdk = await getSocialLoginSDK("0x13881");
    sdk.showConnectModal();
    sdk.showWallet();
    setSocialLoginSDK(sdk);
    setLoading(false);
    return socialLoginSDK;
  }, [address, socialLoginSDK]);

  const getUserInfo = useCallback(async () => {
    if (socialLoginSDK) {
      const userInfo = await socialLoginSDK.getUserInfo();
      console.log("userInfo", userInfo);
      setUserInfo(userInfo);
    }
  }, [socialLoginSDK]);

  // after metamask login -> get provider event
  useEffect(() => {
    const interval = setInterval(async () => {
      if (address) {
        clearInterval(interval);
      }
      if (socialLoginSDK?.provider && !address) {
        connect();
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [address, connect, socialLoginSDK]);


  const callConnectWallet = async () => {
    // sendNotification("0x125a287746989EABeb71c795c5114E311C4D02f7")
    connect();

    // const res = await connectBWallet();
    // console.log(JSON.stringify(res))
    // setAddress(res)
  };

  // to here
  const test = async () => {
    // console.log("testt", address, gSigner, chainId);
    // optInSubscription(address, gSigner);
    sendNotification("0x125a287746989EABeb71c795c5114E311C4D02f7","Hello")
  };
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
        <button
        onClick={()=>callConnectWallet()}
          type="button"
          class=" text-gray-900 bg-gradient-to-r transition-all ease-linear duration-200 from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-1 focus:outline-none   font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">
          {address??'Connect Wallet'}
        </button>
        <button
        onClick={()=>test()}
          type="button"
          class=" text-gray-900 bg-gradient-to-r transition-all ease-linear duration-200 from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-1 focus:outline-none   font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">
          opt-in
        </button>
        <h1 className="text-5xl font-bold bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 text-transparent">
          Cryptons Creators
        </h1>
        <p className=" m-auto mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          sequi enim. Eius velit iure eveniet quasi provident similique
        </p>
        <div className="">
          <div className=" flex flex-col gap-4 m-auto mt-10 p-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-left">
                The Amount of Bounty
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Amount"
                className="rounded-lg border-none focus:ring-0 py-3 px-5"
                style={{ background: ColorConstants.greenDark }}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-left">
                Number of Coupons
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Coupons"
                className="rounded-lg border-none focus:ring-0 py-3 px-5"
                style={{ background: ColorConstants.greenDark }}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-left">
                Expiry Date for Coupons
              </label>
              <input
                type="date"
                name=""
                id=""
                placeholder="Date"
                className="rounded-lg border-none focus:ring-0 py-3 px-5"
                style={{ background: ColorConstants.greenDark }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-left">
                Keywords for Coupon
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Keywords"
                className="rounded-lg border-none focus:ring-0 py-3 px-5"
                style={{ background: ColorConstants.greenDark }}
              />
            </div>
            <div className="">
              <label class="text-left" for="file_input">
                Upload Custom Logo
              </label>
              <br />
              <input
                class="rounded-lg border-none focus:ring-0 "
                style={{ background: ColorConstants.greenDark }}
                id="file_input"
                type="file"
                onChange={async (e) => {
                  setData(e.target.files[0]);
                  console.log(e.target.files[0]);
                }}
              />
              <p class="mt-1 text-sm" id="file_input_help">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>

            <button
              class="relative inline-flex items-center justify-center hover:translate-y-1 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 text-white hover:text-gray-900 focus:outline-none  "       >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75   bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
                Create Coupons
              </span>
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 text-transparent">
          {!checked ? "CREATORS" : "REDEEM HERE"}
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
