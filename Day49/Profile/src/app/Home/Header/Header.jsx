import Link from "next/link";
import "./header.scss";
import ThemeBtn from "@/app/components/ThemeBtn";

export default function Header() {
  return (
    <div className="fixed h-max inset-0 text-white header flex justify-around p-4 align-baseline ">
      <h1 className="text-2xl cursor-pointer ">
        <span className="text-orange-400 font-bold">S</span>
        <span className="font-bold">TRAVEL</span>
      </h1>
      <nav>
        <div className="text-xl flex gap-5">
          <Link href="/">
            <span className="hover:text-orange-300 transition-colors cursor-pointer">
              Trang chủ
            </span>
          </Link>
          <Link href="#book">
            <span className="hover:text-orange-300 transition-colors cursor-pointer">
              Đặt lịch
            </span>
          </Link>
          <Link href="#endow">
            <span className="hover:text-orange-300 transition-colors cursor-pointer">
              Ưu đãi
            </span>
          </Link>
          <Link href="#service">
            <span className="hover:text-orange-300 transition-colors cursor-pointer">
              Dịch vụ
            </span>
          </Link>
          <Link href="#library">
            <span className="hover:text-orange-300 transition-colors cursor-pointer">
              Thư viện
            </span>
          </Link>
          <span className="hover:text-orange-300 transition-colors cursor-pointer">
            Đánh giá
          </span>
          <span className="hover:text-orange-300 transition-colors cursor-pointer">
            Liên hệ
          </span>
        </div>
      </nav>
      <div className="flex gap-3">
        <ThemeBtn />

        <button className="hover:text-orange-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <button className="hover:text-orange-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}