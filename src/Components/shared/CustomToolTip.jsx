import { styled, tooltipClasses, Tooltip, } from "@mui/material";
import BoxTool from "./BoxTool";


const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "black",
    fontSize: "14px",
    padding: "10px 20px",
    borderRadius: "0",
    boxShadow: "0 0 5px black",
    pointerEvents: "auto",
    position: "relative",
    top: "-15px"
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "white",
  },
}));



function CustomToolTip({ children, arr, link }) {
  return (
    <>
      <StyledTooltip arrow title={<BoxTool arr={arr} link={link} interactive />}>
        {children}
      </StyledTooltip>
    </>
  );
}

export default CustomToolTip;
