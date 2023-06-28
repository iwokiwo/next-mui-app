/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */
import {
    urlUsers, urlDeleteUsers,
    urlStoreUsers,
    urlUpdateUsers,
} from "@/infrastructure/consumeApi/axios/api/url";
import {PostBearerApi} from "@/infrastructure/consumeApi/axios/api/post/post-bearer-api";
import {PutApi} from "@/infrastructure/consumeApi/axios/api/put-api";
import {GetBearerApi} from "@/infrastructure/consumeApi/axios/api/get/get-bearer-api";
import UserInterface from "@/repository/user/user.interface";

export class UserRepository implements UserInterface {

    async fetch(data: any) {
        try {
            const datas = await GetBearerApi(urlUsers,data)
            return  await datas.data.data
        } catch {
            return null;
        }
    }
    async store(data: any) {
        try {
            return await PostBearerApi(urlStoreUsers,data)
        } catch {
            return null;
        }
    }
    async update(data: any) {
        try {
            return await PutApi(urlUpdateUsers,data)
        } catch {
            return null;
        }
    }
    async delete(data: any) {
        try {
            return await PostBearerApi(urlDeleteUsers, data)
        } catch {
            return null;
        }
    }
}
