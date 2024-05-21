'use client'
import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';
import { useState } from 'react';

const cols: Column<Row>[] = [
  {
    key: 'id',
    name: 'ID',
    width: 80
  },
  {
    key: 'task',
    name: 'Title',
    resizable: true,
    sortable: true,
    draggable: true
  },
  {
    key: 'priority',
    name: 'Priority',
    resizable: true,
    sortable: true,
    draggable: true
  },
  {
    key: 'issueType',
    name: 'Issue Type',
    resizable: true,
    sortable: true,
    draggable: true
  },
  {
    key: 'complete',
    name: '% Complete',
    resizable: true,
    sortable: true,
    draggable: true
  }
];
interface Row {
  readonly id: number;
  readonly task: string;
  readonly complete: number;
  readonly priority: string;
  readonly issueType: string;
}

function createRows(): Row[] {
  const rows: Row[] = [];

  for (let i = 1; i < 500; i++) {
    rows.push({
      id: i,
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority: ['Critical', 'High', 'Medium', 'Low'][Math.round(Math.random() * 3)],
      issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.round(Math.random() * 3)]
    });
  }

  return rows;
}



export default function Page() {
  const [columns,setColumns] = useState(cols)
  const [rows,setRows] = useState(createRows())
  const onColumnsReorder = (source:any, destination:any) => {
    const updatedColumns = [...columns];
    const [movedColumn] = updatedColumns.splice(source, 1);
    updatedColumns.splice(destination, 0, movedColumn);
    setColumns(updatedColumns);
  };
  return <DataGrid columns={columns} rows={rows}  onColumnsReorder={onColumnsReorder}
  />;
}