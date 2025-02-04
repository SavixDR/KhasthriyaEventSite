import React, { useEffect } from "react";
import ReactPortal from "./ReactPortal";

interface ModalProps {
  children: React.ReactElement;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      e.key === "Escape" ? handleClose() : null;
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => document.body.removeEventListener("keydown", closeOnEscapeKey);
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={handleClose}
        />
        {/* if using older model add bg-white */}
        <div className=" rounded-lg shadow-lg  relative z-10 mx-8">
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
