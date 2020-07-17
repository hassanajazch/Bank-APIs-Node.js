### Projcet Details

Sample APIs for financial transactions of banks using Node.js (Express) + Sequelize

#### Running Step
- Install node v12.18.0
- Create mysql database and add db credentials in .env file
- Install Node packages - `npm install`
- Run unit test - `npm run dev`


#### Code Style
- Perfectly follow Single Responsibility rule
- I kept all business logic inside app (service + repos)
- controller will act as request controller
- different files for routes based on responsibility
- Add `prettier` to keep code ident
- Use `ESLint` to follow specific standards
- Use TRY - Catch to never miss any error

#### Testing
- I have used `JEST` for testinglfru6 
- Use AAA pattern for writing unit test (Arrange, Act, Assert)

#### Available Functionalities:
All functionalities are completed. (We can use swagger or postman too for API documentation)
```json
- Create a new bank account
 URL: localhost:4000/api/account/addAccount
 TYPE: POST
 BODY: {
        "accountNumber": "601613319268",
        "deposit": 200,
        "UserId": 4
        }

- Transfer amounts between any two accounts
 URL: localhost:4000/api/account/transferAmount
 TYPE: POST
 BODY: {
       "recipientId": 2,
       "amount": 5,
       "transferPurpose": "Donation",
       "AccountId": 1
       }

- Retrieve balances for a given account.
  URL: localhost:4000/api/account/balance
  TYPE: GET
  Query Param: accountId=1

- Retrieve transfer history for a given account.
 URL: localhost:4000/api/account/transferHistory
 TYPE: GET
 Query Param: accountId=1
```
