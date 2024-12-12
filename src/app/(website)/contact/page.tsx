import About from "@/components/Contact";


export default function () {
    return (

                <div className="p-8 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                            <i className="fas fa-envelope mr-2 text-blue-600"></i>
                            <span>Email: <a href="mailto:guzalexandre@gmail.com" className="text-blue-600 hover:underline">guzalexandre@gmail.com</a></span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-phone mr-2 text-green-600"></i>
                            <span>Phone: 058-4668982</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fab fa-whatsapp mr-2 text-green-500"></i>
                            <span>WhatsApp: <a href="https://wa.me/5511986796680" className="text-green-600 hover:underline">Clique aqui para me enviar uma mensagem</a></span>
                        </div>
                    </div>
                </div>
            );
        }
        
    