- Can write thousand of times query and mutaion in resolvers
- In resolvers first argument is the result of previous resolver and in case of array then first argument would be resolved result of the element of that index(! important)

* In typeDefs the query and mutation or any type can be declared once but those can be extend as in this repo

* The third argument in resolver is (context that is destructured to often use req as {req} and what it returns is) captured in all following resolvers
