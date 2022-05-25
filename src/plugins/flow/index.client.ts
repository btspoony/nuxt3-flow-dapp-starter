import * as fcl from "@onflow/fcl";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const appName = "App Name";

  const kvMapping = {
    "flow.network": config.public.network,
    "accessNode.api": config.public.accessApi,
    "discovery.wallet": config.public.walletDiscovery,
    "app.detail.title": appName,
    "app.detail.icon": "https://i.imgur.com/r23Zhvu.png",
    "service.OpenID.scopes": "email email_verified name zoneinfo",
    // "0xFlowToken": "0x7e60df042a9c0868"
  };

  // initialize fcl
  for (const key in kvMapping) {
    const element = kvMapping[key];
    fcl.config().put(key, element);
    if (typeof element === "string") {
      console.log(`[${appName}] Flow config[${key}]: ${element}`);
    }
  }

  return {
    provide: {
      appName: () => appName,
      fcl: fcl,
    },
  };
});
