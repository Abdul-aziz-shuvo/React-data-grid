import React, { useMemo } from "react";
import COLUMNS from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import { useReactTable ,getCoreRowModel} from "@tanstack/react-table";
export default function BasicTable() {
    const columns = useMemo(() => COLUMNS,[])
    const data = useMemo(() => MOCK_DATA,[])
    const tableInstance =   useReactTable({
        columns : columns,
        data : data,
        getCoreRowModel: getCoreRowModel(),

    });

    const {getTableProps,GetTableBodyProps,getHeaderGroups,headerGroups,rows,prepareRow} = tableInstance

  return (<div>
    <table {...getTableProps}>
        <thead>
            {getHeaderGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}> 
                    {
                        headerGroup.headers.map((column) => (
                            <th {...column.getHeaderGroupProps()}>{column.render('Header')}</th>
                        ))
                    }
                </tr>
            ))}
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>

                </td>
            </tr>
        </tbody>
    </table>
  </div>);
}
