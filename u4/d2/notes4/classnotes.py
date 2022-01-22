# class Fruit:
#     def __init__(self, name: str, type: str, seeds: bool):
#         self.name = name
#         self.type = type
#         self.seeds = seeds

#     def speak(self):
#         print("I am a", self.name)


# durian = Fruit("Durian", "Tropical", True)
# print(type(durian))
# print(durian.type)


# durian.speak()


# class Fruit:
#     type = "Tropical"

#     def __init__(self, name: str, seeds: bool):
#         self.name = name
#         self.seeds = seeds

#     def speak(self):
#         print("I am a", self.name)
#         print("I am a", Fruit.type, "fruit")  # global variables
#         print("I am a", self.type, "fruit")


# durian = Fruit("Durian", "True")
# print(type(durian))
# print(durian.type)


# durian.speak()

# durian.type = "Template"
# print(durian.type)


class Fruit:
    type = "Tropical"

    def __init__(self, name: str, seeds: bool):
        self.name = name
        self.seeds = seeds

    @classmethod
    def speak(cls):
        # print("I am a", self.name) --> don't work
        print("I am a", Fruit.type, "fruit")  # global variables
        # print("I am a", self.type, "fruit")


durian = Fruit("Durian", "True")
print(type(durian))
print(durian.type)


Fruit.speak()
durian.speak()

durian.type = "Template"
print(durian.type)
