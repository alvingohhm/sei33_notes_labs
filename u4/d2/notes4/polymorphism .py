class One:
    def __init__(self, name):
        self.name = name

    def print_out(self):
        print("One->", "name:", self.name)


class Two:
    def __init__(self, name):
        self.name = name

    def print_out(self):
        print("Two->", "name:", self.name)


one = One("some")
two = Two("where")


def print_out(calling):
    calling.print_out()


print_out(one)
print_out(two)
