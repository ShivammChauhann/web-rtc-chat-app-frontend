import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../SocketContext";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   gridContainer: {
//     width: "100%",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   container: {
//     width: "600px",
//     margin: "35px 0",
//     padding: 0,
//     [theme.breakpoints.down("xs")]: {
//       width: "80%",
//     },
//   },
//   margin: {
//     marginTop: 20,
//   },
//   padding: {
//     padding: 20,
//   },
//   paper: {
//     padding: "10px 20px",
//     border: "2px solid black",
//   },
// }));

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <Container
      sx={{
        width: {
          xs: "80%",
          sm: "600px",
          md: "600px",
          lg: "600px",
          xl: "600px",
        },
        margin: "35px 0",
        padding: 0,
      }}
    >
      <Paper
        sx={{ padding: "10px 20px", border: "2px solid black" }}
        elevation={10}
      >
        <form
          sx={{ display: "flex", flexDirection: "column" }}
          noValidate
          autoComplete="off"
        >
          <Grid
            sx={{
              width: "100%",
              flexDirection: {
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
            container
          >
            <Grid sx={{ padding: "20px" }} item xs={12} md={6}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              {console.log(me)}
              <CopyToClipboard sx={{ marginTop: "20px" }} text={me}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid sx={{ padding: "20px" }} item xs={12} md={6}>
              <Typography gutterBottom variant="h6">
                Make a call
              </Typography>
              <TextField
                label="ID to Call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  sx={{ marginTop: "20px" }}
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  fullWidth
                  onClick={leaveCall}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  sx={{ marginTop: "20px" }}
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
