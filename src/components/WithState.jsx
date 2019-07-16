import React from 'react'

export let state
export let setState

export default function withState(WrappedComponent) {
    return class App extends React.Component {
        state = {
            isLoggedIn: localStorage.getItem('isLoggedIn')
        }

        render() {
            state = this.state
            setState = (newState) => this.setState({ ...this.state, ...newState })

            return <WrappedComponent {...this.props} />
        }
    }
}
