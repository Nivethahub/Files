# Sets

# repeation will not occur
courses={'physics', 'math', 'history', 'biology'}
# unlike lists and tuple it doesnt care about the order
# for each and every time it changes the position of the value like below
# {'math', 'history', 'biology', 'physics'}
# {'history', 'biology', 'math', 'physics'}
# {'physics', 'history', 'biology', 'math'}
print(courses)

# True
print("math" in courses)

# intersection
courses2={'physics', 'CS', 'history', 'science'}
# {'physics', 'history'}    -- commonly matched value
print(courses.intersection(courses2))



# difference
# {'math', 'biology'}     --  value expect the commonly matched
print(courses.difference(courses2))


# union
# {'biology', 'physics', 'history', 'science', 'CS', 'math'}
print(courses.union(courses2))


# to create empty set
empty_set={}    #==  creates a dictionary not set
empty_set = set()   #use this to create empty set