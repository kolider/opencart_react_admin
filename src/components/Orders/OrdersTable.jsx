import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import * as React from "react";
import OrdersTableBody from "./OrdersTableBody";


export const columns = [
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
    return <Paper sx={{width: '100%'}}>
        <TableContainer>
            <Table aria-label="table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{top: 57, minWidth: column.minWidth}}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                        <TableCell
                            key="menu"
                            align="center"
                            style={{top: 57, minWidth: 100}}
                        >
                            Дії
                        </TableCell>
                    </TableRow>
                </TableHead>

                <OrdersTableBody
                    orders={props.orders}
                    setOrderToMe={props.setOrderToMe}
                />

            </Table>
        </TableContainer>
    </Paper>
}