import { Chart } from './chart';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterReducer'
import Box from './Box';
import './DashBoard.css';
import {SettingOutlined,
    BellOutlined,
    WechatOutlined,
    UserOutlined,
}  from '@ant-design/icons';


function DashBoard() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
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
                <div className='conten_chart'>
                    <Chart />
                </div>
                <div className='conten_text'>
                    <div>
                        <span>100</span>
                        
                    </div>
                </div>
            </div>
            {/* <div className='footer'>
                <div>
                    <h1 className='footer_heading'>Pencapaian OS Kredit</h1>
                </div>
                <div>
                    <Box classbox = "box1" heading = "Kredit Konsumer"  />
                </div>
            </div> */}
        </main>
        <br />
        <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div>
        <span>{count}</span>
        </div>
      </div>

    </div>
  )
}

export default DashBoard