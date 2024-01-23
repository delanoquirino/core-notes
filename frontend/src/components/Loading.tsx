import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <div className="absolute left-[50%] mt-8">
      <CircularProgress />
    </div>
  );
};
