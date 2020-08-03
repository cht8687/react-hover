import React from 'react'

declare module 'react-hover' {
    export interface ReactHoverOptions{
        followCursor: boolean,
        shiftX: number,
        shiftY: number
    }

    export interface ReactHoverProps {
        options: ReactHoverOptions
    }

    export interface TriggerProps {
        type: string
    }

    export interface HoverProps {
        type: string
    }

    export class Trigger extends React.Component<TriggerProps> { }
    export class Hover extends React.Component<HoverProps> { }
    export class ReactHover extends React.Component<ReactHoverProps>{ }

    export default ReactHover;
}