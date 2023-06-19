"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import Btn from "./Btn";
import { updateSearch } from "@/utils";
const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearch("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Btn
          title="Show More"
          btnType="button"
          conStyles="bg-custom-pink rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
