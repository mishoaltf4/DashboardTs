import { ColumnDef, getCoreRowModel, useReactTable, flexRender, getFilteredRowModel } from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

    type TOrder = {
      id: string,
      name: string,
      address: string,
      date: string,
      type: string,
      status: "Complited" | "Processing" | "Rejected" | "On Hold" | "In Transit"
    }
  
  
    const data: TOrder[] = [
      {
        id: "1",
        name: "first Title",
        address: "ragaca 1 s",
        date: "1jun 2024",
        type: "just",
        status: "Processing"
      },
      {
        id: "2",
        name: "second Title",
        address: "ragaca 2 s",
        date: "2jun 2024",
        type: "just",
        status: "In Transit"
      },
      {
        id: "3",
        name: "third Title",
        address: "ragaca 3 s",
        date: "3 jun 2024",
        type: "just",
        status: "Complited"
      }
    ]
  
  
    const columns: ColumnDef<TOrder>[] = [
      {
          header: "ID",
          accessorKey: "id"
      },
      {
          header: "NAME",
          accessorKey: "name"
      },
      {
          header: "address",
          accessorKey: "address"
      },
      {
          header: "date",
          accessorKey: "date"
      },
      {
          header: "type",
          accessorKey: "type"
      },
      {
          header: "status",
          accessorKey: "status",
          meta: {
            
          },
          cell: ({row}) => <button className={`${getBtnColor(row.original.status)} w-32 h-7 bg-opacity-25 rounded-sm font-semiBold tracking-wide dark:text-dark-text dark:bg-opacity-100`}>{row.original.status}</button>
      },
  
  
    ]
    
  
    const getBtnColor = (status: TOrder["status"]) => {
      switch (status) {
        case "Complited":
          return "bg-[#00B69B] text-[#00B69B]"
          break;
        case "In Transit":
          return "bg-[#BA29FF] text-[#BA29FF]"
          break;
        case "On Hold":
          return "bg-[#FFA756] text-[#FFA756]"
          break;
        case "Processing":
          return "bg-[#6226EF] text-[#6226EF]"
          break;
        case "Rejected":
          return "bg-[#EF3826] text-[#EF3826]"
          break;
        default:
          return "bg-black text-white"
          break;
      }
    }
    
    export function DataTable() {
      const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
    return(
        <>
          <Table className="font-nunitoSans">
            <TableHeader className="">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="last:text-center">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="last:text-center text-base font-nunitoSans">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
    )
}

