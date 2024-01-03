// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract VotingContract {

    // Initial structure of the candidate object;
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    // Mapping of candidate IDs to Candidates;
    mapping(uint256 => Candidate) public candidates;

    // Mapping of voter address to their voted status;
    mapping(address => bool) public voters;

    // Event to notify when a vote is cast
    event Voted(address indexed _voter, uint256 _candidateId);

    // Array to store candidate IDs
    uint256[] public candidateIds;

    // Constructor to add candidates when deploying the contract
    constructor(string[] memory _candidateNames) {
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates[i + 1] = Candidate(i + 1, _candidateNames[i], 0);
            candidateIds.push(i + 1);
        }
    }

    // Function to cast a vote for a candidate
    function vote(uint256 _candidateId) public {
        require(!voters[msg.sender], "You have already voted.");
        require(_candidateId > 0 && _candidateId <= candidateIds.length, "Invalid candidate ID");

        candidates[_candidateId].voteCount++;
        voters[msg.sender] = true;

        emit Voted(msg.sender, _candidateId);
    }

    // Function to get the total votes for a candidate
    function totalVotesFor(uint256 _candidateId) public view returns (uint256) {
        require(_candidateId > 0 && _candidateId <= candidateIds.length, "Invalid candidate ID");
        return candidates[_candidateId].voteCount;
    }

    // Function to get the list of candidate IDs
    function getCandidateIds() public view returns (uint256[] memory) {
        return candidateIds;
    }
}