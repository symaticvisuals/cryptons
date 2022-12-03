import React, { useEffect, useState } from "react";
import { ColorConstants } from "../../../ColorConstants";
import { connectBWallet } from "../../../backend/wallet";
import { socialLoginSDK } from "@biconomy/web3-auth";
import BrandLogo from "../../../assets/brandLogo.png";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import { FetchNotifications } from "../../../hooks/fetch-notifications";
import { RiNotification3Fill } from "react-icons/ri";

function TopBar() {
  const [address, setAddress] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const { data } = FetchNotifications();
  useEffect(() => {
    if (address) {
      console.log("hidelwallet");

      socialLoginSDK.hideWallet();
    }
  }, [address]);
  const callConnectWallet = async () => {
    const res = await connectBWallet();
    console.log(JSON.stringify(res));
    setAddress(res);
  };
  return (
    <div
      className="h-16 flex items-center justify-between mx-5"
      style={{ background: ColorConstants.fadedBlack }}>
      <img src={BrandLogo} alt="" className="object-conatain h-12" />
      <div className="flex items-center justify-center">
        <div className="mr-4">
          <Menu
            
            menuButton={
              <MenuButton>
                <RiNotification3Fill color="white" />
              </MenuButton>
            }>
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <MenuItem color="white">
                  <div>{item.message}</div>
                  <a
                    href="#"
                    class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div class="flex-shrink-0">
                      <img
                        class="w-11 h-11 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Jese image"
                      />
                      <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                        <svg
                          class="w-3 h-3 text-white"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="pl-3 w-full">
                      <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        New message from{" "}
                        <span class="font-semibold text-gray-900 dark:text-white">
                          Jese Leos
                        </span>
                        : "Hey, what's up? All set for the presentation?"
                      </div>
                      <div class="text-xs text-blue-600 dark:text-blue-500">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                </MenuItem>
              ))}
          </Menu>
        </div>
        <button
          onClick={() => callConnectWallet()}
          type="button"
          class=" text-gray-900 font-sans bg-gradient-to-r transition-all ease-linear duration-200 from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-1 focus:outline-none   font-medium rounded-lg text-sm px-5 py-3 text-center">
          {!address ? `Connect Wallet` : address}
        </button>
      </div>
    </div>
  );
}

export default TopBar;
