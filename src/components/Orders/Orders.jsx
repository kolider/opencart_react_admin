import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {getNewOrders} from "../../redux/orders-reducer";
import {Backdrop, Button, CircularProgress} from "@mui/material";
import {useEffect} from "react";
import OrdersTable from "./OrdersTable";

const columns = [
    {
        id: 'order_id',
        label: 'Заказ',
        minWidth: 100,
        align: 'right'
    },
    {
        id: 'client',
        label: 'Клієнт',
        minWidth: 180
    },
    {
        id: 'total',
        label: 'Сума',
        minWidth: 100,
        align: 'right',
        format: (value) => parseFloat(value).toFixed(2),
    },
    {
        id: 'date',
        label: 'Оновлено',
        minWidth: 180,
        align: 'center',
        format: (value) => (
             new Date(value).toLocaleString("uk-UA")
        )
    },
    // {
    //     id: 'menu',
    //     label: 'Дії',
    //     minWidth: 100,
    //     align: 'center',
    //     // format: (value) => value.toLocaleString('en-US'),
    // }
];


export default (props) => {

    useEffect(()=>{
        props.getNewOrders()
    },[])

    return (
        <>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={props.isFetching}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <OrdersTable
                orders={props.orders}
                setOrderToMe={props.setOrderToMe}
            />
        </>
    );
}