/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {create} from "zustand";
import {UnitInterface} from "./unit.interface";
import {devtools} from "zustand/middleware";
import {UnitRepository} from "../../repository/unit/unit";

const unitObj = new UnitRepository()

export const UnitStores = create<UnitInterface>()(
    devtools((set,get) => ({
        data: [],
        dataSelected:{},
        dataStore:{name: '',branch_id: 4 } ,
        dataUpdate:{} ,

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
            const response = await unitObj.update(data)
            return response.data
        },

        storeData: async (data:any) => {
            const response = await unitObj.store(data)
            return response.data
        },
        deleteData: async (data) => {
            const response = await unitObj.delete(data)
            return response.data
        },

        getData: async () => {

            const response = await unitObj.fetch("")
            set({ data: response})
        },
    })))
