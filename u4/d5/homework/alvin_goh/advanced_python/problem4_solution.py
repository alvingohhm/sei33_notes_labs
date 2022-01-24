##########################################################################################################
# Problem 4: Three Commas
# Skill you're practicing: Formatting numbers.
# Russ is a billionaire and he'd like to count his wealth in the number of commas it contains. For example, someone who is a millionaire would have only two commas (1,000,000). Russ, however, has three commas and would like to see those commas displayed. Help Russ format his integer so that commas appear when it is printed out. Make sure your program will work for any value of wealth.
##########################################################################################################
wealth = 1000000000

print(f"{wealth:,}")

print("{:,}".format(wealth))

currency = "${:,.2f}".format(wealth)
print(currency)
