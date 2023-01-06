import React from 'react'
import { useSelector } from 'react-redux'
import Menu1 from './Content/Menu1'
import Menu2 from './Content/Menu2'
import Menu3 from './Content/Menu3'
import Menu4 from './Content/Menu4'

function Content() {
    const { dashboardMenu } = useSelector(state => state.util)
    return (
        <div className="bg-[#f7f7f7] w-full h-[calc(100%-6rem)] p-[5%]">
            {
                dashboardMenu === 1 && <Menu1/>
            }

            {
                dashboardMenu === 2 && <Menu2 />
            }

            {
                dashboardMenu === 3 && <Menu3/>
            }


            {
                dashboardMenu === 4 && <Menu4/>
            }

        </div>
    )
}

export default Content