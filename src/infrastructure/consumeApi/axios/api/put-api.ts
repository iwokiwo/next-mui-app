/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import axios from "axios";
import {PutConfig} from "../config/put-config";

export const PutApi = async (url: string, data: any): Promise<any> =>{
    return await axios({
        ...PutConfig,
        url: `${PutConfig.baseUrl}${url}`,
        data,
    }).then ( (response) => {
        return response
    }).catch((error) =>{
        return {
            status: "error",
            message : error.message,
        }
    })
}
