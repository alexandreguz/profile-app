"use client";

import Link from "next/link";

import React, { useState } from "react";
import Modal from "@/ui/Modal";
import ApartmentRentalContract from "@/forms/ApartmentRentalContract";
import AttorneyContract from "@/forms/AttorneyContract";
import ApartmentSellContract from "@/forms/ApartmentSellContract";
import EmployeeWorkContract from "@/forms/EmployeeWorkContract";
import PrenuptialContract from "@/forms/PrenuptialContract";
import WarningLetter from "@/forms/WarningLetter";

export default function Documents() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleButtonClick = (content: any) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick(<div><AttorneyContract/></div>)}
      >
        Letter of Attorney
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick(<ApartmentRentalContract  />)}
      >
        Rental Appartment Contract
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick(<ApartmentSellContract />)}
      >
        Sell Apartment Contract
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick(<EmployeeWorkContract />)}
      >
        Employee Work Contract
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick(<PrenuptialContract />)}
      >
        Prenuptial Contract
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick(<WarningLetter />)}
      >
        Warning Letter
      </button>

      {showModal && (
        <div className="">
          <div className="">
            <Modal isOpen={showModal} onClose={handleCloseModal}>
              <p>{modalContent}</p>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
}