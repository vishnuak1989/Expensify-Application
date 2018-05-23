import selectExpenses from "../../selectors/expenses";
import moment from 'moment';
const expenses = [{
  id:"1",
  details:"Hello",
  note:"This is a note",
  amount:100,
  createdAt:0
},
{
  id:"2",
  details:"Hello2",
  note:"This is a note2",
  amount:1000,
  createdAt:moment(0).subtract(4, 'days').valueOf()
},
{
  id:"3",
  details:"Ola",
  note:"This is a note3",
  amount:350,
  createdAt:moment(0).add(4, 'days').valueOf()
}];

test("Should filter by text value",()=>{
  const filter={
    text:"e",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined
  }
  const result = selectExpenses(expenses,filter);
  expect(result).toEqual([expenses[0],expenses[1]])
})

test("Should Filter using Date",()=>{
  const filter={
    text:"",
    sortBy:"date",
    startDate:moment(0),
    endDate:undefined
  }
  const result = selectExpenses(expenses,filter);
  expect(result).toEqual([expenses[2],expenses[0]])
})

test("Should Filter using endDate",()=>{
  const filter={
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:moment(0)
  }
  const result = selectExpenses(expenses,filter);
  expect(result).toEqual([expenses[0],expenses[1]])
})

test("should sort by date",()=>{
  const filter={
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined

  }
  const result = selectExpenses(expenses,filter);
  expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test("should sort by date",()=>{
  const filter={
    text:"",
    sortBy:"amount",
    startDate:undefined,
    endDate:undefined

  }
  const result = selectExpenses(expenses,filter);
  expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})
