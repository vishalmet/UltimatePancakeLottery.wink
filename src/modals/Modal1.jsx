import React from "react";
import TicketLeft from "../assets/ticket-r.png";
import { motion } from "framer-motion";
import Buttons from "./Buttons";

const Modal = ({ isOpen, toggleModal, switchToModal2, ticketCount, setTicketCount, totalCost }) => {
  const cakePerTicket = 3.03;

  const handleTicketChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setTicketCount(value);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-[#27262C] h-fit rounded-xl shadow-lg mt-2 w-[350px]">
          <div className="bg-[#3B384D] flex justify-between p-2 px-6 rounded-t-xl">
            <p className="font-bold">Buy Tickets</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#1FC7D4] cursor-pointer"
              onClick={toggleModal} // Close Modal1
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="p-4 px-6 space-y-3">
            <div className="flex justify-between items-center">
              <p className=" text-[#B3A9CD] font-semibold">Buy:</p>
              <p className=" flex items-center font-bold">
                Tickets{" "}
                <img className=" h-6 ml-2" src={TicketLeft} alt="Ticket Icon" />
              </p>
            </div>
            <div className="">
              <div className="bg-[#3B384D] rounded-xl h-fit p-3">
                <input
                  className=" w-full h-10 bg-transparent text-right font-bold focus:outline-none focus:ring-0"
                  placeholder="0"
                  type="text"
                  value={ticketCount}
                  onChange={handleTicketChange}
                />
                <p className="text-[#B3A9CD] text-right font-bold text-xs">
                  ~{totalCost} CAKE
                </p>
              </div>
              <p className=" text-right text-xs pt-1 text-[#B3A9CD]">
                CAKE balance: 5.2
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-[#3B384D] hover:bg-[#3B384D]/60 w-full text-[#1FC7D4] font-semibold rounded-full"
            >
              MAX
            </motion.button>
            <div className="text-[#B3A9CD] text-sm font-medium">
              <div className="flex justify-between items-center text-[#B3A9CD]">
                <p>Cost (CAKE)</p>
                <p>{totalCost} CAKE</p>
              </div>
              <div className="flex justify-between items-center text-[#B3A9CD]">
                <p className=" text-white flex items-center">0% <span className="text-[#B3A9CD] flex items-center pl-1">Bulk discount <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                </span></p>
                <p>~{totalCost} CAKE</p>
              </div>
            </div>
            <div className="border border-[#B3A9CD]/10"></div>
            <div className="flex justify-between items-center text-[#B3A9CD] font-semibold">
              <p className=" ">You pay</p>
              <p className="text-white">~{totalCost} CAKE</p>
            </div>
            <Buttons switchToModal2={switchToModal2} />
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
