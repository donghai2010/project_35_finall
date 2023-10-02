import { Chart } from './chart';
import './DashBoard.css';
import {SettingOutlined,
    BellOutlined,
    WechatOutlined,
    UserOutlined,
}  from '@ant-design/icons';


function DashBoard() {
  return (
    <div className='main_wrapper'>
        <main className='h-full'>
            <div className='heading'>
                <div className='heading_message'>
                    <p className='heading_message_1'>Welcome back</p>
                    <h1 className='heading_message_2'>Hoki Teguh Oktian</h1>
                </div>
                <div className='heading_account'>
                    <i><SettingOutlined /></i>
                     <i><BellOutlined /></i>
                     <i><WechatOutlined /></i>
                     <i><UserOutlined /></i>

                </div>
            </div>
            <div className='content'>
                <Chart />
            </div>
            <div className='footer'></div>
        </main>
    </div>
  )
}

export default DashBoard