import React from 'react'
import Container from '../UI/Container'
import css from "./MainPage.module.css";
// eslint-disable-next-line
import PersonalInfo from './PersonalInfo';
// eslint-disable-next-line
import Education from './Edu'
// eslint-disable-next-line
import Questions from './Questions';
// eslint-disable-next-line
import QuestionsCont from './QuestionsCont';
// eslint-disable-next-line
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
            {/* <QuestionsCont/> */}
            {/* Done */}
            {/* <WorkExp/> */}
        </Container>
    )
}

export default MainPageTmp
