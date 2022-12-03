import { useQuery } from "react-query";
import * as PushAPI from "@pushprotocol/restapi";
const FetchNotifications = () => {
  return useQuery(["notifications"], () =>
    PushAPI.user.getFeeds({
      user: "eip155:5:0x125a287746989EABeb71c795c5114E311C4D02f7", // user address in CAIP
      spam: true,
      env: "staging",
    })
  );
};

export { FetchNotifications };
