# FUNCTION:
# function are the some instruction packaged together that perform a specific task
# A function is a block of code which only runs when it is called.
# to create a function we use a def keyword stands for the definition
def hel_function():
    pass

# if we have a function but doesnt have any condition to implement means it throws error that why we pass keyword to make the function alive

# *args == we can use multiple args(postional args) if we use *
def sum(num1,num2):
    return num1+num2

# mela irukka example the  2 args dhan pass pana mudiyum incase neraiya parameters naa anupuven nu sona.. so we use *args

def multiple_items(*args):
    print(args)      #('nivetha', 'aaaa', 'bbbb')
    print(type(args))    #<class 'tuple'>
# call method
multiple_items("nivetha","aaaa","bbbb")

# keyvalue pair age=29 is the example of kwargs
def mul_key_items(**kwargs):
    print(kwargs)
    print(type(kwargs))
mul_key_items(first="firstname",second="scndname")

# *kwargs == we can use multiple kwargs(keyvalue pair) if we use **
def student_data(*args,**kwargs):
    print(args)             
    print(kwargs)             
student_data("tamil","sci","CS",name="nivi",age=16,height = 1.5)

def func(a,b,*args,option=False,**kwargs):
    print("")
    print(a,b)
    print(args)
    print(option)
    print(kwargs)

func(1,3,10,20,Name="Tom",Sal=2000)