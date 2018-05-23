import React from 'react'
import {connect} from 'react-redux'
import{Link} from 'react-router-dom'

export const ExpenseListItem = ({id,details,amount,createdAt}) =>(

  <div>
    <Link to={`/edit/${id}`}><h3>{details}</h3></Link>
    <p>{amount} - {createdAt}</p>

  </div>
);

const mapStateToProps=(state)=>{
  return{
    expenses:state.expenses
  }
}


export default connect(mapStateToProps)(ExpenseListItem)
