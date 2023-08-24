var errors = {
    name: {
      required: "Vui lòng nhập họ tên",
      min: "Họ tên phải từ 5 ký tự",
    },
    email: {
      email: "Định dạng email không hợp lệ",
      unique: "Email đã có người sử dụng",
      required: "Vui lòng nhập địa chỉ email",
    },
    password: {
      required: "Vui lòng nhập mật khẩu",
      same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
  };
  
  function getErrol(field) {
    if (errors[field]) {
      const firstValue = Object.keys(errors[field])[0];
      return errors[field][firstValue];
    } else {
      return "Không có field trong errors";
    }
  }
  
  console.log(getErrol("name")); // Vui lòng nhập họ tên
  console.log(getErrol("email")); // Định dạng email không hợp lệ
  console.log(getErrol("password")); // Vui lòng nhập mật khẩu