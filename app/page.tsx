"use client"
import { useState } from 'react'
import { getDefaultProvider } from 'ethers'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon,polygonMumbai, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';import { darkTheme } from '@rainbow-me/rainbowkit';

import { 
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from '@zerodevapp/wagmi/rainbowkit'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { ConnectButton } from '@rainbow-me/rainbowkit';

function RainbowKitExample() {

  const defaultProjectId = "df5c4fb2-01c8-42ae-9658-05ab49582334";
  const connectors = connectorsForWallets([
    {
      groupName: 'Social',
      wallets: [
        googleWallet({options: { projectId: defaultProjectId }}),
        facebookWallet({options: { projectId: defaultProjectId }}),
        githubWallet({options: { projectId: defaultProjectId }}),
        discordWallet({options: { projectId: defaultProjectId }}),
        twitchWallet({options: { projectId: defaultProjectId }}),
        twitterWallet({options: { projectId: defaultProjectId }})
      ],
    },
  ]);

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()],
  )
  const client = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  })

  return (
    <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains} modalSize={'compact'} theme={darkTheme()} >
            <div className=" flex justify-center m-20">
              <ConnectButton />
            </div>
            
        </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default function Home() {
  return (
    <div>
      {RainbowKitExample()}
    
    </div>
 
  );
}
