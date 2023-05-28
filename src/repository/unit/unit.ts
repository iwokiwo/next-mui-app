/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import UnitInterface from "./unit.interface";
import {GetApi} from "../../infrastructure/consumeApi/axios/api/get-api";
import {urlCreateUnit, urlDeleteUnit, UrlUnit, urlUpdateUnit} from "../../infrastructure/consumeApi/axios/api/url";
import {PostApi} from "../../infrastructure/consumeApi/axios/api/post-api";
import {PutApi} from "../../infrastructure/consumeApi/axios/api/put-api";
import {UnitModel} from "../../domain/models/unit";

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
            return await PostApi(urlCreateUnit,data)
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
            return await PostApi(urlDeleteUnit, data)
        } catch {
            return null;
        }
    }
}
