/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


export interface ConfirmDialogProps {
    confirmDialog : {
        open: boolean;
        title?: string;
        subTitle?: string;
        data?: string;
        buttonYes: boolean;
    }
    setConfirmDialog: (open: boolean, title: string, subTitle: string, data:string, buttonYes: boolean) => void;

  }
