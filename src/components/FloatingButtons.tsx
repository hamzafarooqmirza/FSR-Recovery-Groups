export function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col items-center gap-2.5">
      <a
        href="tel:+447888502989"
        aria-label="Call FSR Recovery Groups"
        className="float-help flex h-12 w-12 items-center justify-center rounded-full bg-red shadow-xl transition hover:bg-red-dark sm:h-14 sm:w-14"
      >
        <i className="fa-solid fa-phone text-lg text-white sm:text-xl"></i>
      </a>
      <a
        href="https://wa.me/447888502989"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp FSR Recovery Groups"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp shadow-xl transition hover:bg-green-600 sm:h-14 sm:w-14"
      >
        <i className="fa-brands fa-whatsapp text-xl text-white sm:text-2xl"></i>
      </a>
    </div>
  );
}
