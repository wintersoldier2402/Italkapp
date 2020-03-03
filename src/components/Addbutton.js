import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
//import {AddIcon} from '@material-ui/icons/Add';
import Video from './../photo/video.svg'
import Image from '../photo/image.svg';
import Audio from '../photo/mic.svg';
import Text from '../photo/file-text.svg';
import './Addbutton.css';
export default function AddButton() {
const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="main">
    <Fab  className="add" color="secondary" aria-label="add" onClick={handleClick}>
        +
      </Fab>
      <Menu className="menu-item"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{display:"flex"}}
      >
      <div className="menu" style={{display:"flex"}}>
        <MenuItem onClick={handleClose}><img src={Audio} />Audio</MenuItem>
        <MenuItem onClick={handleClose}><img src={Video} />Video</MenuItem>
        <MenuItem onClick={handleClose}><img src={Text} />Text</MenuItem>
        <MenuItem onClick={handleClose}><img src={Image} />Image</MenuItem>
      </div>
        </Menu>
    </div>
  );
}