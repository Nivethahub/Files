import pymongo
print(pymongo.__version__)
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["AssetImg"]
listdatas = myclient.list_database_names()
print(listdatas)
if "AssetImg" in listdatas:
    print("exists")