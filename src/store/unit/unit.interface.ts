/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

export interface UnitInterface {

    data:Array<any>;

    getData: () => void;

    dataStore: {
        name?: string,
        branch_id?: number,
    }

    dataUpdate: {
        id?: string,
        name?: string,
        branch_id?: string,
        branch?: {
            id?: any,
            name?:string}
    }

    dataSelected: object

    deleteData: (data: any) => void;

    setDataSelected: (data: any) => void;

    setDataUpdate: (data: any) => void;

    updateData: (data: any) =>void;

    setDataStore: (data: any) => void;

    storeData: (data: any) =>void;
}
