/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import NotListedLocationIcon from '@mui/icons-material/QuestionMarkOutlined';
import { ConfirmDialogStore } from "../../../../../store/confirm-dialog/confirm-dialog-store";
import { useEffect } from "react";

import { useStyles } from "./confirm-dialog.styles";

const ConfirmDialog = () => {
    const classes = useStyles()
    const { confirmDialog, setConfirmDialog } = ConfirmDialogStore()



    return (
        <Dialog open={confirmDialog.open} classes={{paper:classes.dialog}}>
            <DialogTitle>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>

                <Button sx={{ ml: 1, backgroundColor: 'orange' }} onClick={() => {

                    setConfirmDialog(false, confirmDialog.title!, confirmDialog.subTitle!, "", false)
                }} variant='contained' color='info'>No</Button>

                <Button sx={{ ml: 1 , backgroundColor: 'red' }} onClick={() => {

                    setConfirmDialog(false, confirmDialog.title!, confirmDialog.subTitle!, confirmDialog.data!, true)
                }} variant='contained' color='info'>Yes</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
