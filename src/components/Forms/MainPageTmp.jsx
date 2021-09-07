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
            {/* Done */}
            {/* <PersonalInfo/> */}
            {/* Done */}
            <Education/>
            {/* Done */}
            {/* <Questions/> */}
            {/* Done */}
            {/* <QuestionsCont/>     */}
            {/* Done */}
            {/* <WorkExp/> */}
        </Container>
    )
}

export default MainPageTmp
