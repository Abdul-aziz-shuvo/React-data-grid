import { Row } from "./types";
import { faker } from '@faker-js/faker';

type Comparator = (a: Row, b: Row) => number;
export const getComparator = (sortColumn: string): Comparator => {
  switch (sortColumn) {
    case "variant":
    case "title":
    case "img":
    case "size":
    case "sku":
      return (a, b) => {
        return a[sortColumn].localeCompare(b[sortColumn]);
      };
    case "id":
    case "retailPrice":
    case "empPrice":
    case "stock":
    case "vat":
      return (a, b) => {
        return a[sortColumn] - b[sortColumn];
      };
    default:
      throw new Error(`unsupported sortColumn: "${sortColumn}"`);
  }
};

function createRow(index: number) {
  return {
    id: index,
    title: faker.commerce.productName(),
    variant: faker.commerce.product(),
    img: faker.image.nature(),
    retailPrice: faker.commerce.price(),
    empPrice: faker.commerce.price(),
    size: faker.random.word(),
    stock: faker.datatype.number(),
    sku: faker.datatype.uuid(),
    vat: Math.floor(Math.random() * 10)
  };
}

export const createRows = (count: number) => {
  return [...Array(count).keys()].map((i) => createRow(i));
};
