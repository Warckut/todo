import { ReactChildren } from "react"

export type Tab = {
    title: string,
    children: any
}

export const Tab = ({title, children} : Tab) => {
    return <div>{children}</div>
}