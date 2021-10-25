import React from "react";
import { Button, Typography, Box } from "@material-ui/core";

const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [Component, setComponent] = React.useState(() => null);
  const [componentProps, setProps] = React.useState({});

  const showModal = (Component, componentProps) => {
    setComponent(Component);
    setProps(componentProps);
    setOpen(true);
  };

  const hideModal = () => setOpen(false);

  const deferShowModal = (Component, componentProps) => () => {
    setComponent(Component);
    setProps(componentProps);
    setOpen(true);
  };

  const onToggle = () => setOpen((prev) => !prev);

  return (
    <ModalContext.Provider
      value={{ open, showModal, hideModal, deferShowModal }}
    >
      <Component
        open={open}
        onClose={hideModal}
        onToggle={onToggle}
        {...props}
      />
      {/* <DialogWrapper
        Component={Component}
        open={open}
        onClose={hideModal}
        onToggle={onToggle}
        {...props}
      /> */}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const { open, showModal, hideModal, deferShowModal, deferHideModal } =
    React.useContext(ModalContext);
  return { open, showModal, hideModal, deferShowModal, deferHideModal };
};
