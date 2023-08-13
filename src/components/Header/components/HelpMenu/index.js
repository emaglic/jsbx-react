import React, {useState} from 'react'
import { Dialog, IconButton, AppBar, Toolbar, Typography, Button } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import CloseIcon from '@mui/icons-material/Close'
const HelpMenu = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

  return (
    <>
    <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpen}
      >
        <HelpIcon />
      </IconButton>
    <Dialog
    fullScreen
    open={open}
    onClose={handleClose}
    >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Help
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <p>Hello</p>
    </Dialog>
    </>
  )
}

export default HelpMenu;