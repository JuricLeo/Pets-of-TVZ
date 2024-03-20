import { useUser } from "@clerk/nextjs";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import UpdateModal from "@/components/layout/home/update-modal";
import DeleteModal from "@/components/layout/home/delete-modal";
import { ArrowUpDown } from "lucide-react";

export type Pet = {
  id: number;
  name: string;
  species: string;
  age: number;
  color: string;
  favoriteFood: string;
  favoriteActivity: string;
  createdAt: Date;
  ownerId?: string;
};

export const columns = (
  handleUpdatePet: () => Promise<void>,
  handleDeletePet: (petId: number) => void
): ColumnDef<Pet>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "species",
    header: "Species",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "favoriteFood",
    header: "Favorite Food",
  },
  {
    accessorKey: "favoriteActivity",
    header: "Favorite Activity",
  },
  {
    accessorKey: "ownerName",
    header: "Owner Name",
    cell: () => {
      const { user } = useUser();

      return <div>{user?.firstName}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Added
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="ml-4">
          {new Date(row.original.createdAt).toLocaleDateString("en-GB")}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const pet = row.original;
      const { user } = useUser();

      if (user && pet.ownerId === user.id) {
        return (
          <div className="space-x-2 flex">
            <Button variant="update" className="w-20">
              <UpdateModal petId={pet.id} onUpdated={handleUpdatePet} />
            </Button>
            <Button variant="destructive" className="w-20">
              <DeleteModal petId={pet.id} onDeleted={handleDeletePet} />
            </Button>
          </div>
        );
      }
    },
  },
];

export default columns;
