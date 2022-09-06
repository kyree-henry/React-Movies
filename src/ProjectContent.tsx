import React, { Children } from "react"

export default function ProjectContent(props: projectContentProps){
    return (
        <>
            <h2>Top part</h2>
            {props.children}
            <h2>Buttom part</h2>
            {props.bottomPart}
        </>
    )
}

interface projectContentProps{
    children: React.ReactNode;
    bottomPart: React.ReactNode;
}