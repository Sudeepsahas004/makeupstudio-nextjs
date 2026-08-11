import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex flex-col gap-3">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/sisiros_hyd?igsh=dmVvbmF1bTJsMnVm"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          w-24
          h-16
          rounded-2xl
          bg-[#1A1A1A]
          border-2
          border-[#D4AF37]
          flex
          items-center
          justify-center
          text-[#D4AF37]
          shadow-[0_0_18px_rgba(212,175,55,.20)]
          hover:scale-105
          hover:bg-[#D4AF37]
          hover:text-black
          transition-all
          duration-300
        "
      >
        <FaInstagram size={28} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1968hs3crX/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="
          w-24
          h-16
          rounded-2xl
          bg-[#1A1A1A]
          border-2
          border-[#D4AF37]
          flex
          items-center
          justify-center
          text-[#D4AF37]
          shadow-[0_0_18px_rgba(212,175,55,.20)]
          hover:scale-105
          hover:bg-[#D4AF37]
          hover:text-black
          transition-all
          duration-300
        "
      >
        <FaFacebookF size={26} />
      </a>

    </div>
  );
}