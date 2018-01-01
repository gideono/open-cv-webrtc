import React from 'react'
export default ({children, type, duration}) =>
    <section id="notification-bar" className={`${type}`}>
     {children}
    </section>