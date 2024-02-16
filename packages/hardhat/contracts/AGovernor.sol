// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./interfaces/IAlimon.sol"; // Import IAlimon interface

contract AGovernor is Governor, GovernorVotes, GovernorVotesQuorumFraction, GovernorTimelockControl, AccessControl {
    bytes32 public constant PROPOSER_ROLE = keccak256("PROPOSER_ROLE");
    bytes32 public constant EXECUTOR_ROLE = keccak256("EXECUTOR_ROLE");

    IAlimon private _alimoni;
    IBlast private _blastContract;

    constructor(IVotes _token, address _alimonContractAddress, address _blastContractAddress)
        Governor("AGovernor")
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(4) // Example quorum: 4%
        GovernorTimelockControl()
    {
        require(_alimonContractAddress != address(0), "AGovernor: Alimon address cannot be zero");
        require(_blastContractAddress != address(0), "AGovernor: Blast address cannot be zero");
        _alimoni = IAlimon(_alimonContractAddress);
        _setupRole(DEFAULT_ADMIN_ROLE, _alimonContractAddress); // Set Alimon as admin
        _setupRole(PROPOSER_ROLE, msg.sender); // Allow anyone to propose
        _setupRole(EXECUTOR_ROLE, address(0)); // Allow anyone to execute
    }
    
    // Override required functions from the Governor contracts
    function votingDelay() public pure override returns (uint256) {
        return 1; // 1 block
    }

    function votingPeriod() public pure override returns (uint256) {
        return 45818; // ~1 week in blocks (assuming 15s blocks)
    }

    function proposalThreshold() public view override returns (uint256) {
        return 10000 * 10**18; // Example threshold
    }

    event ProposalCreated(uint256 proposalId, address proposer);
    event VoteCast(address voter, uint256 proposalId, bool support, uint256 votes);

    // Emit these events in the respective functions
}
