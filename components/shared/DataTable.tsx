"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface Column {
    header: string;
    accessor: string;
    width?: string;
}

interface DataTableProps {
    columns: Column[];
    data: Record<string, string | number>[];
    className?: string;
}

export function DataTable({ columns, data, className }: DataTableProps) {
    return (
        <div className={`my-6 ${className || ""}`}>
            <div className="border border-border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50 dark:bg-muted/20">
                            {columns.map((column, index) => (
                                <TableHead
                                    key={index}
                                    className={`font-semibold ${column.width || ""}`}
                                >
                                    {column.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow
                                key={rowIndex}
                                className="border-border hover:bg-muted/30 dark:hover:bg-muted/10"
                            >
                                {columns.map((column, colIndex) => (
                                    <TableCell
                                        key={colIndex}
                                        className={colIndex === 0 ? "font-medium" : "text-foreground"}
                                    >
                                        {row[column.accessor]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
