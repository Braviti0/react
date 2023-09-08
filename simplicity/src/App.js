import './App.css';
import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import contractABI from './contract/namesABI.json';

function App() {

  const {wallet, setWallet} = useState(undefined);
  const {provider, setProvider} = useState(undefined);
  const {account, setAccount} = useState(undefined);


  const {contract, setContract} = useState(undefined);
  const {contractAddress, setContractAddress} = useState(undefined);
    setContractAddress("0x05cEa555189290f9102B003F1871f8E9BA33aA1a");


  const {name, setName} = useState(undefined);
  const {newName, setNewName} = useState(undefined);

  const getWallet = () => {
    if (window.ethereum) {
      setWallet(window.ethereum);
    }
    else {
      alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
    }
  }

  const getAccount = () => {

    if (wallet) {
      wallet.request({method: 'eth_requestAccounts'})
        .then(accounts => {
          accountChangedHandler(accounts);
          setProvider(new ethers.providers.Web3Provider(wallet));
        })
        .catch(err => {
          alert("Please allow this dApp to access your Ethereum account!");
        });
    }
  }

    const accountChangedHandler = (accounts) => {
      setAccount(accounts[0]);
      getContract();
    }

    const getContract = () => {
      if (account) {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        setContract(contract);
      }


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}
}

export default App;
