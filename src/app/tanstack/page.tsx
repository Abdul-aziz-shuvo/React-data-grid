'use client'
import {getCoreRowModel, useReactTable } from '@tanstack/react-table'
import React,{useState,useMemo} from 'react'
export default function Page() {

  const [data, setData] = useState([])
  const columns = useMemo(() => [
    // ...
  ], []);
 //react
const table = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() })

  // ...render your table
  return <table> </table>
}