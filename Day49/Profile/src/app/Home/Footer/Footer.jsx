export default function Footer() {
    return (
      <div className="bg-zinc-800 w-full " style={{ minHeight: "430px" }}>
        <div
          className="flex gap-10 text-white p-20 "
          style={{ maxWidth: "1255px", margin: "0px auto" }}
        >
          <div style={{ maxWidth: "300px" }}>
            <h4 className="text-2xl mb-4  font-bold">Stravel</h4>
            <p>
              Trải Qua 17 Năm Phát Triển Bền Vững, STravel Đã Ghi Dấu Ấn Của Mình
              Với Thông Điệp
            </p>
            <p>“Nâng Tầm Trải Nghiệm Từng Chuyến Đi”</p>
          </div>
          <div style={{ width: "300px" }} className="flex flex-col gap-3">
            <h4 className="text-2xl font-bold">Chi Nhánh Chính</h4>
            <ul className="list-none flex gap-2 flex-col">
              <li className="hover:text-orange-400 cursor-pointer">Hà Nội</li>
              <li className="hover:text-orange-400 cursor-pointer">Ấn Độ</li>
              <li className="hover:text-orange-400 cursor-pointer">Mỹ</li>
              <li className="hover:text-orange-400 cursor-pointer">Nhật Bản</li>
              <li className="hover:text-orange-400 cursor-pointer">Pháp</li>
            </ul>
          </div>
          <div style={{ width: "300px" }} className="flex flex-col gap-3">
            <h4 className="text-2xl font-bold">Chuyển Hướng</h4>
            <ul className="list-none flex gap-2 flex-col">
              <li className="hover:text-orange-400 cursor-pointer">Trang chủ</li>
              <li className="hover:text-orange-400 cursor-pointer">Đặt lịch</li>
              <li className="hover:text-orange-400 cursor-pointer">Ưu đãi</li>
              <li className="hover:text-orange-400 cursor-pointer">Dịch vụ</li>
              <li className="hover:text-orange-400 cursor-pointer">Thư viện</li>
              <li className="hover:text-orange-400 cursor-pointer">Đánh giá</li>
              <li className="hover:text-orange-400 cursor-pointer">Liên hệ</li>
            </ul>
          </div>
          <div style={{ width: "300px" }} className="flex flex-col gap-3">
            <h4 className="text-2xl font-bold">Tương tác</h4>
            <ul className="list-none flex gap-2 flex-col">
              <li className="hover:text-orange-400 cursor-pointer">Facebook</li>
              <li className="hover:text-orange-400 cursor-pointer">Instagram</li>
              <li className="hover:text-orange-400 cursor-pointer">Twitter</li>
              <li className="hover:text-orange-400 cursor-pointer">Linkedin</li>
            </ul>
          </div>
        </div>
        <hr style={{ maxWidth: "1255px", margin: "0px auto" }} />
        <p className="text-center text-white text-xl mt-4">
          Created By <span className="text-orange-400">STRAVEL</span> | All Rights
          Reserved!
        </p>
      </div>
    );
  }