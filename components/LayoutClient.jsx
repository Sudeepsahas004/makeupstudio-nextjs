"use client";

import { useState } from "react";
import EnquiryButton from "./EnquiryButton";
import EnquiryModal from "./EnquiryModal";

export default function LayoutClient({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children}

      <EnquiryButton onClick={() => setOpen(true)} />

      <EnquiryModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}