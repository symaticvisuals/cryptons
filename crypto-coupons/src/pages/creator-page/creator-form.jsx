import React from "react";
import { ColorConstants } from "../../ColorConstants";

function CreatorForm () {
  const [data, setData] = React.useState({});
  const onChange = (e, limit = 0) => {
    if (limit !== 0) {
      // limit the characters to 4
      if (e.target.value.length > limit) {
        return;
      }
     }
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const onSubmit = () => { 
    const randomString = Math.random().toString(10).substring(2, 4) + Math.random().toString(12).substring(2, 10).toUpperCase();
    const keywordString = data.keywords ? `${data.keywords}${randomString}`: `CRYCOP${randomString}`
    console.log(keywordString);
  }
  return (
    <div className=" flex flex-col gap-4 m-auto mt-10 p-4">
      <div className="flex flex-col">
        <label  className="text-left">
          The Amount of Bounty
        </label>
        <input
          type="number"
          name="amount"
          id=""
          onChange={onChange}
          placeholder="Amount"
          className="rounded-lg border-none focus:ring-0 py-3 px-5"
          style={{ background: ColorConstants.greenDark }}
        />
      </div>
      <div className="flex flex-col">
        <label  className="text-left">
          Number of Coupons
        </label>
        <input
          type="number"
          name="number"
          id=""
          onChange={onChange}
          placeholder="Coupons"
          className="rounded-lg border-none focus:ring-0 py-3 px-5"
          style={{ background: ColorConstants.greenDark }}
        />
      </div>
      <div className="flex flex-col">
        <label  className="text-left">
          Expiry Date for Coupons
        </label>
        <input
          type="date"
          name="expiryDate"
          id=""
          onChange={onChange}
          placeholder="Date"
          className="rounded-lg border-none focus:ring-0 py-3 px-5"
          style={{ background: ColorConstants.greenDark }}
        />
      </div>

      <div className="flex flex-col">
        <label  className="text-left">
          Keywords for Coupon
        </label>
        <input
          type="text"
          name="keywords"
          id=""
          value={data.keywords ?? null}
          onChange={(e) => { 
            onChange(e, 6);
          }}
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
        class="relative inline-flex items-center justify-center hover:translate-y-1 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 text-white hover:text-gray-900 focus:outline-none  "
        onClick={onSubmit}
      >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75   bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
          Deploy Bounty
        </span>
      </button>
    </div>
  );
}

export { CreatorForm };
