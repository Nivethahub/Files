# def add_one(num):
#     if(num>=9):
#         return num+1
#     total = num+1
#     print(total)
#     return add_one(total)
# func_call = add_one(0)
# # print(func_call)


# # factorial
# def factorial(n):
#     if n==1:
#         return n
#     else:
#         return n*factorial(n-1)
# factfunc =  factorial(6)
# # print(factfunc)

# #fibonnaci
# def fibonnaci(num):
#     if num==0:
#         return 0
#     elif num==1:
#         return 1
#     else:
#         return fibonnaci(num-1)+fibonnaci(num-2)
# data = fibonnaci(10)
# print(data)

#fibonacci using loop
def fib(n):
    a=0
    b=1
    if n==1:
        print(a)
    else: 
        for i in range(2,n):
                c=a+b
                a=b
                b=c
                print (c)

fib(5)

#assignment value less than 100 should get list
def fib(n):
    a=0
    b=1
    if n==1:
        print(a)
    else: 
        for i in range(2,n):
                # print("i",i)
                c=a+b
                a=b
                b=c
                if c<100:
                     print (c)

fib(100)
