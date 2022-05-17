/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

export interface TabPageProps {
  activeTab: number
  tabs: any
  redirect: any
}

export const TabPage = (props: TabPageProps) => {
  let key = Object.keys(props.tabs)[props.activeTab]

  return (
    <div className='Tab-page'>
      {
        // this feels like a hack
        // renders jsx.element of selected tab page
        props.tabs[key](props.redirect)
      }
    </div>
  )
}

export default TabPage
