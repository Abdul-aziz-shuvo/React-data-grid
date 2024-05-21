'use client'
import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import {columns} from '../../components/tanstack/columns'
import MOCK_DATA from '../../components/tanstack/MOCK_DATA.json'
import {
  // getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'






export default function Page() {
  const [data, _setData] = React.useState(() => [...MOCK_DATA])
  const rerender = React.useReducer(() => ({}), {})[1]
  const [sorting,setSorting] = useState([])
  const [filtering,setFiltering] = useState([])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel : getPaginationRowModel(),
    getSortedRowModel :getSortedRowModel(),
    // getFilteredRowModel :getFilteredRowModel(),
    state :{
      sorting :sorting,
      globalFilter :filtering,
    },
    onSortingChange : setSorting,
    onGlobalFilterChange : setFiltering
  })

  return (
    <div className="p-2">
      <div>
        <input type="text"  onChange={(e) => setFiltering(e.target.value)}/>
      </div>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"'>
        <thead className='text-xs text-gray-700 uppercase bg-white-50 dark:white-700 dark:text-gray-400'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} onClick={() => header.column.getToggleSortingHandler()}>
                
                   <div>
                    { flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                   </div>

                      {
                       { asc : 'a',desc : 'd' }[ 
                        header.column.getIsSorted() ?? null
                       ]
                      }
                      
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
       
      </table>
      <div className="h-4 flex" />
      <button className='border border-gray-500 px-3 py-2' onClick={() => table.setPageIndex(0)}>First Page</button>
      <button className='border border-gray-500 px-3 py-2' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
      <button className='border border-gray-500 px-3 py-2' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
      <button className='border border-gray-500 px-3 py-2' onClick={() => table.setPageIndex(table.getPageCount() - 1 )}>Last Page</button>
      {/* <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button> */}
    </div>
  )
}


