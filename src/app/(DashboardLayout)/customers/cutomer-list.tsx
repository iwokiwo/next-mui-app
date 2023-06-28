
'use client';
import React, {ReactElement} from 'react';
import {useTranslation} from "react-i18next";

import URBS from "@/app/(DashboardLayout)/components";
import {IconButton, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

interface CustomerListProps {
    onEdit: (data: any) => void
    onDelete: (data: any) => void
    data : Array<any>
}

const CustomerList: React.FC<CustomerListProps> = (props: CustomerListProps) => {

    const { t } = useTranslation()
    const {onDelete, onEdit, data} = props

    return (
        <URBS.TableItem>
            <TableHead>
                <TableRow>
                    <TableCell sx={{ px: 1 }} colSpan={2}>
                        ID
                    </TableCell>
                    <TableCell sx={{ px: 1 }} colSpan={4}>
                        Name
                    </TableCell>
                    <TableCell sx={{ px: 1 }} colSpan={4}>
                        Email
                    </TableCell>
                    <TableCell sx={{ px: 1 }} colSpan={4}>
                        Phone
                    </TableCell>
                    <TableCell sx={{ px: 0 }} colSpan={1}>
                        Action
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((x,index)=>(
                    <TableRow key={index} hover>
                        <TableCell
                            align="left"
                            colSpan={2}
                            sx={{ px: 1, textTransform: 'capitalize' }}
                        >
                            {x.id}
                        </TableCell>
                        <TableCell
                            align="left"
                            colSpan={4}
                            sx={{ px: 1, textTransform: 'capitalize' }}
                        >
                            {x.first_name}  {x.last_name}
                        </TableCell>
                        <TableCell
                            align="left"
                            colSpan={4}
                            sx={{ px: 1, textTransform: 'capitalize' }}
                        >
                            {x.email}
                        </TableCell>
                        <TableCell
                            align="left"
                            colSpan={4}
                            sx={{ px: 1, textTransform: 'capitalize' }}
                        >
                            {x.phone}
                        </TableCell>
                        <TableCell
                            align="left"
                            colSpan={1}
                            sx={{ px: 0 }}
                        >

                            <IconButton aria-label="delete" size="small" color="secondary"
                                        onClick={() => {
                                            onDelete(x)
                                        }}>
                                <DeleteOutline fontSize="small" />
                            </IconButton>

                            <IconButton aria-label="delete" size="small" color="secondary"
                                        onClick={() => {
                                            onEdit(x)
                                        }}>
                                <EditOutlinedIcon fontSize="small" />
                            </IconButton>


                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </URBS.TableItem>
    );
}

export default CustomerList;
