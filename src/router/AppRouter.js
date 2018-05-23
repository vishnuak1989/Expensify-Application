import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from 'react'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import ExpenseCreatePage from './../components/ExpenseCreatePage'
import ExpenseEditPage from './../components/ExpenseEditPage'
import ExpenseHelpPage from './../components/ExpenseHelpPage'
import Header from './../components/Header'
import PageNotFound from './../components/PageNotFound'

const AppRouter=() =>(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={ExpenseCreatePage} />
        <Route path="/edit/:id" component={ExpenseEditPage} />
        <Route path="/help" component={ExpenseHelpPage} /> />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>

);
export default AppRouter;
