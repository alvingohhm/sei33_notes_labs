import re

string_1 = "This is a string with numbers 65-1234-5678"

pattern_string_1 = r"(\d\d)-(\d\d\d\d)-(\d\d\d\d)"
pattern_string_2 = r"(\d{2})-(\d{4})-(\d{4})"

# using string directly
matches = re.search(pattern_string_1, string_1)
print(matches.group())  # 0 will give whole string too
print(matches.group(1))

# (dd)/(mm)/(yyyy) - grouping


# compiling the pattern before use
pattern_1 = re.compile(pattern_string_1)
matches = re.search(pattern_1, string_1)
print(matches.group())

string_2 = "grapple vs cripple vs whipple"

# using string directly
matches = re.findall(r"(gra|cri|whi)pple", string_2, re.IGNORECASE)
print(matches[0])

matches = re.findall(r"((gra|cri|whi)pple)", string_2, re.IGNORECASE)
print(matches)

# compiling
pattern_2 = re.compile(r"(gra|cri|whi)pple", re.IGNORECASE)
matches = re.findall(pattern_2, string_2)
print(matches[0])
print(matches[1])
print(matches[2])

for match in re.finditer(pattern_2, string_2):
    print(match)

for match in re.finditer(pattern_2, string_2):
    print(match.group())
