pragma experimental ABIEncoderV2;

contract FindMe {

    address private owner;

    uint256 public fee;

    struct Position {
        bytes32 id;
        uint256 minRate;
        uint256 maxRate;
        uint256 expires;
        uint256 added;
        uint256 applicationFee;
        uint256 feesTaken;
        address owner;
    }

    Position[] public positions;
    mapping(uint256 => address[]) applicants;

    constructor() public {
        owner = msg.sender;
        fee = 100 finney;

        addPosition('asdf', 123, 456, 78);
    }

    function getTest() public pure returns (uint256) {
        return 123;
    }

    function getPositions() public view returns (Position[]) {
        return positions;
    }

    function getPosition(uint256 _index) public view returns (Position) {
        return positions[_index];
    }

    function addPosition(bytes32 _id, uint256 minRate, uint256 maxRate, uint256 _fee) public payable {

        uint256 expires = now + 30 days;
        positions.push(Position(_id, minRate, maxRate, now, expires, _fee, 0, msg.sender));
    }

    function apply(uint256 index) public payable {
        require(positions[index].expires < now, "Position has expired");
        require(msg.value > positions[index].applicationFee, "Fee not enough");
        positions[index].feesTaken += msg.value;

        applicants[index].push(msg.sender);
    }


}