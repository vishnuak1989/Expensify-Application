import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test("should set up remove expense action object",()=>{
  const action = removeExpense({id:"123abc"})
  expect(action).toEqual({
    type:"REMOVE_EXPENSE",
    expense:{
      id:"123abc"
    }
  })
})

test("should set up edit expense action object",()=>{
  const action = editExpense("123",{note:"HelloDarknessMyoldFriend"})
  expect(action).toEqual({
    type:"EDIT_EXPENSE",
    id:"123",
    updates:{note:"HelloDarknessMyoldFriend"}
  })
})

test("Should set up Add Expense action object with provided values",()=>{
  const action = addExpense({details:"rent",amount:12000,createdAt:1000,note:"This was last month's rent"})
  expect(action).toEqual({
    type:"ADD_EXPENSE",
    expense:{
      id:expect.any(String),
      details:"rent",
      amount:12000,
      createdAt:1000,
      note:"This was last month's rent"
    }
  })
})

test("Should set up Add Expense action object with default values",()=>{
  const action = addExpense()
  expect(action).toEqual({
    type:"ADD_EXPENSE",
    expense:{
      id:expect.any(String),
    details:"",
    note:"",
    amount:0,
    createdAt:0
    }
  })
})
