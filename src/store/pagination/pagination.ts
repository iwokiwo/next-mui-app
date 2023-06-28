/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {PaginationInterface} from "@/store/pagination/pagination.interface";

export const PaginationStore = create<PaginationInterface>()(
    devtools((set,get) => ({
        paginationStore:{
            // limit: 10,
            // page: 1,
            // sort:'id desc',
            // search:'',
            // total_pages: 1,
            // total_rows: 6
            page: 1,
            limit:10,
            search:""
        } ,

        setDataPagination: (data: any) => {
            set(() => ({
                paginationStore:data
            }));
        },
    })))
