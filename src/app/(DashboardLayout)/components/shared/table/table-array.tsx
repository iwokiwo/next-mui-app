/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */
import React,{useState} from 'react'
import {Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material'
import { makeStyles } from '@mui/styles';

export const TableArray = (records: Array<any>,headCells: Array<any>,filterFn: any)  => {
    // const{records, headCells, filterFn} = props

    const pages =[5 ,10 , 25, 50, 100]
    const [page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(pages[page])
    const [order,setOrder] = useState("")
    const [orderBy,setOrderBy] = useState()

    // console.log("headCells",headCells)
    const TblHead = () => {
        const handleSortRequest = (cellId: any) =>{
            const isAsc = orderBy === cellId && order ==="asc";
             setOrder(isAsc?'desc':'asc')
            setOrderBy(cellId)
        }
        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (
                            <TableCell key={headCell.id}
                                       align = {headCell.align}
                                      // sortDirection={orderBy === headCell.id ? order:false}
                            >
                                {headCell.disableSorting?headCell.lable:
                                    <TableSortLabel
                                        //direction = {orderBy === headCell.id ? order:'asc'}
                                        onClick={ () =>{handleSortRequest(headCell.id)}}>
                                        {headCell.lable}
                                    </TableSortLabel>}
                            </TableCell>))
                    }
                </TableRow>
            </TableHead>
        )
    }

    const handleChangePage = (event: any,newPage: any) =>{
        setPage(newPage);
        console.log("newPage",newPage)
    }
    const handleChangeRowPerPage = (event: any) =>{
        setRowsPerPage(parseInt(event.target.value,10));
        setPage(0);
        console.log("row per page",rowsPerPage)
    }

    const TblPagination = () =>(<TablePagination
        component="div"
        page={page}
        rowsPerPageOptions = {pages}
        rowsPerPage={rowsPerPage}
        count={records.length}
        //count={filterFn.fn(records).length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowPerPage}
    />)
    function tableSort(array:Array<any>, comparator: any){
        const stabilizedThis = array.map((el, index)=>[el, index]);
        stabilizedThis.sort((a,b)=>{
            const order = comparator(a[0], b[0]);
            if (order !==0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }
    function getComparator(order: any,orderBy: any){
        return order === 'desc'
            ? (a: any,b: any) => descendingComparator(a,b,orderBy)
            : (a: any,b: any) => -descendingComparator(a,b,orderBy);
    }
    function descendingComparator(a: any,b: any,orderBy: any){
        if(b[orderBy] < a[orderBy]){
            return -1;
        }
        if(b[orderBy] > a[orderBy]){
            return 1;
        }
        return 0;
    }
    const recordsAfterPagingAndSort = () =>{
        return tableSort(records,getComparator(order,orderBy))
            .slice(page*rowsPerPage,(page+1)*rowsPerPage)
    }
    return {
        TblHead,
        TblPagination,
        recordsAfterPagingAndSort
    }
}
