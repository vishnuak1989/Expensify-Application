const storeOne = store.dispatch(addExpense({details:"rent for march",amount:100}))
const storeTwo = store.dispatch(addExpense({details:"coffee",amount:200}))


// console.log(store.getState())
// store.dispatch(removeExpense({id:storeOne.expense.id}))
// store.dispatch(editExpense(storeTwo.expense.id,{amount:50}))
store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(0))
// console.log(store.getState())
// store.dispatch(setStartDate())
// console.log(store.getState())
// store.dispatch(setEndDate(999))
// store.dispatch(setTextFilter('co'))
const state = store.getState()
console.log(getVisibleExpenses(state.expenses,state.filters))

const demoState={
  expenses:[{
    id:"abcd",
    details:"March Rent",
    note:"Final Payment for this address",
    amount:"5400",
    createdAt:0
  }],
  filters:[{
    text:"rent",
    sortBy:"amount",
    startDate:undefined,
    endDate:undefined
  }]
};
