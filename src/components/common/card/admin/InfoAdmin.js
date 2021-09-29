import { Avatar, Image, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import signout from '../../../../images/signout.svg'
import { isAdminLogout, isSignOut } from "../../../../slice/bookSlice"
import { useHistory } from "react-router-dom";

const InfoAdmin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userContent = (
        <div className="navigation--user">
            <div className="navigation--user--info">
                <a onClick={() => {
                    dispatch(isAdminLogout())
                    // dispatch(isSignOut())
                    sessionStorage.setItem('admin', false)
                    history.push("/home")
                }}>
                    <img src={signout} alt="setting logo"></img>
                    <p>Đăng xuất</p>
                </a>
            </div>
        </div>
    )
    return (
        <div className="info-admin">
            <div className="info-admin-name">
                <p>Nguyen Van Duc Nhat</p>
            </div>
            <div className="info-admin-avatar">
                <Popover content={userContent} placement="bottomRight" trigger="click">
                    <Avatar size="large" icon={<UserOutlined />} />
                </Popover>
            </div>
        </div>
    )
}

export default InfoAdmin