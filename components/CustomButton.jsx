"use client";
import { KeyboardBackspace } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

const CustomButton = (props) => {
  const theme = useTheme();
  const router = useRouter();

  const handleClick = () => {
    router.back();
  }

  return (
    <Button
      sx={{
        bgcolor: theme.palette.action.hover,
        ":hover": {
          bgcolor: theme.palette.action.hover,
          opacity: "90%",
        },
        color: theme.palette.text.primary,
        ...props
      }}
      variant="contained"
      startIcon={<KeyboardBackspace />}
      onClick={handleClick}
    >
      Back
    </Button>
  );
};

export default CustomButton;
