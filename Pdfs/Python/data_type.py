# String data type

# Literal assignment => directly assigned to the variable

first_name = "Nivetha"
last_name = "Ramesh"
# print(type(first_name))
# print(type(first_name)==str)
# print(isinstance(first_name,str))


# constructor function
name = str("My new name")
print(type(name))
print(type(name)==str)
print(isinstance(name,str))


# lists
courses = ["history","math","physics","biology"]

# printing the datas 
print(courses)             #['history', 'math', 'physics', 'biology']


# print the length of the data
print(len(courses))            #4



# print the particular value 
# from the data
print(courses[0])            #history


# print the value from 
# the negative index
print(courses[-1])            #biology
print(courses[-3])            #math



# throws the error if the 
# length of the lists more exists
# print(courses[4])            #  IndexError: list index out of range



# printing the range of the 
# value in the data including the start index and 
# excluding the end index
print(courses[0:2])            #['history', 'math']



# printing the range of the 
# value in the data including the start index and 
# until the orginial index value without excluding
print(courses[2:])            #['physics', 'biology']



# Add a value in the end the list
courses.append("Science")
# ['history', 'math', 'physics', 'biology', 'Science']
print(courses)



# insert the value in a particular position
courses.insert(5,"Social")
# ['history', 'math', 'physics', 'biology', 'Science', 'Social']
print(courses)



# extend method
courses2=["tamil","english"]
# it add the value along with the array 
# in the position so we are using extend method
courses.insert(0,courses2)     
 #[['tamil', 'english'], 'history', 'math', 'physics', 'biology', 'Science', 'Social']
print(courses)


courses.extend(courses2)
# ['history', 'math', 'physics', 'biology', 'Science', 'Social', 'tamil', 'english']
print(courses)


# remove the value
courses.remove("math")
# [['tamil', 'english'], 'history', 'physics', 'biology', 'Science', 'Social', 'tamil', 'english']
print(courses)



# always removing the last value in the data
courses.pop()
# [['tamil', 'english'], 'history', 'physics', 'biology', 'Science', 'Social', 'tamil']
print(courses)



# reverse
courses.reverse()
print(courses)


# sort by ascending to descending
courses = ["history","math","physics","biology"]
course3 = [1,5,8,3,2]
courses.sort()
course3.sort()
# ['biology', 'history', 'math', 'physics']
print(courses)
# [1, 2, 3, 5, 8]
print(course3)


# sort by descending to ascending
course3 = [1,5,8,3,2]
courses = ["history","math","physics","biology"]
courses.sort(reverse=True)
course3.sort(reverse=True)
# ['physics', 'math', 'history', 'biology']
print(courses)
# [8, 5, 3, 2, 1]
print(course3)


# function on the sorted list 
sortdata = sorted(courses)
# ['biology', 'history', 'math', 'physics']
print(sortdata)



# To find the value is present or not via true or false in IN-operator
# True
print("math" in courses)
# False
print("computer" in courses)

# using looping
for item in courses:
    # physics
# math
# history
# biology
    print(item)



# using looping along with the particular index and particular value
for index,course in enumerate(courses):
# 0 physics
# 1 math
# 2 history
# 3 biology
    print(index,course)


# to start the index value in 1
for index,course in enumerate(courses,start=1):
# 1 physics
# 2 math
# 3 history
# 4 biology
    print(index,course)


# we can make lists as string using the join methods
coursedata = " - ".join(courses)
# physics - math - history - biology
print(coursedata)

newdata= coursedata.split(" - ")
# ['physics', 'math', 'history', 'biology']
print(newdata)



# to create empty list
empty_list=[]    #create empty list
empty_list = list()   #use this to create empty list

# to create empty tuple
empty_tuple=()    #create empty tuple
empty_tuple = tuple()   #use this to create empty tuple


