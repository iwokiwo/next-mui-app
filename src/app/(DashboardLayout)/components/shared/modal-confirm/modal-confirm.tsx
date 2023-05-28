/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import NotListedLocationIcon from '@mui/icons-material/QuestionMarkOutlined';

import { useStyles } from "./modal-confirm.styles";
import {ModalConfirmProps} from "./modal-confirm.props";

const ConfirmDialog: React.FC<ModalConfirmProps> = (props: ModalConfirmProps)  => {
    const classes = useStyles()
    const {
        open, title, description, onClose, onConfirm,
        confirm = "Confirm",
        cancel = "Cencel"
    } = props



    return (
        <Dialog open={open} classes={{paper:classes.dialog}}>
            <DialogTitle>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {title}
                </Typography>
                <Typography variant="subtitle2">
                    {description}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>

                <Button sx={{ ml: 1, backgroundColor: 'orange' }} onClick={onClose} variant='contained' color='info'>No</Button>

                <Button sx={{ ml: 1 , backgroundColor: 'red' }} onClick={onConfirm} variant='contained' color='info'>Yes</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
