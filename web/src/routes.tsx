import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import TeacheList from './pages/TeacheList'
import TeacherForm from './pages/TeacherForm'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacheList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes