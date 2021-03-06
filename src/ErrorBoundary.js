import React from 'react';

import { Link } from '@reach/router';

class ErrorBoundary extends React.Component {
    state = { hasError: false }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an Error.", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <h1>
                    Error With The Listing. <Link to="/">Go To HomePage.</Link>
                </h1>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;