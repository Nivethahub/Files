# dictionary
# allows u  to work with key value pair
student = {"name":"nivetha","age":25,"gender":"female"}
# {'name': 'nivetha', 'age': 25, 'gender': 'female'}
print(student)
# 25
print(student["age"])
# female
print(student["gender"])


# 25
print(student.get("age"))
# returns default value None if the key doesn't exists
print(student.get("phone"))

# instead of showing the default value as none 
# we use customized error
# output:NOT FOUND
print(student.get("phone","NOT FOUND"))


# new entry
student["phone"]="dddddddd"
# update name
student["age"]=24
# {'name': 'nivetha', 'age': 24, 'gender': 'female', 'phone': 'dddddddd'}
print(student)



# instead of above mentioned we can use update method
# mostly we use updated method for the multiple datas
student.update({"name":"Nivii","age":23,"address":"chennai"})
# {'name': 'Nivii', 'age': 23, 'gender': 'female', 'phone': 'dddddddd', 'address': 'chennai'}
print(student)


# del the data along with the key
del student["address"]
# {'name': 'Nivii', 'age': 23, 'gender': 'female', 'phone': 'dddddddd'}
print(student)


# using pop method we can able to del
modifieddata =  student.pop("phone")
# dddddddd     -- data deleted
print(modifieddata)
# {'name': 'Nivii', 'age': 23, 'gender': 'female'}
print(student)


# loops
# 3
print(len(student))

# to check the key values
# dict_keys(['name', 'age', 'gender'])
print(student.keys())

# to check the value datas
# dict_values(['Nivii', 23, 'female'])
print(student.values())

# to check the key and value datas
# dict_items([('name', 'Nivii'), ('age', 23), ('gender', 'female')])
print(student.items())

# looping based on the key and values

# output:
# name Nivii
# age 23
# gender female

for key,value in student.items():
    print(key, value)

# only key

# output:
# name
# age
# gender
for key in student:
    print(key)

# for only the value

# output
# Nivii
# 23
# female
for value in student.values():
    print(value)