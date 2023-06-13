/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */
import UnitInterface from "./unit.interface";
import {GetApi} from "../../infrastructure/consumeApi/axios/api/get-api";
import {urlCreateUnit, urlDeleteUnit, UrlUnit, urlUpdateUnit} from "../../infrastructure/consumeApi/axios/api/url";
import {PostBearerApi} from "../../infrastructure/consumeApi/axios/api/post/post-bearer-api";
import {PutApi} from "../../infrastructure/consumeApi/axios/api/put-api";
import {UnitModel} from "../../domain/models/unit";
import {GetConfig} from "@/infrastructure/consumeApi/axios/config/get-config";


export class UnitRepository implements UnitInterface {

    async fetch(data: any) {
        try {
            const datas = await GetApi(UrlUnit,"")
            return  await UnitModel.fromJsonList(datas.data.data)
        } catch {
            return null;
        }
    }
    async store(data: any) {
        try {
            return await PostBearerApi(urlCreateUnit,data)
        } catch {
            return null;
        }
    }
    async update(data: any) {
        try {
            return await PutApi(urlUpdateUnit,data)
        } catch {
            return null;
        }
    }
    async delete(data: any) {
        try {
            return await PostBearerApi(urlDeleteUnit, data)
        } catch {
            return null;
        }
    }
}
