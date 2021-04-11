import React, {ReactElement, useEffect, useState} from 'react' 
import { TabTitle } from './TabTitle'
import './Tabs.css'

type Tabs = {
    children: ReactElement[]
}

export const Tabs = ({children}: Tabs) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className="tabs">
            <div className="tabs__titles">
                {children.map((item, index) => (
                    <TabTitle 
                    className={selectedTab == index ? "tab__button_activate" : "tab__button"}
                    key={index} 
                    title={item.props.title}
                    index={index}
                    setSelectedTab={setSelectedTab} />
                ))}
            </div>
            {children[selectedTab]}
        </div>
    )
}
