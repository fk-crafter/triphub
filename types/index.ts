import { MouseEventHandler } from "react";

// ---------------

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

// ---------------

export interface DestinationPrices {
  flight: number;
  flightAndHotel: number;
  flightHotelActivity: number;
}

export interface Destination {
  name: string;
  imageUrl: string;
  description?: string;
  prices: {
    flight: number;
    flightAndHotel: number;
    flightHotelActivity: number;
  };
  coordinates?: [number, number];
}

export interface DestinationDetails {
  image: string;
  description: string;
}

export interface DestinationDetailsMap {
  [key: string]: DestinationDetails;
}
