"use client";

import petCategories from "@/data/petCategories ";
import { decrementPetCount, incrementPetCount } from "@/lib/features/petCounter/petCounterSlice";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PetCounter = () => {
  const dispatch = useDispatch();
  const counts = useSelector((state: any) => state.petCounter);

  const handleIncrement = (petName: string) => {
    dispatch(incrementPetCount(petName));
  };

  const handleDecrement = (petName: string) => {
    dispatch(decrementPetCount(petName));
  };
  return (
    <>
      {petCategories.map((pet, i) => (
        <div key={i} className="w-full mb-2  flex items-start justify-between">
          <div className=" font-sofia-extralight pointer-events-none select-none">
            <p className="font-semibold">{pet.name}</p>
            <p className="text-sm opacity-85 overflow-hidden h-6">{pet.age || pet.weightRange}</p>
          </div>

          <div className="flex justify-between items-center ">
            {/* Decrement Button */}
            <Button
              onPress={() => handleDecrement(pet.name)}
              className="w-auto h-auto px-0 min-w-[auto] bg-transparent"
            >
              <MinusCircle
                className={cn(
                  counts[pet.name] === 0 ? "text-blue-300 cursor-not-allowed" : "cursor-pointer text-blue-500"
                )}
                strokeWidth={1.5}
              />
            </Button>
            {/* Current Count */}
            <span className="w-8 flex items-center justify-center pointer-events-none select-none">
              {counts[pet.name]}
            </span>
            {/* Increment Button */}
            <Button
              onPress={() => handleIncrement(pet.name)}
              className="w-auto h-auto px-0 min-w-[auto] bg-transparent"
            >
              <PlusCircle
                className={cn(
                  counts[pet.name] >= 20 ? "text-blue-300 cursor-not-allowed" : "cursor-pointer text-blue-500"
                )}
                strokeWidth={1.5}
              />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PetCounter;
