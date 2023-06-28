/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

export interface PaginationProps {
    /**
     * A state to total rows
     */
    totalRows: number

    /**
     *
     */
    limit?: number

    /**
     *
     */
    search?: string
    // /**
    //  * Function
    //  */
    // handleChangePage: () => void
    //
    // /**
    //  * Function
    //  */
    // handleChangeRowsPerPage: () => void
}
