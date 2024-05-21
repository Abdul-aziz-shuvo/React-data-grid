'use client'
import DataEditor,{ GridCellKind,CompactSelection  }  from '@glideapps/glide-data-grid';
import "@glideapps/glide-data-grid/dist/index.css";
import React,{useCallback, useState} from 'react'
import useEventListener from '@/components/hook/useEventListener';
const data = [
  {
    "name": "Hines ",
    "company": "BUZZNESS",
    "email": "hines@buzzness.com",
    "phone": "+1 (869) 405-3127"
  },
  {
    "name": " Fowler",
    "company": "BUZZNESS",
    "email": "hinesfowler@buzzness.com",
    "phone": "+1 (869) 405-3127"
  },
  {
    "name": " fasdf",
    "company": "BUZZNESS",
    "email": "hinesfowler@buzzness.com",
    "phone": "+1 (869) 405-3127"
  },
  {
    "name": "trttrtrtr",
    "company": "BUZZNESS",
    "email": "hinesfowler@buzzness.com",
    "phone": "+1 (869) 405-3127"
  },
]

const cols: GridColumn[] = [
  {
      title: "Name",
      id: "name",
      width : 100,
      checked : true
  },
  {
      title: "Company",
      id: "company",
      width : 100
  },
  {
      title: "Email",
      id: "email",
      width : 100,
  },
  {
      title: "Phone",
      id: "phone",
      width : 100
  },
  
]



export default function Page() {
  const [columns,setColumns] = useState(cols)
  const [rows,setRows] = useState(data)
  const [searchValue, setSearchValue] = React.useState('')
  const [showSearch, setShowSearch] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState([]);


  const getCellContent = useCallback((cell) => {
    const [col, row] = cell;
    const dataRow = data[row];
    const indexes = columns.map((val) => val.id);
    const d = dataRow[indexes[col]]
    console.log(indexes);
    
    return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        displayData: d,
        data: d,
    };
  }, [data,columns]);

  const handleColumnMoved = (source:any, destination:any) => {
     const updatedColumns = [...columns];
     const [movedColumn] = updatedColumns.splice(source, 1);
     updatedColumns.splice(destination, 0, movedColumn);
     setColumns(updatedColumns);
  };


  const handleColumnResize = (columnIndex : any, newWidth:any) => {
    const updatedColumns = [...columns];
    columnIndex.width = newWidth;
    setColumns(updatedColumns);
  };
 
  useEventListener("keydown", React.useCallback(event => {
    if ((event.ctrlKey || event.metaKey) && event.code === "KeyF") {
      setShowSearch(cv => !cv);
      event.stopPropagation();
      event.preventDefault();
    }
  }, []), window, false, false);

  const handleSelectionChange = useCallback((selectedIds:any) => {
    console.log("Selected Row IDs:", selectedIds);
    alert('dd')
    setSelectedRow(selectedIds);
    console.log("Updated Selected Row IDs:", selectedRow);
  }, [selectedRow]);


  return (
     <DataEditor 
    // width={500} height={300}
        searchResults={[]} 
        getCellContent={getCellContent} 
        columns={columns} 
        rows={rows.length } 
        onColumnResize={handleColumnResize}
        onColumnMoved={handleColumnMoved}
        rowMarkers={{
          kind: "checkbox",
          checkboxStyle: "square",
          headerAlwaysVisible: true,
          headerTheme: {
            textMedium: "rgba(51, 51, 51, 0.50)"
          },
          onChange: (rowId, isChecked) => handleSelectionChange(rowId, isChecked),

        }}


        
    /> ); 
}