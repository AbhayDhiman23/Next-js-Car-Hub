"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { CarProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2"
                >
                  <Image
                    src="/hero.svg"
                    alt="Close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                {/* Main Car Image */}
                <div className="mt-4 relative w-full h-60">
                  <Image
                    src="/hero.png"
                    alt="Car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="mt-6 flex gap-3">
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg"
                    >
                      <Image
                        src="/hero.png"
                        alt={`Car model thumbnail ${index}`}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Car Details */}
                <div className="flex-1 flex flex-col gap-2 mt-6">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                      >
                        <h4 className="font-medium text-gray-600 capitalize">
                          {key}:
                        </h4>
                        <p className="text-gray-800">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
