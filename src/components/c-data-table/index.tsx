import { IFillColumn, IActionButton, mapColumns } from "./columns"
import { DataTable } from "./data-table"

interface CDataTableProps<T> {
    fillColumn: IFillColumn[],
    initialData: T[],
    actionButton: IActionButton[],
    hasControl?: boolean,
}

export default function CDataTable<T>({
    fillColumn, 
    initialData,
    actionButton,
    hasControl = false,
  }: CDataTableProps<T>) {

  const columns = mapColumns<T>(fillColumn, actionButton, hasControl);

  return (
    <>
      <DataTable columns={columns} data={initialData} />
    </>
  )
}
