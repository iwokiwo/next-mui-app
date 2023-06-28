
'use client';
import React, {ReactElement} from 'react';
import {useTranslation} from "react-i18next";

import URBS from "@/app/(DashboardLayout)/components";
import {Chip, IconButton, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import { useTheme } from '@mui/system'
import {DeleteOutline} from "@mui/icons-material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

interface UserListProps {
    onEdit: (data: any) => void
    onDelete: (data: any) => void
    data : Array<any>
}


const UserList: React.FC<UserListProps> = (props: UserListProps) => {

    const { t } = useTranslation()
     const { palette } = useTheme()

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
                    <TableCell  align="center" sx={{ px: 1 }} colSpan={4}>
                        Status
                    </TableCell>
                    <TableCell sx={{ px: 1 }} colSpan={4}>
                        Type
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
                            {x.username}
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
                            align="center"
                            colSpan={4}
                            sx={{ px: 1, textTransform: 'capitalize' }}
                        >
                            {x.status === "active" ?
                                <Chip label={x.status} color="success"  /> :
                                <Chip label={x.status}  />
                            }
                        </TableCell>
                        <TableCell
                            align="left"
                            colSpan={4}
                            sx={{ px: 1, textTransform: 'capitalize' }}
                        >
                            {x.type}
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

export default UserList;
