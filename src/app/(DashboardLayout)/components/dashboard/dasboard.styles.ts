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
        button:{
            p: 1,
            borderColor: 'white',
            borderRadius: 10,
            '&:hover': {
                backgroundColor: 'red', // theme.palette.primary.main
                color: 'white',
                borderColor: 'red'
            }
        },
        buttonClick: {
            p: 1,
            backgroundColor: 'white' ,
            borderColor: 'white',
            borderRadius: 10,
            '&:hover': {
                backgroundColor: 'white', // theme.palette.primary.main
                color: 'white',
                borderColor: 'white'
            }
        }
    })
)
