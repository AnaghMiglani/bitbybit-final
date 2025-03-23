"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);

  // Connect to MetaMask
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed! Please install MetaMask and try again.");
      console.error("MetaMask is not detected in the browser.");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      setProvider(provider);
      setSigner(signer);
      setAccount(accounts[0]); // First connected account
      console.log("Wallet connected successfully:", accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      if (error.code === 4001) {
        alert("Connection request was rejected. Please try again.");
      } else if (error.code === -32002) {
        alert("A wallet connection request is already pending. Please check MetaMask.");
      } else {
        alert("An error occurred while connecting to the wallet. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log("Account changed:", accounts[0]);
        } else {
          setAccount(null);
          alert("Wallet disconnected. Please reconnect.");
        }
      });

      window.ethereum.on("chainChanged", (chainId) => {
        console.log("Chain changed to:", chainId);
        window.location.reload();
      });
    } else {
      console.warn("MetaMask is not installed.");
    }
  }, []);

  return (
    <Web3Context.Provider value={{ provider, signer, account, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
