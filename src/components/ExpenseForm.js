import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


const now = moment();
console.log(now.format('MMM Do, YYYY'))
console.log(Date())
export default class ExpenseForm extends React.Component{
constructor(props){
  super(props);
  this.state={
    details:props.expense ? props.expense.details: "",
    note:props.expense ? props.expense.note: "",
    amount:props.expense ? (props.expense.amount/100).toString() : "",
    createdAt: props.expense ? moment(props.expense.createdAt): moment(),
    calenderFocused:false,
    error:""
        };
}
    onDetailsChange=(e)=>{
      const details = e.target.value;
      this.setState(()=>({details}));
    }
    onNoteChange=(e)=>{
      const note = e.target.value;
      this.setState(()=>({note}))
    }
    onAmountChange=(e)=>{
      const amount = e.target.value;
      if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({amount}))
      }
    }
   onDateChange=(createdAt)=>{
     if(createdAt){
      this.setState(()=>({createdAt}))
   }}
   onFocusChange=({focused})=>{
     this.setState(()=>({calenderFocused:focused}))
   }

   onSubmit=(e)=>{
     e.preventDefault();
     if (!this.state.details || !this.state.amount) {
      this.setState(()=>({error:"Please provide Details and Amount."}))
     }
     else{
       this.setState(()=>({error:""}))
       this.props.onSubmit({
         details:this.state.details,
         amount:parseFloat(this.state.amount,10) *100,
         createdAt:this.state.createdAt.valueOf(),
         note:this.state.note
       })
     }
   }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Details" autoFocus value={this.state.details} onChange={this.onDetailsChange}/>
          <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
          />
          <textarea value={this.state.note} placeholder="Note about your expense(optional)" onChange={this.onNoteChange}>
          </textarea>
          <button>Save</button>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
      </div>
    )
  }
}
