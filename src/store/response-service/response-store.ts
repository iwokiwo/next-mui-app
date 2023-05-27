/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {ResponseServiceProps} from "./response-service.props";

export const ResponseStore = create<ResponseServiceProps>()(
    devtools((set,get) => ({
        response: {},
        setResponse: async (data) => {
            set(() => ({
                response: data
            }));
        },
    })))
