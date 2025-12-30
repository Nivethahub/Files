import sys
import random
from enum import Enum
# print("Guess number game")
def guess_number(name = "PlayerOne"):
    gamecount = 0
    player_wins = 0
    computer_wins=0

    def play_guess_number():
        nonlocal name
        nonlocal player_wins
        nonlocal computer_wins
        # class RPS(Enum):
        #     ROCK = 1
        #     PAPER = 2
        #     SCISSORS = 3
        playerchoice = input(f"\n Please enter the value....1,2,3. \n")
        if playerchoice not in ["1","2","3"]:
            print(f"\n Please enter the valid number")
            return play_guess_number()
        player = int(playerchoice)
        computerchoice = random.choice("123")
        computer = int(computerchoice)
        print(f"\n you chose {player}")
        print(f"\n computer chose {computer}")
        def winner(player,computer):
            nonlocal name
            nonlocal player_wins
            nonlocal computer_wins
            if player == computer:
                player_wins += 1
                return f"You win!!"
            else:
                return f"You guessed wrong...You lose!!"
        result = winner(player,computer)
        nonlocal gamecount
        gamecount+=1
        print(f"\nGame count: {gamecount}")
        print(f"\n{name}'s wins: {player_wins}")
        print(f"\n{name}'s wins: {player_wins/gamecount:.2%}")

        while True:
            playagain = input("\nY for Yes or \nQ to Quit\n")
            if playagain.lower() not in ["y", "q"]:
                continue
            else:
                break

        if playagain.lower() == "y":
            return play_guess_number()
        else:
            print("\n🎉🎉🎉🎉")
            print("Thank you for playing!\n")
            if __name__ == "__main__":
                sys.exit(f"Bye {name}! 👋")
            else:
                return
    return play_guess_number

if __name__=="__main__":
    import argparse
    parse = argparse.ArgumentParser(description="Provides the game environment")
    parse.add_argument("-n","--name",metavar="name",required=True)
    args=parse.parse_args()
    guess_number_game = guess_number(args.name)
    guess_number_game()