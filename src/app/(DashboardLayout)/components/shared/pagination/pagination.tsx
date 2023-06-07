/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import {PaginationProps} from "@/app/(DashboardLayout)/components/shared/pagination/pagination.props";
import {Box, TablePagination} from "@mui/material";
import React from "react";
import {PaginationStore} from "@/store/pagination/pagination";
import {CustomerStores} from "@/store/customer/customer";

const Pagination: React.FC<PaginationProps> = (props: PaginationProps)  => {
    const {
       limit, totalRows, search
    } = props

    const {paginationStore,setDataPagination} = PaginationStore()

    const [tmpNewPage, setTmpNewPage] = React.useState(0)
    let pageCount = 1

    const handleChangePage = (event, newPage) => {
        if(newPage < tmpNewPage){
            pageCount = pageCount - 1
        }
        else{
            pageCount = pageCount + 1
        }
        setDataPagination({
            ...paginationStore,
            page: pageCount
        })
        setTmpNewPage(newPage)
    };

    const handleChangeRowsPerPage = (event) => {
        pageCount=1
        setTmpNewPage(0)
        setDataPagination({
            ...paginationStore,
            limit: parseInt(event.target.value, 10),
            page: 0
        })
    };

    return(
        <>
            <TablePagination
                component="div"
                count={totalRows}
                page={tmpNewPage!}
                onPageChange={handleChangePage}
                rowsPerPage={limit!}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
};

export default Pagination;
