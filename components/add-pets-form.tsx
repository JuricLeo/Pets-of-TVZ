"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface Pet {
  name: string;
  species: string;
  age: string;
  color: string;
  favoriteFood: string;
  favoriteActivity: string;
}

interface AddPetsFormProps {
  onPetAdded: (newPet: Pet) => void;
}

export default function AddPetsForm({ onPetAdded }: AddPetsFormProps) {
  const [formData, setFormData] = useState<Pet>({
    name: "",
    species: "",
    age: "",
    color: "",
    favoriteFood: "",
    favoriteActivity: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/pets", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Pet added successfully!");
      onPetAdded(response.data);
      setFormData({
        name: "",
        species: "",
        age: "",
        color: "",
        favoriteFood: "",
        favoriteActivity: "",
      });
    } catch (error) {
      toast.error(
        "There was a problem while adding the pet, please try again later."
      );
    }
  };

  return (
    <div className="mb-20">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex space-x-6">
          <div className="flex flex-col flex-1 space-y-2">
            <label htmlFor="name" className="text-white/30">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Oli"
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
              value={formData.species}
              onChange={handleChange}
              placeholder="Dog"
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
              value={formData.age}
              onChange={handleChange}
              placeholder="10"
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
              value={formData.color}
              onChange={handleChange}
              placeholder="White"
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
              value={formData.favoriteFood}
              onChange={handleChange}
              placeholder="Sausage"
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
              value={formData.favoriteActivity}
              onChange={handleChange}
              placeholder="Sleeping"
              required
              className="rounded-md bg-slate-800 p-6"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="flex ml-auto bg-sky-700 hover:bg-sky-600"
        >
          Add
        </Button>
      </form>
    </div>
  );
}
