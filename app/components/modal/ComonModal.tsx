"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { iCancel } from "../../../util/imageImports";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Default width for small screens
  maxWidth: "900px", // Maximum width for larger screens
  bgcolor: "black",
  border: "1px solid #ffffff",
  // boxShadow: 24,
  p: 0,
  borderRadius: "10px",
  outline: "none",
  maxHeight: "90vh", // Ensure the modal does not exceed the viewport height
   // Enable scrolling within the modal
};

interface CommonModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  content?: React.ReactNode;
  padding?: string;
  title?: string;
}

const CommonModal: React.FC<CommonModalProps> = ({
  open,
  setOpen,
  content = <></>,
  padding = "p-8",
  title = "",
}) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={`relative ${padding} text-white`}>
          <Image
            onClick={handleClose}
            style={{
              maxWidth: "20px",
              minWidth: "20px",
              maxHeight: "20px",
              minHeight: "20px",
              cursor: "pointer",
            }}
            className="absolute cursor-pointer top-3 right-3"
            src={iCancel}
            alt=""
            width={10}
            height={10}
          />
          {title && (
            <div className="text-3xl font-bold text-center text-white">
              {title}
            </div>
          )}
          {content}
        </div>
      </Box>
    </Modal>
  );
};

export default CommonModal;
