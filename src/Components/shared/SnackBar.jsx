import { Alert, Button, Slide, Snackbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClick, handleClose } from "../../store/snackSlice";

function SnackBar() {
  const open = useSelector((state) => state.snack.open);
  const message = useSelector((state) => state.snack.message);
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };

  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>
      {/* <Button onClick={() => dispatch(handleClick)}>Open Snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => dispatch(handleClose())}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={() => dispatch(handleClose())}
          severity="none"
          variant="contained"
          sx={{ width: "100%", backgroundColor: "black", color: "white" }}
        >
          <Typography sx={{ fontFamily: "Rubik" }}>{message}</Typography>
        </Alert>
      </Snackbar>
    </>
  );
}

export default SnackBar;
