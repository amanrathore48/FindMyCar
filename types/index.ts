import { MouseEventHandler } from "react";

export interface BtnProps {
  title: string;
  conStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchBrandProps {
  brand: string;
  setBrand?: (brand: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilteredProps {
  brand: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
