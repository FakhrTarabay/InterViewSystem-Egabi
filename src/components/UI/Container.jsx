import React from 'react'
import css from './Container.module.css' 

const Container = ({children,className}) => {
    return (
        <div className={`${css.Container} ${className}`}>
            {children}
        </div>
    )
}

export default Container
