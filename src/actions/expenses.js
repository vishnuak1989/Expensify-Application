import uuid from 'uuid';
export const addExpense=({details="",note="",amount=0,createdAt=0} = {})=>({
  type:"ADD_EXPENSE",
  expense:{
    id:uuid(),
    details,
    note,
    amount,
    createdAt
  }

});
export const removeExpense=({id} = {})=>({
  type:"REMOVE_EXPENSE",
  expense:{
    id
  }

});

export const editExpense=(id,updates)=>({
  type:"EDIT_EXPENSE",
  id,
  updates

});
