import React from 'react'
import Container from '../UI/Container'
import css from "./MainPage.module.css";
import PersonalInfo from './PersonalInfo';
import Education from './Edu'
import Questions from './Questions';
import QuestionsCont from './QuestionsCont';
import WorkExp from './WorkExp';
const MainPageTmp = () => {
    return (
        <Container className={css.col}>
            {/* <PersonalInfo/> */}
            {/* <Education/> */}
            {/* Done */}
            <Questions/>
            {/* Done */}
            {/* <QuestionsCont/> */}
            {/* <WorkExp/> */}
        </Container>
    )
}

export default MainPageTmp
