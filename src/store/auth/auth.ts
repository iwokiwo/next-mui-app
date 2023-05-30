/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {AuthInterface} from "@/store/auth/auth.interface";
import {AuthRepository} from "@/repository/auth/auth";

const authObj = new AuthRepository()

export const AuthStores = create<AuthInterface>()(
    devtools((set,get) => ({
        setData: async (data:any) => {
            const response = await authObj.store(data)
            return response.data
        },
    })))
