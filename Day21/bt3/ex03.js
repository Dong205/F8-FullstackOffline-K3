var User = function (name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  };
  
  const data = [];
  
  // Đăng kí
  function handleRegister(name, password, email) {
    if (!name || !password || !email) {
      console.log("Thông tin điền chưa đầy đủ!");
      return;
    }
    var newUser = new User(name, password, email);
    newUser.role = "user";
    if (data.length === 0) {
      data.push(newUser);
    } else {
      for (var i = 0; i < data.length; i++) {
        if (data[i].email === email) {
          console.log("Email đã tồn tại!");
          return;
        } else if (data[i].name === name) {
          console.log("Tên đăng nhập đã tồn tại!");
          return;
        }
      }
      data.push(newUser);
    }
    return data;
  }
  
  // Đăng nhập
  function handleLogin(email, password) {
    var checkInfo = data.find((info) => {
      return info.email === email && info.password === password;
    });
    if (checkInfo) {
      return checkInfo;
    } else {
      console.log("Thông tin đăng nhập không hợp lệ");
      return;
    }
  }
  
  var dataRegister = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
  );
  var dataRegister = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
  );
  
  var dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
  console.log(dataRegister);
  console.log(dataLogin);