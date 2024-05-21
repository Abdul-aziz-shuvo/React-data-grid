'use client'
import React, { useState } from 'react';

const GlideDataGrid = () => {
    const [columns, setColumns] = useState([
        { id: 'id', title: 'ID', width: 100, resizable: true },
        { id: 'make', title: 'Make', width: 150, resizable: true },
        { id: 'model', title: 'Model', width: 150, resizable: true },
        { id: 'price', title: 'Price', width: 150, resizable: true },
        // Add more columns as needed
      ]);

    const [rows, setRows] = useState([
        { id: 1, make: 'Toyota', model: 'Celica', price: 35000 },
        { id: 2, make: 'Ford', model: 'Mondeo', price: 32000 },
        { id: 3, make: 'Porsche', model: 'Boxster', price: 72000 },
        // Add more rows as needed
    ]);

    const handleColumnMove = (dragIndex, hoverIndex) => {
        const newColumns = [...columns];
        const draggedColumn = newColumns[dragIndex];

        // Remove the dragged column from its original position
        newColumns.splice(dragIndex, 1);
        // Insert the dragged column at the new position
        newColumns.splice(hoverIndex, 0, draggedColumn);

        // Update the state with the new column order
        setColumns(newColumns);
    };

    const handleColumnResize = (columnIndex, newSize) => {
        const newColumns = [...columns];
        newColumns[columnIndex].width = newSize;
        setColumns(newColumns);
      };

    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ tableLayout: 'fixed', width: '100%',border:'1px solid gray' }}  class="border-collapse border border-slate-500 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <colgroup>
                {columns.map((column, index) => (
                    <col key={column.id} style={{ width: column.width }} />
                ))}
                </colgroup>
                <thead  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {columns.map((column, index) => (
                        
                    <th
                        style={{width : column.width}}
                        key={column.id}
                        draggable
                        onDragOver={(e) => e.preventDefault()}
                        onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
                        onDrop={(e) => {
                        e.preventDefault();
                        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
                        handleColumnMove(dragIndex, index);
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {column.title}
                        <div
                            style={{ width: 6, cursor: 'col-resize', height: '100%', backgroundColor: 'transparent' }}
                            draggable={false}
                            onDrag={e => {
                            const newWidth = e.clientX - e.currentTarget.getBoundingClientRect().left;
                            handleColumnResize(index, newWidth);
                            }}
                        />
                        </div>
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                    {columns.map((column) => (
                        <td key={column.id}>{row[column.id]}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default GlideDataGrid;
