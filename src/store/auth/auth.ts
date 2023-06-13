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
import {save, saveString} from "@/domain/helpers/storage";
import jwt_decode from "jwt-decode";

const authObj = new AuthRepository()

export const AuthStores = create<AuthInterface>()(
    devtools((set,get) => ({
        //---set default dataAuth
        dataAuth:{username: 'dexterxx',password: "123456" } ,

        //-- set value dataAuth
        setDataAuth: (data:any) => {
            set(() => ({
                dataAuth: data
            }));
        },

        login: async (data:any) => {
            const response = await authObj.store(data)
            if(response.data.code === 202){
                await saveString("token",response.data.data.access_token)
                await save("isAuth",true)
                //console.log("jwt_decode(response.data.data.access_token)",jwt_decode(response.data.data.access_token).sub!)
                //await saveString("dataAuth", jwt_decode(response.data.data.access_token))
            }

            return response
        },
    })))
