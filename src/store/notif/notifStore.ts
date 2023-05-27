import create from "zustand";
import { NotifProps } from "./notif.props";
import {devtools} from "zustand/middleware";

interface NotifState {
  notif: NotifProps;
  setNotif: (open: boolean, type: string, message: string) => void;

}

export const NotifStore = create<NotifState>()(
    devtools((set) => ({
  notif: {open: false, type:"success",message:""},
  setNotif: (open: boolean, type: string, message: string) => {
    set(() => ({
    notif:
        {
          open: open,
          type: type,
          message: message,
        } as NotifProps,
    }));
  },
})));
