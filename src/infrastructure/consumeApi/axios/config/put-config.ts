/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {Params} from "./http.props";

export const PutConfig : Params = {
    baseUrl: "https://api.orderq.shop",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.c9iF8378Wy9uU_8_tJS_iDgrw2UUF3W7KSoYRYotRVI'
    },
    method: 'put'
}
