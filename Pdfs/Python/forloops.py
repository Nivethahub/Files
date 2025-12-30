


# FOR _ LOOPS
# looping using iteration break
nums=[2,5,8,9]
for a in nums:
    if a == 5:
        print("found")
        break
    print(a)
print("=================")


# looping using iteration continue
nums=[1,2,3,4,5,6]
for a in nums:
    if a == 4:
        print("found")
        continue
    print(a)


print("=================")
# inner loops
nums=[1,2,3,4,5,6]
for a in nums:
    for letter in "abc":
        print(a,letter)


# we need to go through a loop for a certain number of time we
# have a built in function called range() allow us to execute the loop 
# for the certain times


# range doesnot include the value eg. if i need to set the end range at 10 it only gives
# the output from 0 - 9 it doesnt include the end value
# if we can give the starting value also range(1,11) gives the output from 1 to 10

for i in range(10):
    print(i)

for i in range(1,10):
    print(i)

    