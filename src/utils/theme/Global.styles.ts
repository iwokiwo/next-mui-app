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
        buttonOutlined:{
            p: 1,
            borderColor: theme.palette.grey[100],
            borderRadius: 10,
            '&:hover': {
                backgroundColor: theme.palette.primary.main, // theme.palette.primary.main
                color: theme.palette.grey[100],
                borderColor: theme.palette.primary.main
            }
        },
        buttonOutlinedSelect: {
            p: 1,
            backgroundColor: theme.palette.grey[100],
            borderColor:theme.palette.grey[100],
            borderRadius: 10,
            '&:hover': {
                backgroundColor:theme.palette.grey[100], // theme.palette.primary.main
                color: theme.palette.grey[100],
                borderColor:theme.palette.grey[100]
            }
        },
        buttonContained:{
            p: 1,
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            borderRadius: 10,
            '&:hover': {
                backgroundColor:  theme.palette.primary.main, // theme.palette.primary.main
                color:  theme.palette.primary.main,
                borderColor: theme.palette.primary.main
            }
        },
        typography:{
            color: theme.palette.grey[100]
        },
        typographySelect:{
            color: theme.palette.grey[600]
        }
    })
)
