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
import {saveString} from "@/domain/helpers/storage";

const authObj = new AuthRepository()

export const AuthStores = create<AuthInterface>()(
    devtools((set,get) => ({
        login: async (data:any) => {
            const response = await authObj.store(data)
            if(response.code === 202){
                await saveString("token",response.data.access_token)
            }

            return response
        },
    })))
