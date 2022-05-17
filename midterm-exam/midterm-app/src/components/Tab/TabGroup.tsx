/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useState } from 'react'

import TabPage from './TabPage'
import TabButton from './TabButton'
import TabButtonGroup from './TabButtonGroup'

export interface TabGroupProps {
  tabs: any
  canClick: boolean
}

export const TabBreak = () => {
  return (
    <div
      id='tab-break'
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <hr />
    </div>
  )
}

export const TabGroup = (props: TabGroupProps) => {
  const tabNames: string[] = Object.keys(props.tabs)
  const [activeTab, setActiveTabState] = useState(0)

  const click = (index: number) => {
    if (props.canClick) {
      setActiveTabState(index)
    }
  }

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }} className='Tab-group'>
      <div className='Tab-group-header'>
        <TabButtonGroup>
          {tabNames.map((tabName: string, index: number) => (
            <TabButton
              key={tabName}
              active={activeTab === index}
              onClick={() => click(index)}>
              {tabName}
            </TabButton>
          ))}
        </TabButtonGroup>
      </div>
      <TabBreak />
      <div className='Tab-group-content'>
        <TabPage
          activeTab={activeTab}
          tabs={props.tabs}
          redirect={setActiveTabState}
        />
      </div>
      <TabBreak />
    </div>
  )
}

export default TabGroup
