import Resume from "../../assets/resume.pdf";

function Modal() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="group relative">
        <a
          href={Resume}
          download="Ahsanul_Haque_Resume.pdf"
          className="px-5 py-3 bg-[#E54877] dark:bg-gray-800 border border-orange-500 text-orange-500 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          Download CV
        </a>
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-800 text-white text-sm rounded px-3 py-1 whitespace-nowrap">
          Ahsanul Haque's Resume
        </div>
      </div>
    </div>
  );
}

export default Modal;
