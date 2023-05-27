/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import { Breakpoint } from "@mui/material/styles"

export interface FormPopupProps {
    formPopup : {
        open: boolean;
        title?: string;
        size: false | Breakpoint | undefined ;
    }
    setFormPopup: (open: boolean, title: string, size: Breakpoint) => void;

}
