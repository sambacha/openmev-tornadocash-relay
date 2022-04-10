import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';

const ethereumProvider = await detectEthereumProvider();
const provider = new ethers.providers.Web3Provider(ethereumProvider);
const signer = provider.getSigner();