/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import axios from "axios";
import {DeleteConfig} from "../config/delete-config";


export const DeleteApi = async (url: string, data: any): Promise<any> =>{
    return await axios({
        ...DeleteConfig,
        url: `${DeleteConfig.baseUrl}/${url}${data.id}`,
    }).then ( (response) => {
        console.log(response)
        return response
    }).catch((error) =>{

        return {
            status: "error",
            message : error.message,
        }
    })
}
