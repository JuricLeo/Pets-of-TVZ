"use client";

import { DataTable } from "./data-table";
import { Pet, columns } from "@/app/(routes)/(home)/columns";
import { useEffect, useState } from "react";
import axios from "axios";
import AddPetsForm from "./add-pets-form";

const Pets = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axios.get("/api/pets");
        setPets(res.data);
      } catch (error) {
        console.log("Error while fetching pets: ", error);
      }
    };

    fetchPets();
  }, []);

  const handleAddPet = (newPet: Pet) => {
    setPets((prevPets) => [...prevPets, newPet]);
  };
  
  const handleDeletePet = (deletedPetId: number) => {
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== deletedPetId));
  };

  const handleUpdatePet = async () => {
    try {
      const res = await axios.get("/api/pets");
      setPets(res.data);
    } catch (error) {
      console.log("Error while fetching updated pets: ", error);
    }
  };
  

  return (
    <div className="mb-40">
      {/* @ts-ignore */}
      <AddPetsForm onPetAdded={handleAddPet} />
      <DataTable columns={columns(handleUpdatePet, handleDeletePet)} data={pets} />
    </div>
  );
};

export default Pets;
