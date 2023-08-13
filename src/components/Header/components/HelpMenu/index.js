import React, {useState} from 'react'
import { Dialog, IconButton, AppBar, Toolbar, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DialogBody, DialogHeader } from "./index.style";
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
            <Typography sx={{ ml: 1, flex: 1 }} variant="h6" component="div">
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
        <DialogBody>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              JSBX provides an easy way to test your HTML, CSS, and JavaScript code in an isolated environment.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Usage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ flex: 1 }} variant="h6" component="div">
                Left Panel
          </Typography>
          <Typography component="p">
            Write HTML, CSS and JavaScript in the panels provided at the left, use the tabs to switch between them.
          </Typography>
          <Typography sx={{ flex: 1 }} variant="h7" component="div">
              HTML Tab Note
          </Typography>
          <Typography>
            <ul>
              <li>Styles from the CSS tab are injected into your compiled HTML code using the custom &lt;JSBX-CSS&gt; tag. This element comes pre-defined within the &lt;head&gt; of the default JSBX project. You can move this element to the place where you would like your CSS tab code injected.</li>
              <li>JavaScript from the JS tab is injected into your compiled HTML code using the custom &lt;JSBX-JS&gt; element. This element comes pre-defined within the &lt;body&gt; of the default JSBX project. You can move this element to the place where you would like your JS tab code injected.</li>
            </ul>
          </Typography>
          <Typography sx={{ flex: 1 }} variant="h6" component="div">
                Right Panel
          </Typography>
          <Typography sx={{ flex: 1 }} variant="h7" component="div">
                CONSOLE
          </Typography>
          <Typography>
            <ul>
              <li>Displays console log, info, warn or error statements.</li>
              <li>Objects/Arrays will be automatically formatted as (pretty) human-readable JSON</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>  

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Security</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
          <li>JSBX requires no sign-up<br/><small>We want you to be able to drop in and use JSBX from any device, at any time, without needing to worry about user accounts or logging in.</small></li>
          <li>Your code lives and is executed entirely in your browser<br/><small>Your code and data is your own. At no time will your code be uploaded to any database on any server.</small></li>
        </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Saving and Sharing</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <p>The code you write is stored as base64 query params in the URL.</p>
        <ol>
          <li>In the event that you refresh the page, the code you wrote previously will be retained (See limitations 1)</li>
          <li>You can share the URL with other developers and they will be able to see and run your code (See limitations 2)</li>
        </ol>
        <Typography sx={{ flex: 1 }} variant="h6" component="div">
              Limitations
        </Typography>
        <p>Writing base64 query params works well when your project is relatively small. There doesn't seem to be a hard-set size limit for URL query params, but at a certain point the URL becomes impractically long...</p>
        <ol>
          <li>Some browsers may stop retaining the full URL as it gets extremely long.</li>
          <li>Some apps, such as Slack have character limits, and may not let you copy/paste very long URL's. Instead you have to share it as a code snippet or file.</li>
        </ol>
        <Typography sx={{ flex: 1 }} variant="h6" component="div">
              Solution
        </Typography>
        <p>To help combat the limitations of lengthy URL query params, JSBX allows you to export (as well as import) a project as a (.jsbx) file.</p>
        <Typography sx={{ flex: 1 }} variant="h6" component="div">
              JSBX Files
        </Typography>
        <ul>
          <li>JSBX files are JSON files containing your base64 encoded HTML, CSS, and JavaScript code as well as base64 encoded project settings.</li>
          <li>You can share a JSBX file with another developer and they can import it to see/test your code.</li>
        </ul>
        </AccordionDetails>
      </Accordion>
    
</DialogBody>
    </Dialog>
    </>
  )
}

export default HelpMenu;