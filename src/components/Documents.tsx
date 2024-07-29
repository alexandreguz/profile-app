"use client";

import Link from "next/link";
import Form1 from "@/ui/Form1";
import Form2 from "@/ui/Form2";

import React, { useState } from "react";
import Modal from "@/ui/Modal";

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
        onClick={() => handleButtonClick(<div><Form1 /></div>)}
      >
        Letter of Attorney
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick(<Form2 />)}
      >
        Rental Appartment Contract
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick("Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quos. Aspernatur, deleniti. Sed, nam, illo dignissimos quo nisi iusto, necessitatibus quam minus sint voluptatibus enim praesentium corporis aut at asperiores?")}
      >
        Sell Apartment Contract
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick("Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quos. Aspernatur, deleniti. Sed, nam, illo dignissimos quo nisi iusto, necessitatibus quam minus sint voluptatibus enim praesentium corporis aut at asperiores?")}
      >
        Employee Work Contract
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick("Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quos. Aspernatur, deleniti. Sed, nam, illo dignissimos quo nisi iusto, necessitatibus quam minus sint voluptatibus enim praesentium corporis aut at asperiores?")}
      >
        Prenuptial
      </button>
      <button
        className="bg-slate-400 border"
        onClick={() => handleButtonClick("Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quos. Aspernatur, deleniti. Sed, nam, illo dignissimos quo nisi iusto, necessitatibus quam minus sint voluptatibus enim praesentium corporis aut at asperiores?")}
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