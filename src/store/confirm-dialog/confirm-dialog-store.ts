/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import { create } from "zustand";
import { ConfirmDialogProps } from "./confirm-dialog.props";

export const ConfirmDialogStore = create<ConfirmDialogProps>((set) => ({
    confirmDialog: {open: false, title:"", subTitle:"", data:"", buttonYes: false},
    setConfirmDialog: (open: boolean, title: string, subTitle: string, data: string, buttonYes: boolean) => {
      set(() => ({
        confirmDialog:
          {
            open: open,
            title: title,
            subTitle: subTitle,
            data: data,
            buttonYes: buttonYes,
          },
      }));
    },
  }));
