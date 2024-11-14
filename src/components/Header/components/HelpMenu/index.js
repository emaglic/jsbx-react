import React, { useState } from "react";
import {
  Dialog,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DialogBody, DialogHeader } from "./index.style";
const HelpMenu = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography
              sx={{ ml: 1, flex: 1, fontFamily: "Permanent-Marker" }}
              variant="h4"
              component="div"
            >
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
              <Typography sx={{ fontFamily: "Permanent-Marker" }} variant="h5">
                Overview
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                JSBX is a JavaScript sandbox application. It provides an easy
                way to write and test HTML, CSS, and JavaScript directly in the
                browser.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily: "Permanent-Marker" }} variant="h5">
                Usage
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  flex: 1,
                  fontFamily: "Permanent-Marker",
                  marginBottom: "1rem",
                }}
                variant="h5"
                component="div"
              >
                Left Panel
              </Typography>
              <Typography component="p">
                The Left Panel contains the code editor. This is where you write
                your HTML, CSS and JavaScript.
              </Typography>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <li>
                  <Typography
                    sx={{
                      flex: 1,
                      fontFamily: "Permanent-Marker",
                    }}
                    variant="h6"
                    component="div"
                  >
                    HTML Editor
                  </Typography>
                  <Typography>
                    <ul
                      style={{
                        listStyleType: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <li>
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: "Permanent-Marker" }}
                        >
                          Dependencies
                        </Typography>
                        Like any HTML page, you can use{" "}
                        <bold style={{ fontFamily: "Permanent-Marker" }}>
                          &lt;link&gt;
                        </bold>{" "}
                        and{" "}
                        <bold style={{ fontFamily: "Permanent-Marker" }}>
                          &lt;script&gt;
                        </bold>{" "}
                        tags to load external dependencies.
                        <ul>
                          <li style={{ marginTop: "1rem" }}>
                            JSBX also has some preset environments available,
                            such as one for React+Babel, see the preset options
                            in the menu at the top-right.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: "Permanent-Marker" }}
                        >
                          Styles (CSS)
                        </Typography>
                        Your styles from the CSS tab can be injected into the
                        compiled HTML page using the custom{" "}
                        <bold style={{ fontFamily: "Permanent-Marker" }}>
                          &lt;jsbx-css&gt;
                        </bold>{" "}
                        element. You can place this{" "}
                        <bold style={{ fontFamily: "Permanent-Marker" }}>
                          &lt;jsbx-css&gt;
                        </bold>{" "}
                        element in your HTML wherever you would like your styles
                        to be injected.
                      </li>
                      <li>
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: "Permanent-Marker" }}
                        >
                          JavaScript (JS)
                        </Typography>
                        Your JavaScript from the JS tab can be injected into the
                        compiled HTML using the custom{" "}
                        <bold style={{ fontFamily: "Permanent-Marker" }}>
                          &lt;jsbx-js&gt;
                        </bold>{" "}
                        element. You can move this custom element around in
                        order to ensure that your JS code is executed at the
                        correct point within your HTML.
                        <br />
                        <br />
                        The{" "}
                        <bold style={{ fontFamily: "Permanent-Marker" }}>
                          &lt;jsbx-js&gt;
                        </bold>{" "}
                        element supports 2 attributes:
                        <ol>
                          <li>
                            <bold style={{ fontFamily: "Permanent-Marker" }}>
                              type
                            </bold>
                            : This indicates the type of script contained within
                            the script block. With vanilla JS this is usually{" "}
                            <bold style={{ fontFamily: "Permanent-Marker" }}>
                              "text/javascript"
                            </bold>
                            . However JSBX supports Babel (if loaded with a CDN
                            link). If you are using Babel, you can set the type
                            to{" "}
                            <bold style={{ fontFamily: "Permanent-Marker" }}>
                              "text/babel"
                            </bold>
                          </li>
                          <li>
                            <bold style={{ fontFamily: "Permanent-Marker" }}>
                              presets
                            </bold>
                            : When type has been set as{" "}
                            <bold style={{ fontFamily: "Permanent-Marker" }}>
                              "text/babel"
                            </bold>
                            , the presets attribute indicates the Babel presets
                            to use. If type is not{" "}
                            <bold style={{ fontFamily: "Permanent-Marker" }}>
                              "text/babel"
                            </bold>{" "}
                            this attribute is ignored.{" "}
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </Typography>
                </li>
              </ul>
              <Typography
                sx={{
                  flex: 1,
                  fontFamily: "Permanent-Marker",
                  marginBottom: "1rem",
                }}
                variant="h5"
                component="div"
              >
                Right Panel
              </Typography>
              The right panel contains the console and the preview tabs.
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li>
                  <Typography
                    sx={{
                      flex: 1,
                      fontFamily: "Permanent-Marker",
                      marginBottom: "1rem",
                    }}
                    variant="h6"
                    component="div"
                  >
                    CONSOLE
                  </Typography>
                  <Typography>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <li>
                        Displays console log | info | warn | error messages.
                      </li>
                      <li>
                        <Typography
                          sx={{
                            fontFamily: "Permanent-Marker",
                          }}
                          component="div"
                        >
                          Note 1
                        </Typography>{" "}
                        Non-Primitives (Objects/Arrays) will be automatically
                        formatted into prettified JSON
                      </li>
                      <li>
                        <Typography
                          sx={{
                            fontFamily: "Permanent-Marker",
                          }}
                          component="div"
                        >
                          Note 2
                        </Typography>{" "}
                        You can also view console statements in your browser's
                        dev tools panel per usual.
                      </li>
                    </ul>
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      flex: 1,
                      fontFamily: "Permanent-Marker",
                      marginBottom: "1rem",
                    }}
                    variant="h6"
                    component="div"
                  >
                    PREVIEW
                  </Typography>
                  <Typography>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <li>
                        Renders your compiled HTML/CSS & JS Code in an isolated{" "}
                        <bold style={{ fontFamily: "Permanent-Marker" }}>
                          &lt;iframe&gt;
                        </bold>{" "}
                        environment
                      </li>
                    </ul>
                  </Typography>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" sx={{ fontFamily: "Permanent-Marker" }}>
                Security
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Permanent-Marker",
                      marginBottom: "0.5rem",
                    }}
                  >
                    No Sign Up Necessary!
                  </Typography>
                  We want you to be able to drop in and use JSBX from any
                  device, at any time, without needing to worry about user
                  accounts or logging in.
                </li>
                <li style={{ marginTop: "1rem" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Permanent-Marker",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Security Through Simplicity!
                  </Typography>
                  All code is written and executed locally, on your machine. At
                  no time will your code be uploaded to any database on any
                  server.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" sx={{ fontFamily: "Permanent-Marker" }}>
                Saving and Sharing
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                The code you write is stored as (base64 encoded) query params in
                the URL.
              </p>
              <Typography
                sx={{ flex: 1, fontFamily: "Permanent-Marker" }}
                variant="h6"
                component="div"
              >
                This Means...
              </Typography>
              <ol>
                <li>
                  If you refresh the page, the code you wrote will be retained.
                </li>
                <li>
                  You can share the full URL with others and they will be able
                  to see and run your code.
                </li>
              </ol>
              <Typography
                sx={{ flex: 1, fontFamily: "Permanent-Marker" }}
                variant="h6"
                component="div"
              >
                Limitations
              </Typography>
              <p>
                Writing base64 encoded query params to the URL works well when
                your project is relatively small, but as you write more code the
                URL gets longer and longer. There doesn't seem to be a reliable,
                universal size limit for URL lengths, but keep in mind that at a
                certain point the URL becomes impractically long.
              </p>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li>
                  <Typography
                    sx={{
                      fontFamily: "Permanent-Marker",
                    }}
                    component="div"
                  >
                    Note 1
                  </Typography>{" "}
                  Some browsers may not retain the full URL as it gets extremely
                  long.
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: "Permanent-Marker",
                    }}
                    component="div"
                  >
                    Note 2
                  </Typography>{" "}
                  Some apps have character limits and may not let you copy/paste
                  very long URL's. Instead you may have to share it as a code
                  snippet or file.
                </li>
              </ul>
              <Typography
                sx={{ flex: 1, fontFamily: "Permanent-Marker" }}
                variant="h6"
                component="div"
              >
                Solution
              </Typography>
              <p>
                To help combat the limitations of lengthy URL query params, JSBX
                allows you to export (as well as import) a project as a{" "}
                <bold style={{ fontFamily: "Permanent-Marker" }}>.jsbx </bold>
                file.
              </p>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li>
                  <Typography
                    sx={{ flex: 1, fontFamily: "Permanent-Marker" }}
                    variant="h6"
                    component="div"
                  >
                    JSBX Files
                  </Typography>
                  <ul>
                    <li>
                      JSBX files are JSON files containing your base64 encoded
                      HTML, CSS, and JavaScript code as well as base64 encoded
                      project settings.
                    </li>
                    <li>
                      You can share a JSBX file with other and they can import
                      it to see/test your code.
                    </li>
                  </ul>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default HelpMenu;
