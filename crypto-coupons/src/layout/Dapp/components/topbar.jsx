import { getSocialLoginSDK } from "@biconomy/web3-auth";
import { ethers } from "ethers";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { ColorConstants } from "../../../ColorConstants";
import { FetchNotifications } from "../../../hooks/fetch-notifications";
import BrandLogo from "../../../assets/brandLogo.png";
import { Menu } from "@szhsin/react-menu";
import { MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { RiNotification4Fill } from "react-icons/ri";
import {
  gSignerContext,
  SocialLoginSDKContext,
  Web3StateContext,
} from "../../../contexts/dappContexts";

function TopBar() {

  const { web3State, setWeb3State } = React.useContext(Web3StateContext);
  const { address } = web3State;
  const { data } = FetchNotifications(address);
  const [loading, setLoading] = useState(false);
  const { socialLoginSDK, setSocialLoginSDK } = useContext(
    SocialLoginSDKContext
  );
  const [shortAddress, setShortAddress] = useState("");

  useEffect(() => {
    setShortAddress(splitAddressAndMakeShorter(address));
  }, [address]);
  const [userInfo, setUserInfo] = useState(null);

  const { gSigner, setGSigner } = useContext(gSignerContext);
  useEffect(() => {
    console.log("hidelwallet");
    if (socialLoginSDK && socialLoginSDK.provider) {
      socialLoginSDK.hideWallet();
    }
  }, [address, socialLoginSDK]);
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

  const splitAddressAndMakeShorter = (address) => {
    if (address) {
      console.log(address.slice(0, 6) + "..." + address.slice(-4));
      return address.slice(0, 6) + "..." + address.slice(-4);
    }
  };

  return (
    <div
      className="h-16 flex items-center justify-between mx-20 my-5"
      style={{ background: ColorConstants.background }}>
      <img src={BrandLogo} alt="" className="object-conatain h-12" />
      <div className="flex items-center justify-center">
        <div className="mr-4">
          <Menu
            menuButton={
              <MenuButton>
                <RiNotification4Fill color="white" fontSize={"20px"} />
              </MenuButton>
            }
            position="left"
            transition>
            {!data && <MenuItem>loading...</MenuItem>}
            {data &&
              data?.map((item, i) => (
                <MenuItem key={i}>{item?.message}</MenuItem>
              ))}
            {data?.length === 0 && <MenuItem>No Notifications</MenuItem>}
            {/* <MenuItem>{data[0]?.message}</MenuItem> */}
          </Menu>
        </div>
        <button
          onClick={() => callConnectWallet()}
          type="button"
          className=" text-white border-white border font-sans bg-[#090015] hover:bg-[#7018ff] hover:border-[#7018ff] transition-all ease-linear duration-200   focus:ring-1 focus:outline-none   font-medium rounded-lg text-sm px-5 py-3 text-center">
          {!address ? `Connect Wallet` : splitAddressAndMakeShorter(address)}
        </button>
      </div>
    </div>
  );
}

export default TopBar;
