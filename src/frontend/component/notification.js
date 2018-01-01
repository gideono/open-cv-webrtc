import React from 'react'
export default ({children, type, duration}) =>
    <section id="notification-bar" className={`${type}`}>
     {children}
    </section>


// function createComponentWithDefaultProps(WrappedComponent, defaultProps) {
//     return (props) => (
//         <WrappedComponent {...defaultProps} {...props} />
//     );
// }
//
// const Layout = ({ children, theme }) => (
//     <div className={`theme-${theme}`}>
//         <main>{children}</main>
//     </div>
// );
//
// const DarkLayout = createComponentWithDefaultProps(Layout, { theme: 'dark' });