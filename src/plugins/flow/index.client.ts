import * as fcl from "@onflow/fcl";

export default defineNuxtPlugin((nuxtApp) => {
  const appName = "App Name";
  // initialize fcl
  fcl
    .config()
    .put("flow.network", process.env.CHAIN_ENV)
    .put("accessNode.api", process.env.ACCESS_API)
    .put("discovery.wallet", process.env.WALLET_DISCOVERY)
    .put("app.detail.title", appName)
    .put("app.detail.icon", "https://i.imgur.com/r23Zhvu.png")
    .put("service.OpenID.scopes", "email email_verified name zoneinfo")
    .put("0xFlowToken", "0x7e60df042a9c0868");

  return {
    provide: {
      fclAppTitle: () => appName,
    },
  };
});
