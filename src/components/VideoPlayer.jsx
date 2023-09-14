import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";

import { SocketContext } from "../SocketContext";

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px",
//     },
//   },
//   gridContainer: {
//     justifyContent: "center",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   paper: {
//     padding: "10px",
//     border: "2px solid black",
//     margin: "10px",
//   },
// }));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <Grid
      sx={{
        justifyContent: "center",
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
      {/* Our own video */}
      {stream && (
        <Paper
          sx={{ padding: "10px", border: "2px solid black", margin: "10px" }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              sx={{
                width: {
                  xs: "300px",
                  sm: "550px",
                  md: "550px",
                  lg: "550px",
                  xl: "550px",
                },
              }}
              playsInline
              muted
              ref={myVideo}
              autoPlay
            />
          </Grid>
        </Paper>
      )}
      {/* User's video */}
      {callAccepted && !callEnded && (
        <Paper
          sx={{ padding: "10px", border: "2px solid black", margin: "10px" }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              sx={{
                width: {
                  xs: "300px",
                  sm: "550px",
                  md: "550px",
                  lg: "550px",
                  xl: "550px",
                },
              }}
              playsInline
              ref={userVideo}
              autoPlay
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
