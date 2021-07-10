import React from 'react'
import { useHistory, Route } from 'react-router-dom'

const PrivateRoute = ({ path, component }) => {
    
    const history = useHistory()
    let response = localStorage.getItem('admin')
    let admin = JSON.parse(response)
    

    if (admin === null) {
        history.push('/login')
        return <p></p>
    }
    else  return <Route path={path} component={component} />
}

export default PrivateRoute
