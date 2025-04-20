
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Zap, MessageSquare, FileText } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  status: 'active' | 'inactive' | 'lead';
  value?: string;
  avatar?: string;
  lastContact?: string;
}

interface ClientTableProps {
  clients: Client[];
  onViewClient?: (id: string) => void;
}

export function ClientTable({ clients, onViewClient }: ClientTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Last Contact</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9 mr-3">
                    <AvatarImage src={client.avatar} alt={client.name} />
                    <AvatarFallback>{client.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.company}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    client.status === 'active'
                      ? 'bg-green-100 text-green-800 hover:bg-green-100'
                      : client.status === 'inactive'
                      ? 'bg-gray-100 text-gray-800 hover:bg-gray-100'
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                  }
                >
                  {client.status}
                </Badge>
              </TableCell>
              <TableCell>{client.value || '-'}</TableCell>
              <TableCell>{client.lastContact || 'Never'}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Zap className="h-4 w-4" />
                    <span className="sr-only">AI Actions</span>
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <MessageSquare className="h-4 w-4" />
                    <span className="sr-only">Contact</span>
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <FileText className="h-4 w-4" />
                    <span className="sr-only">Documents</span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => onViewClient?.(client.id)}>
                        View details
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit client</DropdownMenuItem>
                      <DropdownMenuItem>Create task</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
