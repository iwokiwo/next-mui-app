/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

'use client';
import {
    Button,
    Grid,
    Icon,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Card,
    CardContent,
} from '@mui/material';
import React from "react";
import {Box } from '@mui/material';
import {styled} from "@mui/system";
import {Delete, DeleteOutline} from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {useTranslation} from "react-i18next";

//----------component--------------
import URBS from "../components";

//----------store-----------------
import { NotifStore } from '../../../store/notif/notifStore';
import {LoadingStore} from "../../../store/loading/loading";
import {FormPopupStore} from "../../../store/form-popup/form-popup-store";

import {globalAction} from "../../../domain/helpers/global-action";
import {UnitStores} from "../../../store/unit/unit";
import {CustomerStores} from "@/store/customer/customer";
import {PaginationStore} from "@/store/pagination/pagination";

const Customers = () => {
    const { t } = useTranslation()
    const [openConfirm, setOpenConfirm] = React.useState({open: false, title:"", des:""})
    const [editForm, setEditForm] = React.useState(false)

    const {setNotif} = NotifStore();
    const {setDataUpdate,updateData,setDataStore,storeData,deleteData, dataSelected, setDataSelected, getDataPagination, data} = CustomerStores()
    const {paginationStore, setDataPagination } = PaginationStore()
    const { setFormPopup } = FormPopupStore()
    const {setLoading } = LoadingStore()

    const NotifStores ={setNotif}
    const LoadingStores ={setLoading}

    React.useEffect(()=>{
        (async () => {
            try {
                setLoading(true)
                await getDataPagination(paginationStore)
            } finally {
                setLoading(false)
            }
        })()

    },[])

    const onRemove = async () => {

        globalAction(LoadingStores, NotifStores,{
            action: async() => await deleteData(dataSelected),
            afterAction: () => getDataPagination(paginationStore)
        })
    }


    const onStore =  (data: any) => {
        globalAction(LoadingStores, NotifStores,{
            action: async() => await editForm?updateData(data):storeData(data),
            afterAction: () => getDataPagination(paginationStore)
        })
        setFormPopup(false,"Form Add Unit",'sm')

    }

    return (
        <URBS.PageContainer title="Sample Page" description="this is Sample page">

            <URBS.DashboardCard title={t('customer.customer')!}>
                <>
                    <URBS.CardHeader>

                        <TextField id="outlined-basic" label={t(`common.search`)} fullWidth variant="outlined" size="medium" sx={{mr: 10, ml: -2}}/>

                        <Button color="primary" variant="contained" onClick={()=>{
                            setDataStore({ name: '',branch_id: 4})
                            setEditForm(false)
                            setFormPopup(true,"Form Add Customer",'sm')
                        }}>
                            {t(`common.add`)}
                        </Button>
                    </URBS.CardHeader>
                    <URBS.TableItem>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ px: 1 }} colSpan={4}>
                                    Name
                                </TableCell>
                                <TableCell sx={{ px: 1 }} colSpan={4}>
                                    Email
                                </TableCell>
                                <TableCell sx={{ px: 1 }} colSpan={4}>
                                    Phone
                                </TableCell>
                                <TableCell sx={{ px: 0 }} colSpan={1}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((x,index)=>(
                                <TableRow key={index} hover>
                                    <TableCell
                                        align="left"
                                        colSpan={4}
                                        sx={{ px: 1, textTransform: 'capitalize' }}
                                    >
                                        {x.name}
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        colSpan={4}
                                        sx={{ px: 1, textTransform: 'capitalize' }}
                                    >
                                        {x.email}
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        colSpan={4}
                                        sx={{ px: 1, textTransform: 'capitalize' }}
                                    >
                                        {x.phone}
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        colSpan={1}
                                        sx={{ px: 0 }}
                                    >

                                        <IconButton aria-label="delete" size="small" color="secondary"
                                                    onClick={() => {
                                                        setDataSelected(x)

                                                        setOpenConfirm({
                                                            open:true,
                                                            title: "Delete unit",
                                                            des: `Apakah data ${x.name} akan di delete ?`
                                                        })
                                                    }}>
                                            <DeleteOutline fontSize="small" />
                                        </IconButton>


                                        <IconButton aria-label="delete" size="small" color="secondary"
                                                    onClick={() => {

                                                        setEditForm(true)
                                                        setDataUpdate({ id: x.id, name: x.name,branch_id: x.branch_id, branch: x.branch })
                                                        setFormPopup(true,"Form Edit Unit",'sm')
                                                    }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </IconButton>


                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </URBS.TableItem>
                </>
            </URBS.DashboardCard>
            <URBS.FormPopup >

            </URBS.FormPopup>
            <URBS.ModalConfirm
                open={openConfirm.open}
                title={openConfirm.title}
                description={openConfirm.des}
                onClose={() => setOpenConfirm({
                    ...openConfirm,
                    open: false
                })}
                onConfirm={() => {
                    setOpenConfirm({
                        ...openConfirm,
                        open: false
                    })
                    onRemove()
                }}
            />
            <URBS.Notif />
            <URBS.ConfirmDialog />
        </URBS.PageContainer>

    )
}

export default Customers
