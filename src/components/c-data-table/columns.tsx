"use client"

import { CaretSortIcon, EyeOpenIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "Components/ui/button"
import React from "react"

export interface IFillColumn {
  name: string,
  type: string,
  header: string,
  object: string,
  isFilter: boolean,
  isOrderBy: boolean,
  isPrimaryKey?: boolean,
}

export interface IActionButton {
  name: string,
  object: 'button',
  type: 'view' | 'update' | 'delete',
  fnt: (id: string) => void
}

interface IIconButton {
  type: string,
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>
}

type TColumn = IFillColumn | IActionButton;

const IconButton: IIconButton[] = [
  { type: 'view', icon: EyeOpenIcon }, 
  { type: 'update', icon: Pencil2Icon }, 
  { type: 'delete', icon: TrashIcon },
]

export function mapColumns<T>(FillColumns: IFillColumn[], actionButton: IActionButton[], hasControl: boolean = false): ColumnDef<T>[] {

  const mergeColumnsActionButton: TColumn[] = actionButton.map(ab => { return {...ab}})

  const mergeColumnsFillColumn: TColumn[] = FillColumns.map(column => { return { ...column}})

  const mergeColumns = ([...mergeColumnsFillColumn, ...mergeColumnsActionButton]);

  return mergeColumns.map((fillCollumn) => {
    
    return {
      accessorKey: fillCollumn.name,
      enableSorting: true,
      enableHiding: true,
      header: ({ column }) => {
        if(fillCollumn.object !== 'button') {
          if((fillCollumn as IFillColumn).isOrderBy) {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                {(fillCollumn as IFillColumn).header}
                <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
            )
          } else {
            return (fillCollumn as IFillColumn).header;
          }
        } else {
          return fillCollumn.type;
        }
        
      },
      cell: ({ row }) => {
        if(fillCollumn.object !== 'button') {
          return row.getValue(fillCollumn.name)
        } else {
          const iconButton = IconButton.filter(btn => btn.type === fillCollumn.type)
          const IconComponent = iconButton[0].icon
          const fieldPrimaryKey = FillColumns.find(f => f.isPrimaryKey === true);
          const id: string = fieldPrimaryKey && 'name' in fieldPrimaryKey
            ? row.getValue(fieldPrimaryKey.name)
            : '0';
          
          return (
            <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => (fillCollumn as IActionButton).fnt(id)}>
              <span className="ml-2 h-4 w-4">
                <IconComponent />
              </span>
            </Button>
          )
        }
      },
    }
  })
};
