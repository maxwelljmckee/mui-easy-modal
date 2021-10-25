import React from "react";

export const useModal = () => {
  const { open, showModal, hideModal, deferShowModal, deferHideModal } =
    React.useContext(ModalContext);
  return { open, showModal, hideModal, deferShowModal, deferHideModal };
};
