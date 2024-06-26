/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const PopUp = ({ orderPopUp, setOrderPopUp }) => {
  const [people, setPeople] = useState(1);
  const [phone, setPhone] = useState("");
  const [error,setError] = useState(false);
  const [message, setMessage] = useState()
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1350);
  const [loading, setLoading] = useState(false);

  const onPhoneChange = (e) => {
    const phoneNumber = e.target.value;
    const isInteger = Number.isInteger(Number(phoneNumber));
    if (!isInteger || phoneNumber.length > 12) {
      // Handle non-integer value
      return;
    }
    setPhone(phoneNumber);
  };
  const onPeopleChange = (e) => {
    setError(false)
    const persons = e.target.value;
    console.log(persons)
    const isInteger = Number.isInteger(Number(persons));
    console.log(isInteger,"isinteger")
    if(!isInteger || persons<1){
      setError(true)

    }
    setPeople(persons);
    setAmount(persons*1350)
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onDataSubmit = async () => {
    setError(false)
    console.log(error, "error") 
    console.log(people, phone, name);
    if (!name){
      setMessage("Name is requirred!!")
      return
    }
    if (people<1){
      setError(true)
      console.log(error, "error")
      setLoading(false)
      return
    }
    setLoading(true);
    const isValidInternationalNumber = /^\+254\d{9}$/.test(phone);
    const isValidLocalNumber = /^07\d{8}$/.test(phone);
    console.log(isValidInternationalNumber, isValidLocalNumber);

    if (!isValidInternationalNumber && !isValidLocalNumber) {
      // Handle invalid phone number
      setMessage("invalid phone number")
      setLoading(false)
      return;
    }
    console.log("Sending data");

    const single = people == 1 ? "person" : "people";

    const message = `Confirm booking for ${people} ${single} by ${name} with phone number ${phone} for Ksh:${amount}`;
    const subject = "Booking Confirmation";
    try {
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
      setLoading(false);
      setPhone("");
      setPeople(1);
      setName("");
      // console.log(data);
      if (response.status === 200) {
        alert("Booking Confirmed");
      } else {
        alert("Error Confirming Booking");
      }
    } catch (error) {
      alert("Error Confirming Booking");
    }finally{
      setLoading(false)
      setError(false)
      setOrderPopUp(false)
      setMessage(null)
    }

    setOrderPopUp(false);
  };
  const setNull = ()=>{
    setLoading(false);
      setPhone("");
      setPeople(1);
      setName("");
      setOrderPopUp(false);
  }

  return (
    <>
      {orderPopUp && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-[20%] left-1/2 -translate-x-1/2 bg-white p-4 rounded-md w-[300px]">
            <div className="flex items-center justify-between">
              <div>
                <h1>Book Now!!</h1>
                <p>For the Old school edition..</p>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={setNull}
                />
              </div>
            </div>
            <div>
              <p className="text-sm text-red-500">{message}</p>
              {error ? <p className="text-sm text-red-500">Number of people must be a whole number and not be less than 1</p>:<p></p>}
            </div>
            <div className="mt-4">
              
              
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                onChange={onNameChange}
                className="w-full rounded-full border border-gray-300 mb-4 px-2 py-1"
              />
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Phone"
                onChange={onPhoneChange}
                value={phone}
                className="w-full rounded-full border border-gray-300 mb-4 px-2 py-1"
              />
              <label>Number of people</label>
              <input
                type="number"
                placeholder="Number of People"
                min={1}
                value={people}
                onChange={onPeopleChange}
                className="w-full rounded-full border border-gray-300 mb-4 px-2 py-1"
              />
              <p className="mb-4">
                Pay {amount} to this till number:{" "}
                <span className="text-lg text-bold text-red-500">8731122</span>{" "}
              </p>
              {/* <input type="text" placeholder="Address" className="w-full rounded-full border border-gray-300 mb-4 px-2 py-1" /> */}
              <div className="flex items-center justify-center ">
                <button
                  disabled={loading}
                  onClick={onDataSubmit}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                >
                  {loading ? "Submitting" : "Book Now"}
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
