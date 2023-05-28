/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dialog: {
            padding:theme.spacing(2),
            position:'absolute',
            top: theme.spacing(5),
            textAlign: 'center'
        },
        dialogContent: {
            textAlign: 'center'
        },
        dialogAction: {
            justifyContent:'center'
        },
        titleIcon: {
            // backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary.main,
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                cursor: 'default'
            },
            '& .MuiSvgIcon-root': {
                fontSize: '8rem',
            }
        }
    })
)
