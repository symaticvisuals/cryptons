import { useQuery } from "react-query";
import * as PushAPI from "@pushprotocol/restapi";
const FetchNotifications = (address) => {
  return useQuery(
    ["notifications", address],
    () =>
      PushAPI.user.getFeeds({
        user: `eip155:5:${address}`, // user address in CAIP
        env: "staging",
      }),
    {
      enabled: !!address,
    }
  );
};

export { FetchNotifications };
