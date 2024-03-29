<!-- Originally at signal-k/polygon: Lightweight API demos for our citizen science platform -->

<h2 align="center">Polygon Experiments</h2>

`Ropsten` branch: creating some erc20 implementations based on Gridcoin & Moralis, and integrating it with a python & js-based backend & API
`Ropsten-Cat` branch: experimenting with calling APIs from the custom flask application inside `server` dir
Generator: [nft generator](https://github.com/Signal-K/theclub/blob/b1f24fb40645c21af52b96af17d4a4efff9ba74c/generator%2Favatar_generator.py)
`flask-frontend` branch: simplifying from `ropsten-cat` to just a simple react-frontend and flask-backend framework which will later be extended into `Ropsten-Cat` branch again

Scope: Users will be able to add their own citizen science data (connected to the [dao](https://github.com/signal-k/marketplace/issues/7)) in different buckets like "planet hunters" in Zooniverse. This will be publicly accessible via an API and will be hosted partially with Moralis & partially on our own Umbrel/CasaOS servers. This also integrates with the Panoptes APIs from Zooniverse & Gridcoin/Curecoin
___

<p align="center">
  <img src="data:image/png;base64,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" width="300" heigth="300">
</p>


<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-APACHE-%23F8952D">
  </a>
</p>

___


## 📝 What is "Signal-K/polygon"?

Simple experiments relating to the creation of a custom, production-ready polygon token for use in our game engine network "Star Sailors"

We're also testing our API endpoints here, to investigate the desired integrations with our token and the rest of our product ecosystem

## 🌱 Software Requirements

NodeJS v16.1
Ganache CLI
Pipenv

### ⛓ Python Requirements
See `Pipfile` in the root directory for the full list of dependencies. Packages should be installed by creating a `pipenv shell` and then installing all modules.

See `./docs/FlaskProcess` for information and updates about the python components.

### 🦠 Node Requirements
These requirements are for the node/react components of this sample NFT project

Use either `yarn install` or `npm install` to install all the required node packages.

Ensure that the Wallet Network address is set correctly (should be port 8545 on  the localhost if running off `ganache-cli`)

* `Redux` -> State management system
* `Redux-thunk` -> Provides the ability to write action creators that return a function
* `React-redux` -> Get `redux` to work with `react`
* `web3` -> Provides access to blockchain-specific functions & utilities (example authentication)
* `styled-components` -> Easy css library
* `@openzeppelin/contracts` -> Provides reference to ERC tokens for integration with the smart contract (see `contracts` folder/directory)

## 🚀 Technologies Used

The project was developed using the following technologies

- Node
- Polygon
- Ethereum
- Avalanche
- Moralis


# 🔌 Connected repositories
The following repositories are utilised, or utilise the Signal-K/polygon repository:

- [Signal-K/marketplace](https://github.com/Signal-K/marketplace/)
- [Eth remix gist](https://gist.github.com/Gizmotronn/d3796de3a2ec3cfde90d4fd6356ca881)
