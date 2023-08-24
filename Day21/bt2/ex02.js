var Customers = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  };
  
  function createCustomers(customers) {
    var checkValid = customers.every(function (customer) {
      if (
        customer.name &&
        typeof customer.name === "string" &&
        customer.age > 0 &&
        typeof customer.age === "number" &&
        customer.address &&
        typeof customer.address === "string"
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (checkValid) {
      var sortCustomers = [...customers].sort((a, b) => {
        if (a.age < b.age) {
          return -1;
        } else {
          return 1;
        }
      });
      var result = sortCustomers.map((customer) => {
        var arrayName = customer.name.split(" ");
        var shortName = `${arrayName[0]} ${arrayName[arrayName.length - 1]}`;
        return { ...customer, shortName };
      });
  
      return result;
    } else {
      console.log("Dữ liệu không hợp lệ");
    }
  }
  
  const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];
  
  const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.
  console.log(result);