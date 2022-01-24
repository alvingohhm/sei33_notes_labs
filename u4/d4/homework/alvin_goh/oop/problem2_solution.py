#################################################################################################################
# Problem 2
# Skill you're practicing: Using dictionaries, lists, and key-value pairs.
# Your boss tasks you with creating a company directory. Make a list called employees, which will contain one dictionary per person and include the keys name, age, department, phone, and salary. Once you have the list of dictionaries set up, loop through the list and print out the name, department, and phone number of each employee. Their age and salary should remain secret
#################################################################################################################
employees = [
    {"name": "Ron Swanson", "age": 55, "department": "Management", "phone": "555-1234", "salary": "$87,000"},
    {"name": "Leslie Knope", "age": 35, "department": "Middle Management", "phone": "555-4321", "salary": "$78,000"},
    {"name": "Andy Dwyer", "age": 26, "department": "Shoe Shining", "phone": "555-1122", "salary": "$50,000"},
    {"name": "April Ludgate", "age": 29, "department": "Administration", "phone": "555-3345", "salary": "$49,000"},
]

for employee in employees:
    print(f'{employee["name"]} in {employee["department"]} can be reached at {employee["phone"]}')
