import one

def func():
  print("calling two func")

if __name__ == "__main__":
  one.func()
  print("two.py")
  print(__name__)
else: 
  print("imported two.py")
  print(__name__)