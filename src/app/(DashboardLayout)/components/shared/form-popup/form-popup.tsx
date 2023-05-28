/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import {FormPopupStore} from "../../../../../store/form-popup/form-popup-store";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import {useStyles} from "./form-popup.styles";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const FormPopup : React.FC<Props> = ({ children }) =>  {
    const classes = useStyles()
    const { formPopup, setFormPopup } = FormPopupStore()


    return (
        <Dialog open={formPopup.open} maxWidth={formPopup.size} fullWidth classes={{paper:classes.dialogWrapper}}>
            <DialogTitle className={classes.dialogTitle} >
                <div style={{display:'flex'}}>
                    <Typography variant="h6" component="div" sx={{flexGrow:1, mt: -1}}
                    >{formPopup.title}</Typography>
                    <IconButton
                        color="secondary"
                        onClick={()=>{
                            setFormPopup(false,"",'sm')
                        }}
                    >
                        <CloseIcon fontSize={"small"} sx={{mt: -2}} />
                    </IconButton>
                </div>
            </DialogTitle>
            <Divider></Divider>
            <DialogContent style={{flexGrow:1, paddingTop:1}}>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default FormPopup;
