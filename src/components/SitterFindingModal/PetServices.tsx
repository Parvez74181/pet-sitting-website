"use client";

import services from "@/data/services";
import { setSelectedPetService } from "@/lib/features/sitterFindingModal/petServices/petServicesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const PetServices = ({ isError }: { isError: boolean }) => {
  const dispatch = useAppDispatch();
  const selectedPetService = useAppSelector((state: any) => state.petServices.selectedPetService);
  const handlePetServicesClick = (serviceName: string) => {
    dispatch(setSelectedPetService(serviceName));
  };

  return (
    <>
      <div className={cn("w-full flex flex-col gap-2 ", isError && !selectedPetService ? " *:bg-danger-50" : "")}>
        {services.map((service, i) => (
          <div
            key={i}
            className={cn(
              "w-full cursor-pointer border rounded-xl",
              selectedPetService === service.title && "border-blue-500 !bg-blue-50 !text-blue-500"
            )}
            onClick={() => handlePetServicesClick(service.title)}
          >
            <div className=" p-3 w-full  flex items-center justify-start gap-3">
              <span>{service.icon}</span>
              <div className="font-sofia-extralight ">
                <h6>{service.title}</h6>
                <p className="text-sm">{service.subDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PetServices;
