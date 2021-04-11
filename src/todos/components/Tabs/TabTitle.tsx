import React, { useCallback } from 'react'
import './Tabs.css'

type TabTitle = {
    title: string,
    index: number,
    className: string,
    setSelectedTab: (index:number) => void
}

export const TabTitle = ({title, index, className, setSelectedTab} :TabTitle) => {
    
    const onClick = useCallback(() => {
        setSelectedTab(index)
    }, [setSelectedTab, index])
    
    return (
        <button className={className} onClick={onClick}>{title}</button>
    )
} 