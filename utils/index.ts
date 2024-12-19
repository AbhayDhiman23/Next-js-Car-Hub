import { manufacturers } from "@/constants";
import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    'x-rapidapi-key': '89a8075043msh6de83ad948e9df7p12bda8jsnf84d0326c5a3',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  // Construct query parameters dynamically
  const queryParams = new URLSearchParams({
    manufacturer: manufacturer || '',
    year: year?.toString() || '',
    model: model || '',
    limit: limit?.toString() || '10',
    fuel: fuel || '',
  }).toString();

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${queryParams}`,
    { headers }
  );

  if (!response.ok) {
    throw new Error(`Error fetching cars: ${response.statusText}`);
  }

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number): string => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0); // Return as a string with no decimals
};
