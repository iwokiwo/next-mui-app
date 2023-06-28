/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */
import {
    urlUom, urlDeleteUom,
    urlStoreUom,
    urlUpdateUom,
} from "@/infrastructure/consumeApi/axios/api/url";
import {PostBearerApi} from "@/infrastructure/consumeApi/axios/api/post/post-bearer-api";
import {PutApi} from "@/infrastructure/consumeApi/axios/api/put-api";
import {GetBearerApi} from "@/infrastructure/consumeApi/axios/api/get/get-bearer-api";
import UomInterface from "@/repository/uom/uom.interface";

export class UomRepository implements UomInterface {

    async fetch(data: any) {
        try {
            const datas = await GetBearerApi(urlUom,data)
            return  await datas.data.data
        } catch {
            return null;
        }
    }
    async store(data: any) {
        try {
            return await PostBearerApi(urlStoreUom,data)
        } catch {
            return null;
        }
    }
    async update(data: any) {
        try {
            return await PutApi(urlUpdateUom,data)
        } catch {
            return null;
        }
    }
    async delete(data: any) {
        try {
            return await PostBearerApi(urlDeleteUom, data)
        } catch {
            return null;
        }
    }
}
