# Reading Material

Read through the examples in these two articles about [`for` loops](https://www.digitalocean.com/community/tutorials/how-to-construct-for-loops-in-python-3) and [`while` loops](https://www.digitalocean.com/community/tutorials/how-to-construct-while-loops-in-python-3) from Digital Ocean. Then, answer the following questions.

1. What is a nested loop? <br>
   <span style="background-color: #3314F6">Ans: Is looping a loop within another loop</span>

2. Which kind of loop is based on a conditional statement: while loops or for loops?<br>
   <span style="background-color: #3314F6">Ans: While loop is bases on condition</span>

3. When you want to iterate a specific number of times, would you typically use a while loop or a for loop?<br>
   <span style="background-color: #3314F6">Ans: for loop, for known number of iteration</span>

4. Is it possible to loop through a string one letter at a time? What is the example given in the article?<br>
   <span style="background-color: #3314F6">Ans: yes</span>

   ```python
    sammy = 'Sammy'
    for letter in sammy:
    print(letter)

    Output:
    S
    a
    m
    m
    y
   ```

5. Extrapolate from what you learned in the articles: Do you think a for loop can be nested inside a while loop? Why or why not?<br>
   <span style="background-color: #3314F6">Ans: yes it is possible. They are just loops and for while loop it is looping while evaluating a condition. if it does not match it will continue to loop. Any for loop within will just iterate the no of time specify while the while loop evaluating the condition.</span>
