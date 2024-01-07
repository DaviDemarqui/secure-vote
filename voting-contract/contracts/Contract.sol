// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract VotingContract {

    // Initial structure of the candidate object;
    struct Candidate {
        uint256 id;
        string name;
        string photo;
        string partyName;
        string description;
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
    constructor(string[] memory _candidateNames, string[] memory _candidatePhotos, string[] memory _candidatePartyNames, string[] memory _candidateDescription) {
        require(_candidateNames.length == _candidatePartyNames.length &&
                _candidatePartyNames.length == _candidateDescription.length,
                "Input array lengths do not match!");
        
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            uint256 candidateId = i + 1;
            candidates[candidateId] = Candidate(
                candidateId,
                _candidateNames[i],
                _candidatePhotos[i],
                _candidatePartyNames[i],
                _candidateDescription[i],
                0
            );
            candidateIds.push(candidateId);
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

    // Function to get all the candidates
    function getAllCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](candidateIds.length);
        
        for (uint256 i = 0; i < candidateIds.length; i++) {
            uint256 candidateId = candidateIds[i];
            allCandidates[i] = candidates[candidateId];
        }

        return allCandidates;
    }
}