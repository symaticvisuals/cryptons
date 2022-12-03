import { Web3Auth } from "@web3auth/modal";
import Web3 from "web3";

import SocialLogin from "@biconomy/web3-auth"
import { ethers } from "ethers";


export const socialLoginSDK = new SocialLogin();
export const connectBWallet = async () => {

    if (socialLoginSDK && socialLoginSDK.provider) {
        socialLoginSDK.logout();
        console.log("logout")
        return null
      }
      
    await socialLoginSDK.init('0x5'); 
    socialLoginSDK.showConnectModal();
    socialLoginSDK.showWallet();

    if (!socialLoginSDK?.web3auth?.provider) return;
    const provider = new ethers.providers.Web3Provider(socialLoginSDK.web3auth.provider);
    // socialLoginSDK.hideWallet();

    const accounts = await provider.listAccounts();
    return accounts
}