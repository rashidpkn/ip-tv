import {AnalyticsOutlined,SubscriptionsOutlined,RunningWithErrorsOutlined,DashboardOutlined } from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux"
import { setDashboardMenu } from "../../../redux/slice/utilSlice"

function SideBar() {
    return (
        <div className="h-screen w-72 border-r">
            <div className="h-24 w-full logo flex items-center justify-between px-2">
                <img src="/image/common/logo.png" className="h-[1.5rem]" alt="" />
                <h1 className="text-lg font-medium">IP TV Dubai</h1>
                <MenuIcon   />
            </div>
            <h6 class="ml-5 font-light text-sm text-[#A5A5A5] mt-5">MAIN MENU</h6>
            <div className="flex flex-col gap-5 mt-5 pl-10">
                <Menu title={'Dashboard'} Icon={<DashboardOutlined />} menu={1} />
                <Menu title={'Analatics'} Icon={<AnalyticsOutlined />} menu={2} />
                <Menu title={'Active Subscription'} Icon={<SubscriptionsOutlined />} menu={3} />
                <Menu title={'Expiring Soon'} Icon={<RunningWithErrorsOutlined />} menu={4} />
            </div>
        </div>
    )
}

export default SideBar


const Menu = ({ title, Icon, menu }) => {
    const dispatch = useDispatch()
    const { dashboardMenu } = useSelector(state => state.util)
    return (
        <div className={`${dashboardMenu === menu ? 'text-[#6418C3]' : 'text-[#A5A5A5]'} flex justify-between  group cursor-pointer`} onClick={() => dispatch(setDashboardMenu(menu))}>
            <div className="flex items-center gap-5">{Icon} {title}</div>
            <div className={`${dashboardMenu === menu ? 'bg-blue-700' : 'group-hover:bg-blue-700'} h-auto w-1 rounded-md `}>
            </div>
        </div>)
}