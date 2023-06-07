/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


export interface PaginationInterface {
    paginationStore : {
        limit?: number,
        page?: number,
        //sort?: string,
        search?:string,
        // total_rows?: number,
        // total_pages?: number
    }

    setDataPagination: (data: any) => void;

}
