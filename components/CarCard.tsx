"use client";


import React, { useState } from "react"; // Import useState
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  // Calculate car rent using the utility function
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      {/* Car Title */}
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      {/* Car Rent */}
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      {/* Car Image */}
      <div className="relative w-full h-40 my-3">
        <Image
          src="/hero.png"
          alt={`${make} ${model}`}
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Car Details and Button */}
      <div className="relative flex w-full mt-2">
        {/* Details Section */}
        <div className="flex w-full justify-between text-gray-500 group-hover:invisible">
          {/* Transmission */}
          <div className="flex flex-1 justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering Wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          {/* Mileage */}
          <div className="flex flex-1 justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="Gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>

          {/* Drive Type */}
          <div className="flex flex-1 justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="Tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
        </div>

        {/* Button Section */}
        <div className="car-card__btn-container group-hover:visible">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue text-white"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={()=> setIsOpen(false)} car= {car}  />
    </div>
  );
};

export default CarCard;
