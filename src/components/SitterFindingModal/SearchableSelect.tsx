"use client";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { MapPin } from "lucide-react";
import { fetchDistrictData } from "@/app/actions";
import districtData from "../../../public/district-data.json";

const SearchableSelect = () => {
  const [searchValue, setSearchValue] = useState("");
  const [location, setLocation] = useState<string>("");
  // const [districtData, setDistrictData] = useState<{ label: string }[]>([]); // Updated to accept objects with a label property

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, ok } = await fetchDistrictData();
  //     if (!ok) {
  //       console.log("Failed to fetch district data");
  //       return;
  //     }

  //     setDistrictData(data);
  //   };

  //   fetchData();
  // }, []);

  const handleLocationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value.trim().toLowerCase());
  };

  return (
    <>
      <h6 className=" text-lg font-bold">Location</h6>
      <Autocomplete
        isVirtualized
        isRequired
        value={location}
        onChange={handleLocationInputChange}
        variant="bordered"
        className="w-full"
        // label="Location"
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
      >
        {(district) => <AutocompleteItem key={district.label}>{district.label}</AutocompleteItem>}
      </Autocomplete>
    </>
  );
};

export default SearchableSelect;
