/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {create} from "zustand";
import {devtools} from "zustand/middleware";

import {CategoryProductInterface} from "@/store/category-product/category-product.interface";
import {CategoryProductRepository} from "@/repository/category-product/category-product";

const categoryProductObj = new CategoryProductRepository()

export const CategoryProductStores = create<CategoryProductInterface>()(
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
            const response = await categoryProductObj.update(data)
            return response.data
        },

        storeData: async (data:any) => {
            const response = await categoryProductObj.store(data)
            return response.data
        },

        deleteData: async (data) => {
            const response = await categoryProductObj.delete(data)
            return response.data
        },

        getDataPagination: async (data) => {
            const response = await categoryProductObj.fetch(data)

            set({ data: response.result})
            set({totalRows: response.pagination.total_rows})
        },
    })))
