'use client';
import { Key, useState } from "react"
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
/**
 * TODOs
 * 1. Add player handling
 * 2. Add scores handling for each game
 * 3. Add sum function
 */
export const Chart = () => {
    const [players, setPlayers] = useState<String[]>([]);
    const [rows, setRows] = useState<number[]>([]);

    return (
        players ?
            <Table aria-label="Example empty table"
                className="w-full rounded-md min-h-[30vh] bg-green-800">
                <TableHeader>
                    {
                        players.length > 0 ?
                            players.map((player) => <TableColumn key={player as Key}>{player}</TableColumn>)
                            :
                            <TableColumn>No Data (Click me to add players)</TableColumn>
                    }
                </TableHeader>
                <TableBody emptyContent={"No rows to display."}
                    className="text-center justify-center">
                    {[]}
                </TableBody>
            </Table>
            :
            <h2>Players not set</h2>
    )
}