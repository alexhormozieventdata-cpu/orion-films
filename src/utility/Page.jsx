import { useState } from "react";
import BookingModal from "../subpages/BookingModal";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-yellow-500 px-6 py-3 rounded-full"
      >
        Book Now 💍
      </button>

      {open && <BookingModal onClose={() => setOpen(false)} />}
    </>
  );
}