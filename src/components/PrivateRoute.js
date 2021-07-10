import React from 'react'
import { useHistory, Route } from 'react-router-dom'

const PrivateRoute = ({ path, component }) => {
    
    const history = useHistory()

    let response = ''
    let userType = ''

    if (path === '/user') {
        response = localStorage.getItem('comicUser')
        userType = 'user'
    } else if (path === '/admin') {
        response = localStorage.getItem('admin')
        userType = 'admin'
    }

    let user = JSON.parse(response)
    

    if (user === null) {
        history.push('/login', { userType })
        return <p></p>
    }
    else  return <Route path={path} component={component} />
}

export default PrivateRoute
