import React, { useContext, useState } from "react";
import { ColorConstants } from "../../ColorConstants";
import QRCode from "qrcode.react";
import { v5 as uuidv5 } from "uuid";
import { optInSubscription } from "../../backend/pushNotif";
import { gSignerContext, Web3StateContext } from "../../contexts/dappContexts";
function CreatorForm() {
  const [data, setData] = React.useState({});
  const [qrString, setQrString] = React.useState("");
  const { web3State } = useContext(Web3StateContext);
  const [optIn, setOptIn] = useState(false);
  const { address } = web3State;
  const { gSigner } = useContext(gSignerContext);
  const onChange = (e, limit = 0) => {
    if (limit !== 0) {
      // limit the characters to 4
      if (e.target.value.length > limit) {
        return;
      }
    }
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/png");
    console.log(qrCodeURL);
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    aEl.click();
  };

  const onSubmit = () => {
    const randomString =
      Math.random().toString(10).substring(2, 4) +
      Math.random().toString(12).substring(2, 10).toUpperCase();
    const keywordString = data.keywords
      ? `${data.keywords}${randomString}`
      : `CRYCOP${randomString}`;
    console.log(keywordString);
    setQrString(`http://localhost:3000/${keywordString}`);
  };
  return (
    <div className=" flex flex-col gap-4 m-auto mt-6 p-4">
      {!qrString ? (
        <>
          <div className="flex flex-col">
            <label className="text-left mx-0 my-1">Value per Coupon</label>
            <input
              type="number"
              name="amount"
              id=""
              onChange={onChange}
              placeholder="Amount"
              className="rounded-lg  focus:border-[#7018ff] focus:ring-0 py-3 px-5"
              style={{ background: ColorConstants.greenDark }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-left mx-0 my-1">Number of Coupons</label>
            <input
              type="number"
              name="number"
              id=""
              onChange={onChange}
              placeholder="Coupons"
              className="rounded-lg focus:border-[#7018ff]  focus:ring-0 py-3 px-5"
              style={{ background: ColorConstants.greenDark }}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-left mx-0 my-1">Validity duration of coupons</label>
            <input
              type="number"
              name="expiryDate"
              id=""
              onChange={onChange}
              placeholder="in Days ( currently in minutes )"
              className="rounded-lg focus:border-[#7018ff]  focus:ring-0 py-3 px-5"
              style={{ background: ColorConstants.greenDark }}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-left mx-0 my-1">Keywords for Coupon</label>
            <input
              type="text"
              name="keywords"
              id=""
              value={data.keywords ?? null}
              onChange={(e) => {
                onChange(e, 6);
              }}
              placeholder="Keywords"
              className="rounded-lg focus:border-[#7018ff]  focus:ring-0 py-3 px-5"
              style={{ background: ColorConstants.greenDark }}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              value={optIn}
              onChange={(e) => {
                if (!address) {
                  alert("Please connect your wallet");
                  return;
                }
                setOptIn(!optIn);
                if (e.target.checked === true) {
                  optInSubscription(address, gSigner);
                }
              }}
              className="p-3 accent-lime-200 rounded-md checked:bg-[#0d8469] checked:text-black"
            />
            <label>Opt In for PUSH Notification</label>
          </div>

          <button
            class="relative mt-5 inline-flex items-center justify-center hover:translate-y-1 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group border border-white-2 group-hover:from-teal-300 hover:border-[#7018ff] text-white hover:text-white focus:outline-none  "
            onClick={onSubmit}>
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75  hover:bg-[#7018ff] bg-[#090015] rounded-md  w-full">
              Create Coupons
            </span>
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-3 rounded-md ">
            <QRCode id="qrCodeEl" size={150} value={qrString} />
          </div>
          <button
            class="relative inline-flex items-center justify-center hover:translate-y-1 p-0.5 mt-4 overflow-hidden text-sm font-medium  rounded-lg border border-white-2 group-hover:from-teal-300 hover:border-[#7018ff] text-white hover:text-white focus:outline-none  "
            onClick={downloadQRCode}
            disabled={false}>
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 hover:bg-[#7018ff] bg-[#090015] rounded-md w-full">
              Download to Share
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export { CreatorForm };
