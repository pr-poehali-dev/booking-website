import { useState } from "react";
import { SearchData } from "@/types";

export const useSearch = () => {
  const [searchData, setSearchData] = useState<SearchData>({
    region: "",
    date: "",
    adults: "",
    children: "",
  });

  const updateSearchData = (field: keyof SearchData, value: string) => {
    setSearchData((prev) => ({ ...prev, [field]: value }));
  };

  return { searchData, updateSearchData };
};
