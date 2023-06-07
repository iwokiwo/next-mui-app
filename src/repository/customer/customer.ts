/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import CustomerInterface from "./customer.interface";
import {
    urlCustomer, urlDeleteCustomer,
    urlStoreCustomer,
    urlUpdateCustomer,
} from "@/infrastructure/consumeApi/axios/api/url";
import {PostBearerApi} from "@/infrastructure/consumeApi/axios/api/post/post-bearer-api";
import {PutApi} from "@/infrastructure/consumeApi/axios/api/put-api";
import {GetBearerApi} from "@/infrastructure/consumeApi/axios/api/get/get-bearer-api";

export class CustomerRepository implements CustomerInterface {

    async fetch(data: any) {
        try {
            const datas = await GetBearerApi(urlCustomer,data)
            return  await datas.data.data
        } catch {
            return null;
        }
    }
    async store(data: any) {
        try {
            return await PostBearerApi(urlStoreCustomer,data)
        } catch {
            return null;
        }
    }
    async update(data: any) {
        try {
            return await PutApi(urlUpdateCustomer,data)
        } catch {
            return null;
        }
    }
    async delete(data: any) {
        try {
            return await PostBearerApi(urlDeleteCustomer, data)
        } catch {
            return null;
        }
    }
}
