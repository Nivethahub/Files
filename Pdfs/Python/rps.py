# import random
# import sys
# from enum import Enum
# class RPS(Enum):
#     Rock=1
#     Paper=2
#     Scissors=3
# # playerchoice = input("Enter...\n 1 for Rock \n 2 for Paper \n 3 for Scissors:\n")
# # print(playerchoice)
# # print(type(playerchoice))
# # player= int(playerchoice)
# # if player<1 or player >3:
# #     sys.exit("You should enter the value of 1,2 or 3.")
# # computerchoice = random.choice("123")
# # computer = int(computerchoice)
# # # print("")
# # # we use replace fucntion to replace the RPS wrd in the console like You chose RPS.Paper
# # print("You chose "+ str(RPS(computer)).replace("RPS.",''))
# # print("You chose "+ str(RPS(player)).replace("RPS.",''))
# # print("")
# # if player==1 and computer==3:
# #     print("You won!!!😍")
# # # elif player==2 and computer==3:
# # #     print("Computer won!!!😍")
# # # elif player==computer:
# # #     print("Draww..😶")


# # # if player==1 and computer==2:
# # #     print("Computer won!!!😍")
# # # if player==computer:
# # #     print("Draww..😶")
# # elif player==3 and computer==2:
# #     print("You won!!!😍")


# # elif player==computer:
# #     print("Draww..😶")
# # elif player==2 and computer==1:
# #     print("You won!!!😍")
# # # if player==3 and computer==1:
# # #     print("Computer won!!!😍")
# # else:
# #     print("Python wins!!🐍")


# #using recursive function
# def rps(name='PlayerOne'):
#     game_count = 0
#     player_wins = 0
#     python_wins = 0
#     def play_rps():
#         playerchoice = input("Enter...\n 1 for Rock \n 2 for Paper \n 3 for Scissors:\n")
#         if playerchoice not in ["1","2","3"]:
#             print("You must enter 1,2, or 3.")
#             return play_rps()
#         player=int(playerchoice)
#         computerchoice = random.choice([1, 2, 3])
#         computer = int(computerchoice)
#         print(f"computer chose {str(RPS(computer)).replace("RPS.",'')}")
#         print(f"You chose  {str(RPS(player)).replace("RPS.",'')}")
#         def Gaming_result(player,computer):
#             if (player == 1 and computer == 3) or (player == 3 and computer == 2) or (player == 2 and computer == 1):
#                     print("You won!!!😍")
#             elif player == computer:
#                     print("Draw...😶")
#             else:
#                     print("Python wins!!🐍")
#             gamedata = Gaming_result(player,computer)
#             nonlocal game_count
#             game_count += 1

#             print(f"\nGame count: {game_count}")
#             print(f"\nPython wins: {python_wins}")
#             # print(f"\'s wins: {player_wins}")

#             # print(f"\nPlay again, {name}?")
#         while True:
#             playAgain = input("\n Play Again? \nY for yes \nQ for Quit \n\n")
#             if playAgain.lower() not in ["y","q"]:
#                 continue
#             else:
#                 break
#         if playAgain.lower()=="y":
#             return play_rps
#         else:
#             print("Thank you for playing!!!")
#     play_rps()

import sys
import random
from enum import Enum


def rps(name='PlayerOne'):
    game_count = 0
    player_wins = 0
    python_wins = 0

    def play_rps():
        nonlocal name
        nonlocal player_wins
        nonlocal python_wins

        class RPS(Enum):
            ROCK = 1
            PAPER = 2
            SCISSORS = 3

        playerchoice = input(
            f"\n{name}, please enter... \n1 for Rock,\n2 for Paper, or \n3 for Scissors:\n\n")

        if playerchoice not in ["1", "2", "3"]:
            print(f"{name}, please enter 1, 2, or 3.")
            return play_rps()

        player = int(playerchoice)

        computerchoice = random.choice("123")

        computer = int(computerchoice)

        print(f"\n{name}, you chose {str(RPS(player)).replace('RPS.', '').title()}.")
        print(
            f"Python chose {str(RPS(computer)).replace('RPS.', '').title()}.\n"
        )

        def decide_winner(player, computer):
            nonlocal name
            nonlocal player_wins
            nonlocal python_wins
            if player == 1 and computer == 3:
                player_wins += 1
                return f"🎉 {name}, you win!"
            elif player == 2 and computer == 1:
                player_wins += 1
                return f"🎉 {name}, you win!"
            elif player == 3 and computer == 2:
                player_wins += 1
                return f"🎉 {name}, you win!"
            elif player == computer:
                return "😲 Tie game!"
            else:
                python_wins += 1
                return f"🐍 Python wins!\nSorry, {name}.. 😢"

        game_result = decide_winner(player, computer)

        print(game_result)

        nonlocal game_count
        game_count += 1

        print(f"\nGame count: {game_count}")
        print(f"\nPython wins: {python_wins}")
        print(f"\n{name}'s wins: {player_wins}")

        print(f"\nPlay again, {name}?")

        while True:
            playagain = input("\nY for Yes or \nQ to Quit\n")
            if playagain.lower() not in ["y", "q"]:
                continue
            else:
                break

        if playagain.lower() == "y":
            return play_rps()
        else:
            print("\n🎉🎉🎉🎉")
            print("Thank you for playing!\n")
            if __name__ == "__main__":
                sys.exit(f"Bye {name}! 👋")
            else:
                return

    return play_rps


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="Provides a personalized game experience."
    )

    parser.add_argument(
        '-n', '--name', metavar='name',
        required=True, help='The name of the person playing the game.'
    )

    args = parser.parse_args()

    rock_paper_scissors = rps(args.name)
    rock_paper_scissors()
    