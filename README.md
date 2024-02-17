# Alimon

Alimon is a decentralized application built on Ethereum, leveraging the capabilities of Layer 2 solutions to enhance yield earning opportunities for ETH and stablecoin holders. It is designed to provide users with a seamless experience in bonding, minting, and claiming yields on their digital assets.

## Features

- **Yield Generation**: Utilize your ETH to earn yield in a secure and decentralized manner.
- **Bonding and Minting**: Bond your ETH to mint cETH and fETH, with the option to claim fixed yields.
- **Governance**: Participate in the governance of the Alimon protocol through the AGovernor contract, influencing future developments and updates.

## Built on Blast

Alimon is proudly built on [Blast](https://blast.io/en), the only Ethereum Layer 2 solution with native yield for ETH and stablecoins. This integration allows Alimon to offer enhanced yield opportunities and reduced transaction costs.

![Built on Blast](packages/nextjs/public/built-on-blast-logo.svg)

## Getting Started

To get started with Alimon, follow these steps:

1. **Install Dependencies**
    ```markdown
    yarn install
    ```

2. **Start Local Blockchain**
    ```markdown
    yarn chain
    ```

3. **Start the Application**
    ```markdown
    yarn start
    ```

## Smart Contracts

Alimon's functionality is powered by a set of smart contracts deployed on Ethereum. Key contracts include:

- **Alimon Contract**: Manages bonding, minting, and yield claims.
    ```solidity:packages/hardhat/contracts/Alimon.sol
    contract Alimon is ERC1155, Ownable, Pausable, ERC1155Burnable, ERC1155Supply, ReentrancyGuard {...}
    ```

- **Governance Contract (AGovernor)**: Facilitates the governance process, allowing token holders to propose and vote on changes.
    ```solidity:packages/hardhat/contracts/AGovernor.sol
    contract AGovernor is Governor, GovernorVotes, GovernorVotesQuorumFraction, GovernorTimelockControl, AccessControl {...}
    ```

## Contributing

Contributions to Alimon are welcome! Please refer to the [contributing guidelines](CONTRIBUTING.md) for more information on how to submit pull requests, report bugs, and suggest features.

## License

Alimon is open-source software licensed under the [MIT license](LICENCE).