/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

export interface CustomerInterface {

    data:Array<any>;

    dataStore: {
        birth_date?: string,
        company_uuid?: string,
        email?: string,
        name?: string,
        phone?: string,
        register_number?: string,
        user_uuid?: string
    }

    dataUpdate: {
        birth_date?: string,
        company_uuid?: string,
        email?: string,
        name?: string,
        id?: number,
        phone?: string,
        register_number?: string,
        user_uuid?: string
    }

    dataSelected: object

    setDataSelected: (data: any) => void;

    setDataUpdate: (data: any) => void;

    updateData: (data: any) =>void;

    setDataStore: (data: any) => void;

    storeData: (data: any) =>void;

    deleteData: (data: any) => void;

    getDataPagination: (data: any) => void;
}
