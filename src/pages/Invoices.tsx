
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

const invoices = [
  {
    number: "INV-1001",
    client: "Acme Corp",
    status: "Paid",
    total: 1200,
    issued: "2025-04-01",
  },
  {
    number: "INV-1002",
    client: "Globex Inc",
    status: "Pending",
    total: 3500,
    issued: "2025-04-10",
  },
  {
    number: "INV-1003",
    client: "Soylent LLC",
    status: "Overdue",
    total: 2200,
    issued: "2025-03-22",
  },
];

const statusColors = {
  "Paid": "bg-green-100 text-green-800",
  "Pending": "bg-yellow-100 text-yellow-800",
  "Overdue": "bg-red-100 text-red-800",
};

const Invoices = () => (
  <div className="max-w-4xl mx-auto p-8">
    <h1 className="text-3xl font-semibold mb-6 text-center">Invoices</h1>
    <div className="rounded-lg bg-background shadow-sm border">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice #</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Issued</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.number}>
              <TableCell>{inv.number}</TableCell>
              <TableCell>{inv.client}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[inv.status]}`}>
                  {inv.status}
                </span>
              </TableCell>
              <TableCell>${inv.total.toLocaleString()}</TableCell>
              <TableCell>{inv.issued}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <div className="mt-6 text-muted-foreground text-center">
      View and manage client invoices here.
    </div>
  </div>
);

export default Invoices;

