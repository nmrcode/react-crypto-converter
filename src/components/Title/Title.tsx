import React from "react";
import { Typography } from "@mui/material";

const Title = ({ text }: any) => {
  return (
    <Typography
      component={"h1"}
      variant={"h2"}
      textAlign={"center"}
      sx={{ mb: 5 }}
    >
      {text}
    </Typography>
  );
};

export default Title;
