"use client";

interface Pet {
  id: number;
  name: string;
  species: string;
  age: number;
  color: string;
  favoriteFood: string;
  favoriteActivity: string;
}

interface UpdateModalProps {
  petId: number;
  onUpdated: (updatedPetId: number) => void;
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
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";

export default function UpdateModal({ petId, onUpdated }: UpdateModalProps) {
  const [pet, setPet] = useState({
    name: "",
    species: "",
    age: 0,
    color: "",
    favoriteFood: "",
    favoriteActivity: "",
  });

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await axios.get("/api/pets/");
        const petData = res.data.find((pet: Pet) => pet.id === petId);
        if (petData) {
          setPet(petData);
          console.log(petData.name);
        } else {
          console.log("Pet with ID " + petId + " not found.");
        }
      } catch (error) {
        console.log("Error while fetching pet: ", error);
      }
    };

    fetchPet();
  }, [petId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  const onUpdate = async (petId: number) => {
    try {
      const updatedPetData = {
        name: pet.name,
        species: pet.species,
        age: Number(pet.age),
        color: pet.color,
        favoriteFood: pet.favoriteFood,
        favoriteActivity: pet.favoriteActivity,
      };

      await axios.patch("/api/pets", { petId, ...updatedPetData });
      toast.success("Pet's information successfully updated!");
      onUpdated(petId);
    } catch (error) {
      toast.error(
        "There was a problem while updating the pet's data. Please try again later."
      );
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="text-white">Update</AlertDialogTrigger>
        <AlertDialogContent className="bg-black">
          <AlertDialogHeader>
            <AlertDialogTitle className="my-6 text-center">
              You are about to update this pet&apos;s information.
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="mb-6">
                <form className="space-y-8 text-white">
                  <div className="flex space-x-6">
                    <div className="flex flex-col flex-1 space-y-2">
                      <label htmlFor="name" className="text-white/30">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={pet.name}
                        onChange={handleChange}
                        required
                        className="rounded-md bg-slate-800 p-6"
                      />
                    </div>
                    <div className="flex flex-col flex-1 space-y-2">
                      <label htmlFor="species" className="text-white/30">
                        Species
                      </label>
                      <input
                        type="text"
                        name="species"
                        value={pet.species}
                        onChange={handleChange}
                        required
                        className="rounded-md bg-slate-800 p-6"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6">
                    <div className="flex flex-col flex-1 space-y-2">
                      <label htmlFor="age" className="text-white/30">
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={pet.age}
                        onChange={handleChange}
                        required
                        className="rounded-md bg-slate-800 p-6"
                      />
                    </div>
                    <div className="flex flex-col flex-1 space-y-2">
                      <label htmlFor="color" className="text-white/30">
                        Color
                      </label>
                      <input
                        type="text"
                        name="color"
                        value={pet.color}
                        onChange={handleChange}
                        required
                        className="rounded-md bg-slate-800 p-6"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6">
                    <div className="flex flex-col flex-1 space-y-2">
                      <label htmlFor="Food" className="text-white/30">
                        Favorite Food
                      </label>
                      <input
                        type="text"
                        name="favoriteFood"
                        value={pet.favoriteFood}
                        onChange={handleChange}
                        required
                        className="rounded-md bg-slate-800 p-6"
                      />
                    </div>
                    <div className="flex flex-col flex-1 space-y-2">
                      <label htmlFor="Activity" className="text-white/30">
                        Favorite Activity
                      </label>
                      <input
                        type="text"
                        name="favoriteActivity"
                        value={pet.favoriteActivity}
                        onChange={handleChange}
                        required
                        className="rounded-md bg-slate-800 p-6"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-slate-900 hover:bg-slate-800 hover:text-white">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-400"
              onClick={() => onUpdate(petId)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
