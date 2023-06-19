"use client";

import { useState } from "react";
import Searchbrand from "./SearchBrand";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBtn = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnify"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (brand === "" && model === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(model.toLowerCase(), brand.toLowerCase());
  };
  const updateSearchParams = (model: string, brand: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (brand) {
      searchParams.set("brand", brand);
    } else {
      searchParams.delete("brand");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchnar__item max-sm:flex">
        <Searchbrand brand={brand} setBrand={setBrand} />
        <SearchBtn otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="model"
          className="absolute w-[20px] h=[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model Name"
          className="searchbar__input"
        />
        <SearchBtn otherClasses="sm:hidden" />
      </div>
      <SearchBtn otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
