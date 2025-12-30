#we are formating the string in the more other ways but after 3.6version we are using 
# f-string for formattting the strings

person = "Nivetha"
coins=3 
print("\n"+" "+person+" "+"has"+" "+str(coins)+" "+"coins"+" "+"left")

# in previous formatting

message = "\n %s has %s coins left." %(person,coins)
print(message)

#using .format()
message = "\n {} has {} coins left.".format(person,coins)
print(message)

#format() indexing  format(0,1,2,3,4,...)
message = "\n {1} has {0} coins left.".format(coins,person)
print(message)

message="\n {pers} has {coin} coins left.".format(pers=person,coin=coins)
print(message)

player = {"person":"Dave","coins":3}
message="\n {person} has {coins} coins left.".format(**player)
print(message)
#f-string
message=f"\n {person} has {coins} coins left."
message=f"\n {person} has {2*5} coins left."
message=f"\n {person.lower()} has {2*5} coins left."
message=f"\n {player["person"]} has {2*5} coins left.".format(**player)
#output ku format pannamudiyum
num=10
print(f"\n 2.25times {num} is {2.25*num:.2f}")

#2.25*num:.2f  2.25*10 na ena 22.5 varum so athuku semicolon vechu
#.2 nu vecha two digit thalli dot varanum.  f  means fixed

for num in range(1,11):
    print(f"\n divided by 4.52 {num} is {num/4.52:.2}")

#% la result varum
for num in range(1,11):
    print(f"\n divided by 4.52 {num} is {num/4.52:.2%}")
    
