"use client";
import { useState } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { MapPin } from "lucide-react";
import districtData from "../../../public/district-data.json";
import { useAppDispatch } from "@/lib/hooks";
import { setLocation } from "@/lib/features/sitterFindingModal/location/locationSlice";

const SearchableSelect = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleLocationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();
    setValue(value);
  };

  const handleItemSelect = (key: React.Key | null) => {
    dispatch(setLocation(key as string));
  };
  return (
    <>
      <h6 className=" text-lg font-bold">Location</h6>
      <Autocomplete
        isVirtualized
        isRequired
        value={value}
        onChange={handleLocationInputChange}
        variant="bordered"
        className="w-full"
        aria-label="location"
        labelPlacement="outside"
        startContent={<MapPin className="opacity-80" />}
        placeholder="Enter your location"
        errorMessage="Location is required"
        defaultItems={districtData} // The items are now objects with a 'label' property
        scrollShadowProps={{
          isEnabled: false,
        }}
        classNames={{
          base: "hey",
        }}
        onSelectionChange={handleItemSelect}
      >
        {(district) => <AutocompleteItem key={district.label}>{district.label}</AutocompleteItem>}
      </Autocomplete>
    </>
  );
};

export default SearchableSelect;
