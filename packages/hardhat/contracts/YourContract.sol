//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract YourContract {
    uint256 public playerOneChoice;
    uint256 public playerTwoChoice;
    uint256 public winner;

    function input(uint256 choice) public  {
        if (playerOneChoice == 0) {
            playerOneChoice = choice;
        }
        else if (playerOneChoice != 0) {
            playerTwoChoice = choice;
        }
    }

    function determineWinner() private view returns (uint256 outcome) {
        if (playerOneChoice == playerTwoChoice) {
            return 0;
        } else if (playerOneChoice == 1) {
            if (playerTwoChoice == 2) {
                return 2;
            } else {
                return 1;
            }
        } else if (playerOneChoice == 2) {
            if (playerTwoChoice == 3) {
                return 2;
            } else {
                return 1;
            }
        } else if (playerOneChoice == 3) {
            if (playerTwoChoice == 1) {
                return 2;
            } else {
                return 1;
            }
        }
    }

    function playGame() public {
        winner = determineWinner();
    }

    function reset() public {
        playerOneChoice = 0;
        playerTwoChoice = 0;
        winner = 0;
    }
}
