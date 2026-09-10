import React from 'react'
import { useState } from "react";
import BookingModal from '../subpages/BookingModal';

const BookNow = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <>
      <button
        onClick={() => setOpen(true)}
        className="bg-yellow-500 px-6 py-3 rounded-full"
      >
        Book Now 💍
      </button>

      {open && <BookingModal onClose={() => setOpen(false)} />}
    </>
    </div>
  )
}

export default BookNow
