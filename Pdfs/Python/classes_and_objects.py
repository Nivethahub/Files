# class car 
class Car:
    speed=0
    start=False
    def startcar(self):
        self.start = True
        print("car started")
    def increase_speed(self, delta):
        if self.start:
            self.speed+= delta
            print("speed increasing")
        else:
            print("start the car first")
    def stop(self):
        self.speed=0
        print("hault")

car = Car()
car.increase_speed(10)
car.startcar()
car.increase_speed(40)
car.stop()