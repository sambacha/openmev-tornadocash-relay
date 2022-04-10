import createIdentity from "@interep/identity"
import detectEthereumProvider from "@metamask/detect-provider"
import { ethers } from "ethers"

const ethereumProvider = (await detectEthereumProvider()) as any
const provider = new ethers.providers.Web3Provider(ethereumProvider)
const signer = provider.getSigner()

const identity = await createIdentity((message) => signer.signMessage(message), "Twitter")