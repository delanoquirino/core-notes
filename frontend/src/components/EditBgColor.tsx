"use client";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

export const EditBgColor = ({
  ColorSelected,
  taskId,
}: {
  ColorSelected: (cor: string, taskId:number) => void;
  taskId: number;
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const colors = [
    "#BAE2FF",
    "#B9FFDD",
    "#FFE8AC",
    "#FFCAB9",
    "#F99494",
    "#9DD5FF",
    "#ECA1FF",
    "#DAFF8B",
    "#DAFF8B",
    "#CDCDCD",
    "#979797",
    "#A99A7C",
  ];

  const handleLiClick = (color: string) => {
   
    ColorSelected(color, taskId);

    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick} color="success">
        <Image
          src="/ink.svg"
          alt="tinta para trocar de cor"
          fill
        />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 1 }}>
          <ul className="flex gap-1 ">
            {colors.map((color, i) => (
              <li
                className="p-3 rounded-full cursor-pointer hover:brightness-90"
                key={i}
                style={{ backgroundColor: color }}
                onClick={() => handleLiClick(color)}
              ></li>
            ))}
          </ul>
        </Typography>
      </Popover>
    </div>
  );
};
