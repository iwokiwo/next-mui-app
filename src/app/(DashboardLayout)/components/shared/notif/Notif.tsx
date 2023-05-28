/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import { Alert, AlertTitle, Card, Snackbar, Typography } from "@mui/material";
import { NotifStore } from "../../../../../store/notif/notifStore";
import {useTranslation} from "react-i18next";


type Props = {
  className?: JSX.Element | JSX.Element[];
};

const Notif = () => {
    const { t } = useTranslation()

    const {notif, setNotif} = NotifStore()

    const handleClose  = () =>{
        setNotif(false,notif.type!,notif.message!)
    }
  return (
    <Snackbar
      key={new Date().getTime()}
      open={notif.open}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        severity={notif.type === "success" ?  'success':'error'  }
        onClose={handleClose}
      >
        <AlertTitle>{notif.type === "success" ?  t(`common.success`):t(`common.error`)  }</AlertTitle>
       <Typography> {notif.message}</Typography>
      </Alert>

    </Snackbar>
  );
};

export default Notif;
