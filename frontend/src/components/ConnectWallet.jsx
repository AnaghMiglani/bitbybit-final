"use client";
import { useState } from "react";
import { useWeb3 } from "./context/Web3Context";

const ConnectWallet = () => {
  const { account, connectWallet } = useWeb3();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      await connectWallet();
    } catch (error) {
      console.error("Error during wallet connection:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div>
      {account ? (
        <p className="text-green-500">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
      ) : (
        <button
          onClick={handleConnect}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          disabled={isConnecting}
        >
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
