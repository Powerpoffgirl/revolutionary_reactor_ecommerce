import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import '../App.css'

const InforBar = () => {
  return (
    <div>
        <div className = "brown_header_line">
        </div>
        <div className = "info_header_line">
            <div className='info_header_left'>
            <span><span><LocalPhoneOutlinedIcon style={{fontSize:'1rem'}}/>  </span><span> +001234567890 </span> </span>
            </div>
            <div className='info_header_middle'>
            <span><span>Get 50% Off on Selected items </span><span>|</span> <span>Shop Now</span> </span>
            </div>
            <div className='info_header_right'>
            <span><span>Eng <KeyboardArrowDownIcon/> </span><span> Location <KeyboardArrowDownIcon/></span> </span>
            </div>
        </div>
    </div>
  )
}

export default InforBar