// 'use client'

// import { useState } from 'react';
// import Modal from '@/app/ui/ModalForms'; // Vamos criar este componente em seguida

// export default function ModalForms() {
//   const [activeModal, setActiveModal] = useState(null);

//   const openModal = (formId:any) => {
//     setActiveModal(formId);
//   };

//   const closeModal = () => {
//     setActiveModal(null);
//   };

//   return (
//     <div>
//       <button onClick={() => openModal('form1')}>Botão A</button>
//       <button onClick={() => openModal('form2')}>Botão B</button>
//       <button onClick={() => openModal('form3')}>Botão C</button>

//       <Modal isOpen={activeModal === 'form1'} onClose={closeModal}>
//         <h2>Formulário 1</h2>
//         {/* Conteúdo do formulário 1 */}
//       </Modal>

//       <Modal isOpen={activeModal === 'form2'} onClose={closeModal}>
//         <h2>Formulário 2</h2>
//         {/* Conteúdo do formulário 2 */}
//       </Modal>

//       <Modal isOpen={activeModal === 'form3'} onClose={closeModal}>
//         <h2>Formulário 3</h2>
//         {/* Conteúdo do formulário 3 */}
//       </Modal>
//     </div>
//   );
// }