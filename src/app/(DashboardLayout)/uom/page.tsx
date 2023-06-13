/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

'use client';
import {
    Button,
} from '@mui/material';
import React from "react";
import TextField from '@mui/material/TextField';
import {useTranslation} from "react-i18next";

//----------component--------------
import URBS from "../components";

//----------store-----------------
import { NotifStore } from '@/store/notif/notifStore';
import {LoadingStore} from "@/store/loading/loading";
import {FormPopupStore} from "@/store/form-popup/form-popup-store";
import {PaginationStore} from "@/store/pagination/pagination";
import {UomStores} from "@/store/uom/uom";

import {globalAction} from "@/domain/helpers/global-action";
import UomList from "@/app/(DashboardLayout)/uom/uom-list";
import {isEmpty} from "lodash";



const Uom = () => {
    const { t } = useTranslation()

    const [openConfirm, setOpenConfirm] = React.useState({open: false, title:"", des:""})
    const [editForm, setEditForm] = React.useState(false)

    const {setNotif} = NotifStore();
    const {setDataUpdate,updateData,setDataStore,storeData,deleteData, dataSelected, setDataSelected, getDataPagination,
        data,totalRows} = UomStores()
    const { setFormPopup } = FormPopupStore()
    const {setLoading } = LoadingStore()
    const {paginationStore, setDataPagination} = PaginationStore()

    const NotifStores ={setNotif}
    const LoadingStores ={setLoading}

    React.useEffect(()=>{
        (async () => {
            try {
                //   setLoading(true)
                await getDataPagination(paginationStore)
            } finally {
                //  setLoading(false)
            }
        })()

    },[paginationStore])

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
        setFormPopup(false,t('uom.formAddTitle'),'sm')

    }

    return (
        <URBS.PageContainer title="Sample Page" description="this is Sample page">

            <URBS.DashboardCard title={t('uom.uom')!}>
                <>
                    <URBS.CardHeader>
                        <TextField
                            id="outlined-basic"
                            label={t(`common.search`)}
                            fullWidth
                            variant="outlined"
                            size="medium"
                            sx={{mr: 10, ml: -2}}
                            onChange={(e) => {
                                setDataPagination({
                                    ...paginationStore,
                                    search: e.target.value
                                })
                            }}
                        />
                        <Button color="primary" variant="contained" onClick={()=>{
                            setDataStore({ name: '',branch_id: 4})
                            setEditForm(false)
                            setFormPopup(true,t('unit.formAddTitle'),'md')
                        }}>
                            {t(`common.add`)}
                        </Button>
                    </URBS.CardHeader>

                    {!isEmpty(data) &&
                        <>
                        <UomList
                            onEdit={(x)=>{
                                setEditForm(true)
                                setDataUpdate({ id: x.id, name: x.name,branch_id: x.branch_id, branch: x.branch })
                                setFormPopup(true,t('uom.formEditTitle'),'md')
                            }}
                            onDelete={(x)=>{
                                setDataSelected(x)
                                setOpenConfirm({
                                    open:true,
                                    title:t('uom.confirmDeleteTitle'),
                                    des: `Apakah data ${x.name} akan di delete ?`
                                })
                            }}
                            data={data}
                        />
                        <URBS.Pagination
                        totalRows={totalRows}
                        limit={paginationStore.limit!}

                        />
                        </>
                    }
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

export default Uom
