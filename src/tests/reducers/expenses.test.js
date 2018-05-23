import moment from 'moment'
import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test("Set default state for expenses",()=>{
  const result = expenseReducer(undefined,{type:"@@INIT"});
  expect(result).toEqual([]);
})

test("Should remove expense by Id",()=>{
  const action={
    type:"REMOVE_EXPENSE",
    expense:{
      id:expenses[1].id
    }

  }
  const result = expenseReducer(expenses,action);
  expect(result).toEqual([expenses[0],expenses[2]]);
})

test("Should not remove expense if Id not found",()=>{
  const action={
    type:"REMOVE_EXPENSE",
    expense:{
      id: -1
    }

  }
  const result = expenseReducer(expenses,action);
  expect(result).toEqual([expenses[0],expenses[1],expenses[2]]);
})

test("Should add expense",()=>{
  const action={
    type:"ADD_EXPENSE",
    expense:{id:"4",details:"None",amount:"100000",note:"Hello Darkness"}
  }
  const result = expenseReducer(expenses,action);
  expect(result).toEqual([expenses[0],expenses[1],expenses[2],{id:"4",details:"None",amount:"100000",note:"Hello Darkness"}]);
})


test("Should edit expense by id",()=>{
  const action={
    type:"EDIT_EXPENSE",
    id:"2",
    updates:{note:"Hello Darkness"}
  }
  const result = expenseReducer(expenses,action);
  expect(result[1].note).toBe("Hello Darkness")
})

test("Should not edit expense if no id is present",()=>{
  const action={
    type:"EDIT_EXPENSE",
    id:""
  }
  const result = expenseReducer(expenses,action);
  expect(result).toEqual([expenses[0],expenses[1],expenses[2]]);
})
