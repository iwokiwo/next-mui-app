/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import axios from "axios";
import {PostConfig} from "@/infrastructure/consumeApi/axios/config/post/post-config";


export const PostApi = async (url: string, data: any): Promise<any> =>{
    return await axios({
        ...PostConfig,
        url: `${PostConfig.baseUrl}${url}`,
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
