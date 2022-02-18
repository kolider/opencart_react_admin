import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Button} from "@mui/material";
import Table from "@mui/material/Table";
import * as React from "react";
import {columns} from "./OrdersTable";

export default (props) => {
    return <TableBody>
        {props.orders.length === 0 ?
            <TableRow >
                <TableCell colSpan={5} align="center">
                Нові замовлення відсутні
                </TableCell>
            </TableRow> :
            <>{
                props.orders
                    .map((row) => {
                        return (
                            <TableRow hover tabIndex={-1} key={row.order_id}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format
                                                ? column.format(value)
                                                : value}
                                        </TableCell>
                                    );
                                })}
                                <TableCell align="center">
                                    <Button
                                        variant="outlined"
                                        onClick={() => {
                                            props.setOrderToMe(row.order_id)
                                        }}
                                    >
                                        Взяти
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })
            }</>
        }
    </TableBody>
}