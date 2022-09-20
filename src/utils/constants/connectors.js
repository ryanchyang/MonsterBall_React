import { configureChains, defaultChains } from 'wagmi';

// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
// const infuraId = process.env.INFURA_ID;
// alchemyProvider({ apiKey: 'yourAlchemyApiKey' })
// Configure chains for connectors to support
const { chains } = configureChains(defaultChains, [publicProvider()]);

// Set up connectors
export const connectors = [new MetaMaskConnector({ chains })];
