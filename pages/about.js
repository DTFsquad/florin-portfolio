import React from 'react'

// functional component - arrow function
// const About = () => {
//     const message = 'Hello World'
//     return (
//         <h1> Hello About Page - {message}</h1>
//     )
// }

// const About = () => {
//     const message = 'Hello World'
//     return React.createElement('h1', null, 'I am generating this with createElement')
// }

// functional component - clasic function
// function About() {
//     return (
//         <h1>Hello About Page</h1>
//     )
// }

class About extends React.Component {

    render() {
        return (
            <h1>Hello I am am class component</h1>
        )
    }
}

export default About