/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import axios from "axios";
import {baseUrl} from "@/infrastructure/consumeApi/axios/api/url";

export const GetBearerApi = async (url: string, data: any): Promise<any> =>{
    return await axios({
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        method: 'get',
        url: `${baseUrl}${url}`,
        params: data
    }).then ( (response) => {
        return response
    }).catch((error) =>{
        return {
            status: "error",
            message : error.message,
        }
    })
}
