import { useSnackbar, OptionsObject, WithSnackbarProps, SnackbarKey } from "notistack";
import React from "react";
import { IconButton } from '@material-ui/core';
import { Close as IconClose } from '@material-ui/icons';

export enum VariantType {
  default = "default",
  error = "error",
  success = "success",
  warning = "warning",
  info = "info",
}

interface SnackProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void;
}

// const InnerSnackbarUtilsConfigurator: React.FC<SnackProps> = (props) => {
//   props.setUseSnackbarRef(useSnackbar());
//   return null;
// };

let useSnackbarRef: WithSnackbarProps;
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = (props: {
  children?: React.ReactNode;
}) => {
  return (
    <>
    {/* <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef}> */}
      {props.children}
    {/* </InnerSnackbarUtilsConfigurator> */}
    </>
  );
};

//sets a default length for all Snack messages
const defaultSnackMessageLength = 1000;

const trimMessage = (
  msg: string,
  length: number = defaultSnackMessageLength
) => {
  return msg.substring(0, length);
};

const defaultOptions : OptionsObject = {
  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  autoHideDuration: 3000,
  action: (key?: SnackbarKey) => <SnackbarCloseButton key={key} />
};

function SnackbarCloseButton({ key } : { key?: SnackbarKey }) {
  return (
    <IconButton onClick={() => useSnackbarRef.closeSnackbar(key)} color="inherit">
      <IconClose />
    </IconButton>
  );
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  success(msg: string, options: OptionsObject = {}) {
    this.toast(trimMessage(msg), { ...options, variant: VariantType.success , ...defaultOptions});
  },
  warning(msg: string, options: OptionsObject = {}) {
    this.toast(trimMessage(msg), { ...options, variant: VariantType.warning, ...defaultOptions });
  },
  info(msg: string, options: OptionsObject = {}) {
    this.toast(trimMessage(msg), { ...options, variant: VariantType.info, ...defaultOptions });
  },
  error(msg: string, options: OptionsObject = {}) {
    this.toast(trimMessage(msg), { ...options, variant: VariantType.error, ...defaultOptions });
  },
  toast(msg: string, options: OptionsObject = {}) {
    useSnackbarRef.enqueueSnackbar(msg, options);
  },
};
