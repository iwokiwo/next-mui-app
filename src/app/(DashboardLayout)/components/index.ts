import PageContainer from "./container/PageContainer";


import DashboardCard from "./shared/card/dashboard-card";
import {CardHeader} from "./shared/card/chard-header";
import BlankCard from "./shared/card/blank-card";
import ConfirmDialog from "./shared/confirm-dialog/confirm-dialog";
import FormPopup from "./shared/form-popup/form-popup";
import {Loading} from "./shared/loading/loading";
import ModalConfirm from "./shared/modal-confirm/modal-confirm";
import Notif from "./shared/notif/Notif";
import {TableItem} from "./shared/table/table-item";
import Pagination from "@/app/(DashboardLayout)/components/shared/pagination/pagination";
import HeaderMenu from "@/app/(DashboardLayout)/components/shared/header-menu/header-menu";
import Header from "@/app/(DashboardLayout)/components/shared/header/header";

const URBS ={
    PageContainer,
    DashboardCard,
    CardHeader,
    BlankCard,
    ConfirmDialog,
    FormPopup,
    Loading,
    ModalConfirm,
    Notif,
    TableItem,
    Pagination,
    HeaderMenu,
    Header
}
export default URBS;
