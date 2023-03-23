import React from "react";
import styles from "../styles/DesignCard.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // minWidth: "calc(100% - 128px)",
  minWidth: {
    xl: "50%",
    lg: "35%",
    md: "55%",
    sm: "80%",
    xs: "75%",
  },
  height: "auto",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  pt: {
    xl: 5,
    lg: 5,
    md: 5,
    xs: 2,
  },
  pr: {
    xl: 5,
    lg: 5,
    md: 5,
    xs: 2,
  },
  pb: {
    xl: 4,
    lg: 4,
    md: 5,
    xs: 1,
  },
  pl: {
    xl: 5,
    lg: 5,
    md: 5,
    xs: 2,
  },
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1200,
      lg: 1600,
      xl: 2500,
    },
  },
  components: {},
});

interface Props {
  url: string;
  title: string;
  description: string;
}

const DesignCard = ({ url, title, description }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.info}>
            <h1>{title}</h1>

            <div className={styles.line_card}></div>
            <br />

            <p>{description}</p>
            <br />
            <Button
              variant="outlined"
              onClick={handleOpen}
              sx={{
                color: "rgb(var(--primary-rgb))",
                bgcolor: "rgb(var(--light-rgb))",
                ":hover": {
                  bgcolor: "var(--primary-light)",
                  color: "rgb(var(--light-rgb))",
                  borderColor: "rgb(var(--light-rgb))",
                },
              }}
            >
              Увеличить
            </Button>
            <Modal open={open} onClose={handleClose} onClick={handleClose}>
              <Box sx={style}>
                <div className={styles.image_modal_container}>
                  <Image
                    onClick={handleClose}
                    src={url}
                    alt="Logo"
                    fill={true}
                    className={styles.image_modal}
                    //   sizes="(max-width: 800px) 100vw,
                    // (max-width: 1200px) 25vw,
                    // 33vw"
                    priority
                  />
                </div>
              </Box>
            </Modal>
          </div>

          <Image
            src={url}
            alt="Logo"
            fill={true}
            className={styles.image}
            sizes="(max-width: 800px) 100vw,
              (max-width: 1200px) 25vw,
              33vw"
            priority
          />
        </div>
        <div className={styles.line}></div>
      </div>
    </ThemeProvider>
  );
};

export default DesignCard;
