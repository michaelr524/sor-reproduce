import { BalancerSDK, BalancerSdkConfig, Network, SwapType, SwapTypes } from "@balancer-labs/sdk";


export default async function main() {
  const chainId = 137;
  const rpcUrl = "http://svc-node-client:8484/" + chainId;

  const sdk = new BalancerSDK({
    network: chainId,
    rpcUrl: rpcUrl,
  });

  console.log('calling fetchPools()')
  sdk.swaps.fetchPools();
}

main();
