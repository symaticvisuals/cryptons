import { ethers } from "ethers";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { gSignerContext } from "../../contexts/dappContexts";
import { sha256 } from "js-sha256";

import Marketplace from "../../Marketplace.json";
function Claim() {
  const { claimId } = useParams();

  const { gSigner } = useContext(gSignerContext);

  const redeemBounty = async () => {
    try {
      let contract = new ethers.Contract(
        Marketplace.address,
        Marketplace.abi,
        gSigner
      );
      let hash = sha256(claimId);
      let tx = await contract.redeemCoupon(
        // multiply the amount to 10 ^ 18
        hash
      );
      await tx.wait();
      alert("Coupons Claimed successfully");
    } catch (err) {
      console.log(err);
      alert("Error Claiming coupons");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 text-transparent pt-[4vh]">
        Claim Bounty
      </h1>
      <button
        className="text-white border-white border font-sans bg-[#090015] hover:bg-[#7018ff] hover:border-[#7018ff] transition-all ease-linear duration-200   focus:ring-1 focus:outline-none   font-medium rounded-lg text-sm px-5 py-3 text-center mt-4"
        onClick={redeemBounty}>
        Redeem Bounty
      </button>
    </div>
  );
}

export { Claim };
