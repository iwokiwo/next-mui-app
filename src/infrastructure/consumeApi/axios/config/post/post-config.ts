/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import { baseUrl } from "../../api/url";
import {Params} from "../http.props";

export const PostConfig : Params = {
    baseUrl: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    method: 'post'
}
