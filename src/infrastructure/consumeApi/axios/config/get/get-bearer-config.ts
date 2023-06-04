/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import { baseUrl } from "../../api/url";
import {Params} from "../http.props";
import { load } from "@/domain/helpers/storage";

export const GetConfig : Params = {
    baseUrl: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${load("token")}`
    },
    method: 'get'
}
