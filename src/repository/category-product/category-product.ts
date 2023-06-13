/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */
import {
    urlCategoryProduct, urlDeleteCategoryProduct,
    urlStoreCategoryProduct,
    urlUpdateCategoryProduct,
} from "@/infrastructure/consumeApi/axios/api/url";
import {PostBearerApi} from "@/infrastructure/consumeApi/axios/api/post/post-bearer-api";
import {PutApi} from "@/infrastructure/consumeApi/axios/api/put-api";
import {GetBearerApi} from "@/infrastructure/consumeApi/axios/api/get/get-bearer-api";
import CategoryProductInterface from "@/repository/category-product/category-product.interface";

export class CategoryProductRepository implements CategoryProductInterface {

    async fetch(data: any) {
        try {
            const datas = await GetBearerApi(urlCategoryProduct,data)
            return  await datas.data.data
        } catch {
            return null;
        }
    }
    async store(data: any) {
        try {
            return await PostBearerApi(urlStoreCategoryProduct,data)
        } catch {
            return null;
        }
    }
    async update(data: any) {
        try {
            return await PutApi(urlUpdateCategoryProduct,data)
        } catch {
            return null;
        }
    }
    async delete(data: any) {
        try {
            return await PostBearerApi(urlDeleteCategoryProduct, data)
        } catch {
            return null;
        }
    }
}
