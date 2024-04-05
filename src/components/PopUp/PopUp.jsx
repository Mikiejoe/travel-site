/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const PopUp = ({ orderPopUp, setOrderPopUp }) => {
  const [people, setPeople] = useState(1);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(350);

  const onPeopleChange = (e) => {
    console.log(people);
    if (e.target.value < 1) return setPeople(1);
    setPeople(e.target.value);
    setAmount(e.target.value * 350);
  };
  const onPhoneChange = (e) => {
    const phoneNumber = e.target.value;
    const isInteger = Number.isInteger(Number(phoneNumber));
    if (!isInteger || phoneNumber.length > 12) {
      // Handle non-integer value
      return;
    }
    setPhone(phoneNumber);
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onDataSubmit = async () => {
    console.log(people, phone, name);
    const isValidInternationalNumber = /^\+254\d{9}$/.test(phone);
    const isValidLocalNumber = /^07\d{8}$/.test(phone);
    console.log(isValidInternationalNumber, isValidLocalNumber);

    if (!isValidInternationalNumber && !isValidLocalNumber) {
      // Handle invalid phone number
      return;
    }
    console.log("Sending data");

    const single = people == 1 ? "person" : "people";

    const message = `Confirm booking for ${people} ${single} by ${name} with phone number ${phone} for ${amount}`;
    const subject = "Booking Confirmation";
    const response = await fetch(
      "https://emailsend-tkzx.onrender.com/send-email/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          subject,
        }),
      }
    );
    console.log(response);
    // console.log(data);
    if (response.status === 200) {
      alert("Booking Confirmed");
    } else {
      alert("Error Confirming Booking");
    }
    setOrderPopUp(false);
  };

  return (
    <>
      {orderPopUp && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/4 left-1/2 -translate-x-1/2 bg-white p-4 rounded-md w-[300px]">
            <div className="flex items-center justify-between">
              <div>
                <h1>Book Now!!</h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopUp(false)}
                />
              </div>
            </div>
            <div className="mt-4">
              <input
                type="number"
                placeholder="Number of People"
                value={people}
                onChange={onPeopleChange}
                min={1}
                className="w-full rounded-full border border-gray-300 mb-4 px-2 py-1"
              />
              <input
                type="tel"
                placeholder="Phone"
                onChange={onPhoneChange}
                value={phone}
                className="w-full rounded-full border border-gray-300 mb-4 px-2 py-1"
              />
              <input
                type="text"
                placeholder="Name"
                onChange={onNameChange}
                className="w-full rounded-full border border-gray-300 mb-4 px-2 py-1"
              />
              <p className="mb-4">Pay {amount} to this till number: <span className="text-lg text-bold text-red-500">9982177</span> </p>
              {/* <input type="text" placeholder="Address" className="w-full rounded-full border border-gray-300 mb-4 px-2 py-1" /> */}
              <div className="flex items-center justify-center ">
                <button
                  onClick={onDataSubmit}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
