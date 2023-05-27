/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import { create } from "zustand";
import { FormPopupProps } from "./form-popup.props";
import { Breakpoint } from "@mui/material/styles"

export const FormPopupStore = create<FormPopupProps>((set) => ({
    formPopup: {open: false, title:"", size:"sm",},
    setFormPopup: (open: boolean, title: string, size: Breakpoint) => {
        set(() => ({
            formPopup:
                {
                    open: open,
                    title: title,
                    size: size
                }
        }));
    },
}));
