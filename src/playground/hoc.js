import React from 'react'
import ReactDOM from 'react-dom'

const Info=(props)=>(
  <div>
    <p>Info:{props.info}</p>
  </div>
)

const AdminWarning=(WrappedComponent)=>{
  return(props)=>(
  <div>
    <p>This is private. Not to be shown</p>
    <WrappedComponent />
  </div>
)}
const AdminWarningInfo = AdminWarning(Info)
ReactDOM.render(<AdminWarningInfo Info="Hello This is passed through a HOC" />, document.getElementById('app'))

const requireAuthentication=(WrappedComponent)=>{
  return(props)=>(
    <div>
      {props.isAuthenticated ?
        (<WrappedComponent {...props} />)
         :
        (<p>You do not have admin Privilages.Please login to see details</p>)
      }

    </div>
  )
}




const AuthInfo = requireAuthentication(Info)
ReactDOM.render(<AuthInfo isAuthenticated={true} info ="These are the details" />, document.getElementById('app'))
