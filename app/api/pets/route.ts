import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const pet = await db.pet.findMany();

    return NextResponse.json(pet);
  } catch (error) {
    console.log("Pet GET Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { name, species, age, color, favoriteFood, favoriteActivity } =
      await req.json();

    const newPet = await db.pet.create({
      data: {
        name,
        species,
        age: parseInt(age),
        color,
        favoriteFood,
        favoriteActivity,
        ownerId: userId,
      },
    });

    return NextResponse.json(newPet);
  } catch (error) {
    console.error("Pet POST Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { userId } = auth();

    const { petId, ...updatedData } = await req.json();

    const pet = await db.pet.findUnique({
      where: {
        id: petId,
      },
    });

    if (!pet || pet.ownerId !== userId) {
      return new NextResponse("Pet not found or unauthorized", { status: 403 });
    }

    const updatedPet = await db.pet.update({
      where: {
        id: petId,
      },
      data: updatedData,
    });

    return NextResponse.json(updatedPet);
  } catch (error) {
    console.error("Pet PATCH Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { userId } = auth();
    const { petId } = await req.json();

    const pet = await db.pet.findUnique({
      where: {
        id: petId,
      },
    });

    if (!pet || pet.ownerId !== userId) {
      return new NextResponse("Pet not found or unauthorized", { status: 403 });
    }

    await db.pet.delete({
      where: {
        id: petId,
      },
    });

    return NextResponse.json(pet);
  } catch (error) {
    console.log("Pet DELETE Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
