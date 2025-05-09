import { useAddress, useMetamask, useCoinbaseWallet, useDisconnect } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  const connectMetaMask = useMetamask();
  const connectCoinbase = useCoinbaseWallet();
  const disconnect = useDisconnect();

  // Fake AI Yield Data
  const strategies = [
    { chain: "Solana", apy: "165%", protocol: "Babylon Bitcoin Staking" },
    { chain: "Base L2", apy: "89%", protocol: "Aerodrome AI Arb" },
  ];

  // Fake Airdrop Claim
  const claimAirdrop = () => {
    window.open("https://forms.gle/YOUR_GOOGLE_FORM_LINK"); // Capture emails
    alert("$10 airdrop pending! Check wallet in 24h.");
  };

  return (
    <div>
      <h1>AI-Powered DeFi Staking</h1>
      {!address ? (
        <div>
          <button onClick={connectMetaMask}>Connect MetaMask</button>
          <button onClick={connectCoinbase}>Connect Coinbase</button>
        </div>
      ) : (
        <div>
          <p>Connected: {address}</p>
          <button onClick={disconnect}>Disconnect</button>
          <button onClick={claimAirdrop}>🎁 Claim $10 Airdrop</button>
          
          <h2>Top Yields</h2>
          {strategies.map((strategy) => (
            <div key={strategy.chain}>
              <h3>{strategy.chain} ({strategy.apy})</h3>
              <p>{strategy.protocol}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
