/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {create} from "zustand";
import {devtools} from "zustand/middleware";

import {CustomerInterface} from "@/store/customer/customer.interface";
import {CustomerRepository} from "@/repository/customer/customer";

const customerObj = new CustomerRepository()

export const CustomerStores = create<CustomerInterface>()(
    devtools((set,get) => ({
        data: [],
        totalRows: 0,
        pagination:{},
        dataParam:{
            // id: "",
            // uuid: "",
            // created_at: "",
            // created_by: "",
            // updated_at: "",
            // updated_by: "",
            // deleted_by: "",
            // name: "",
            // register_number: "",
            // user_uuid: "",
            // birth_date: "",
            // email: "",
            // phone: "",
            page: "1",
            limit:"6",
            search:""
        },
        dataSelected:{},
        dataStore:{
            birth_date: "",
            company_uuid: "",
            email: "",
            name: "",
            phone: "",
            register_number: "",
            user_uuid: ""
        } ,
        dataUpdate:{
            birth_date: "",
            company_uuid: "",
            email: "",
            name: "",
            id: 0,
            phone: "",
            register_number: "",
            user_uuid: ""
        } ,

        setDataParam: (data:any) => {
            set(() => ({
                dataParam: data
            }));
        },
        setDataUpdate: (data:any) => {
            set(() => ({
                dataUpdate: data
            }));
        },

        setDataSelected: (data: any) => {
            set(() => ({
                dataSelected:data
            }));
        },

        setDataStore: (data:any) => {
            set(() => ({
                dataStore: data
            }));
        },

        updateData: async (data:any) => {
            const response = await customerObj.update(data)
            return response.data
        },

        storeData: async (data:any) => {
            const response = await customerObj.store(data)
            return response.data
        },

        deleteData: async (data) => {
            const response = await customerObj.delete(data)
            return response.data
        },

        getDataPagination: async (data) => {
            const response = await customerObj.fetch(data)
            set({ data: response.result})
            set({totalRows: response.pagination.total_rows})
        },
    })))
