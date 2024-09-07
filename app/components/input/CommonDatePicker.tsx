"use client";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { iCalender } from "../../../util/imageImports";
import Image from "next/image";

interface CommonDatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({
  value = null,
  onChange = () => {},
}) => {
  return (
    <div>
      <div className="block mb-2 font-medium text-white">Date</div>
      <div className="relative w-full">
        <DatePicker
          selected={value}
          onChange={onChange}
          placeholderText="Select Dates"
          dateFormat="MM/dd/yyyy"
          className="pr-4 pl-[37px] w-full py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none"
        />
        <div className="absolute left-3.5 top-[11px]">
          <Image src={iCalender} alt="Calendar icon" />
        </div>
      </div>
    </div>
  );
};

export default CommonDatePicker;
