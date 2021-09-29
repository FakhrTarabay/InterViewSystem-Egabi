import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Edu from './Forms/Edu'
import person from './Forms/PersonalInfo'
import Q from './Forms/Questions'
import QC from './Forms/QuestionsCont'
import Exp from './Forms/WorkExp'
import Exam from './Exams/TakingExam/Exam'
import AH from './Home/AdminHome'
import TE from './Exams/CreateTopic/TopicExam'
const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact={true} path={'/'} component={person}/>
            <Route exact={true} path={'/Edu'} component={Edu}/>
            <Route exact={true} path={'/Exp'} component={Exp}/>
            <Route exact={true} path={'/Q'} component={Q}/>
            <Route exact={true} path={'/QC'} component={QC}/>
            <Route exact={true} path={'/Exam'} component={Exam}/>
            <Route exact={true} path={'/AdminHome'} component={AH}/>
            <Route exact={true} path={'/TopicExam'} component={TE}/>
        </Switch>
      </BrowserRouter>
    )
}

export default Routes