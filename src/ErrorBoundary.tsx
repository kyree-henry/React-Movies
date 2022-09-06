import React from "react";

/// We make use of class component because the functionality that requires error boundary is not available for functional components.

export default class ErrorBoundary extends React.Component<errorBoundaryProps, errorBoundaryState>
{
    constructor(props: errorBoundaryProps){
        super(props);
        this.state = {hasError: false, message: ''}
    }

    static getDerivedStateFromError(error: any){
        return {hasError: true, message: error}
    }

    componentDidCatch(error: any, errorInfo: any){
        console.log(error);
    }

    render(){
        if (this.state.hasError){
            if (this.props.errorUI){
                return this.props.errorUI;
            }else {
                return <h3>{this.state.message}</h3>
            }
        }else{
            return this.props.children;
        }
    }
}

interface errorBoundaryProps{
    errorUI?: React.ReactNode;
    children: React.ReactNode;
}

interface errorBoundaryState{
    hasError: boolean;
    message: string;
}