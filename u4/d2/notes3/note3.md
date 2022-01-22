## Dictionary

```python
this.dict = dict()
this_dict = {}

this_dict = {
"name": "George",
"address": "Penang"
}

print(this_dict["name"])
this_dict["gender"] = "male"

print(this_dict)

for key in this_dict:
  print(key)

for values in this_dict.values():
  print(values)

for key, value in this_dict.items():
  print(key, value)

```

## Sets

```python
this_set = set()
this_set = {1,2,3,4}
this_set = set([1,2,3])

this_set[0] #can be any number not neccessary the first item
this_set.add(8)
this_set.remove(2) #driect remover,to remove the value 2 not the ramk

# Set items are uniq

end_list = list(set([listing]))


```

## Tuple

```python
this_tuple = ("one", "two", "three")
print(this_tuple[0])

this_tuple = (1) #only 1 item, this is not going to work
this_tuple = (1,) # this work for 1 item tuple

type(this_dict)
```
