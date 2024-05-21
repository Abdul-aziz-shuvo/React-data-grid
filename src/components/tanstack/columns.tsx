import {createColumnHelper} from '@tanstack/react-table'
type Person = {
  first_name: string
  last_name: string
  email: string
  gender: string
  ip_address: string

}


 const columnHelper = createColumnHelper<Person>()

export const columns = [
  columnHelper.accessor('first_name', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('last_name', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('email', {
    header: () => 'Email',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('gender', {
    header: () => <span>Gender</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('ip_address', {
    header: 'Ip Address',
    footer: info => info.column.id,
  }),

]




