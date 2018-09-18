import React from 'react'

//TODO animate with transition
//TODO implement higher order react component
export default ({children, type, duration}) =>
    <section id="notification-bar" className={`${type}`}>
     {children}
    </section>