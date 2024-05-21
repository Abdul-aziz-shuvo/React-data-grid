import { Column } from "react-data-grid";
import { Row } from "../types";
import { ImageFormatter } from "./ImageFormatter";

export const tableColumns: Column<Row>[] = [
  { key: "variant", name: "Variant name",draggable: true },
  {
    name: "Image variants",
    key: "img",
    width: 100,
    draggable: true,
    formatter: ({ row }) => <ImageFormatter value={row.img} />,

  },
  {
    key: "retailPrice",
    name: "Retail price($ USD)",
    draggable: true
  },
  {
    key: "empPrice",
    name: "Employee price($ USD)",
    draggable: true
  },
  { key: "size", name: "Size" ,draggable: true},
  { key: "stock", name: "Stock" ,draggable: true},
  { key: "sku", name: "Sku" ,draggable: true},
  { key: "vat", name: "VAT(%)",draggable: true }
];
