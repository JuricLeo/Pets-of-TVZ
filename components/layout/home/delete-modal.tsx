"use client";

interface DeleteModalProps {
  petId: number;
  onDeleted: (deletedPetId: number) => void; 
}

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { toast } from "sonner"

export default function DeleteModal({ petId, onDeleted }: DeleteModalProps ) {
  const onDelete = async (petId: number) => {
    try {
      await axios.delete('/api/pets', { data: { petId } });
      onDeleted(petId); 
      toast.success("Pet deleted successfully!");
    } catch (error) {
      toast.error("There was a problem while deleting the pet, try again");
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="text-white">Delete</AlertDialogTrigger>
        <AlertDialogContent className="bg-black">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              pet and remove it data from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-slate-900 hover:bg-slate-800 hover:text-white">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-400"
              onClick={() => onDelete(petId)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
