pragma solidity ^0.4.24;

contract FindMe {

    address private owner;

    uint256 public fee;

    mapping(address => bytes32[]) ownerPositions;
    mapping(address => bytes32[]) userApplications;
    mapping(bytes32 => uint256) bounties;
    mapping(bytes32 => address) positionOwner;
    mapping(bytes32 => address[]) applicants;

    event PositionAdded(
        address indexed _from,
        bytes32 indexed _jobId
    );

    event PositionApplied(
        address indexed _applicant,
        address indexed _owner
    );

    constructor() public {
        owner = msg.sender;
        fee = 100 finney;
    }

    function getUserApplications() public view returns (bytes32[]) {
        return userApplications[msg.sender];
    }

    function getOwnerPositions() public view returns (bytes32[]) {
        return ownerPositions[msg.sender];
    }

    function getApplicants(bytes32 _jobId) public view returns (address[]) {
        return applicants[_jobId];
    }

    function makeApplication(bytes32 _jobId) public payable {
        userApplications[msg.sender].push(_jobId);
        applicants[_jobId].push(msg.sender);

        emit PositionApplied(msg.sender, positionOwner[_jobId]);
    }

    function addPosition(bytes32 _jobId) public payable {
        ownerPositions[msg.sender].push(_jobId);
        bounties[_jobId] = 150;
        emit PositionAdded(msg.sender, _jobId);
    }
}