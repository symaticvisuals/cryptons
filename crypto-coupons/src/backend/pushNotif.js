import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
// import { useWeb3React } from "@web3-react/core";

const PK = process.env.REACT_APP_PK // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
const _channel = "eip155:80001:0x0de6e835Fa036D04f465a0da21E51D75f426f4E2"

export const sendNotification = async(res,message="Empty") => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `Cryptons`,
        body: `${message}`
      },
      payload: {
        title: `Cryptons`,
        body: `${message}`,
        cta: '',
        img: ''
      },
      recipients: `eip155:5:${res}`, // recipient address
      channel: _channel, // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

export const optInSubscription = async(res,_signer) => {
    try {
        const apiResponse =await PushAPI.channels.subscribe({
            signer: _signer,
            channelAddress: _channel, // channel address in CAIP
            userAddress: `eip155:80001:${res}`, // user address in CAIP
            onSuccess: () => {
             console.log('opt in success');
            },
            onError: () => {
              console.error('opt in error');
            },
            env: 'staging'
          })
        
        // apiResponse?.status === 204, if sent successfully!
        console.log('API repsonse: ', apiResponse);
      } catch (err) {
        console.error('Error: ', err);
      }
}