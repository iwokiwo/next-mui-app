/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {
    urlLogin,
} from "../../infrastructure/consumeApi/axios/api/url";
import {PostApi} from "../../infrastructure/consumeApi/axios/api/post/post-api";

import AuthInterface from "@/repository/auth/auth.interface";

export class AuthRepository implements AuthInterface {


    async store(data: any) {
        try {
            return await PostApi(urlLogin,data)
        } catch {
            return null;
        }
    }

}
