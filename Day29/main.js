const container = document.querySelector('.container')
const lessons = [
  {
    module: 'Nhập môn lập trình web',
    list: [
      'Giới thiệu khoá học HTML - CSS',
      'Nhập môn lập trình web - Phần 1',
      'Nhập môn lập trình web - Phần 2',
      'Công cụ - Phần mềm cần chuẩn bị'
    ]
  }, 
  {
    module: 'Ngôn ngữ HTML',
    list: [
      'HTML cơ bản - Phần 1',
      'HTML cơ bản - Phần 2'
    ]
  },
  {
    module: 'Ngôn ngữ CSS',
    list: [
      'Giới thiệu ngôn ngữ CSS - Cách viết CSS',
      'Cấu trúc CSS - Bộ chọn (Selector) trong CSS - Phần 1',
      'Bộ chọn CSS (Tiếp theo) - Các thuộc tính định dạng văn bản',
      'Chồng chéo CSS và thứ tự ưu tiên trong CSS',
      'Thuộc tính Background',
      'Thuộc tính Border',
      'Thuộc tính Width - Height'
    ]
  },
  {
    module: 'Bộ chọn CSS (Tiếp theo) - Các thuộc tính định dạng văn bản',
    list: [
       'Chồng chéo CSS và thứ tự ưu tiên trong CSS',
       'Thuộc tính Background',
       'Thuộc tính Border',
       'Thuộc tính Width - Height',
       'Thuộc tính text-align',
       'Thuộc tính overflow',
       'Thuộc tính opacity',
       'Thuộc tính Padding - Margin',
       'Reset CSS - Tại sao Reset CSS lại quan trọng?',
       'Thuộc tính Float trong CSS',
       'Thuộc tính Clear - Kỹ thuật clearfix',
       'Thuộc tính Display',
       'Thuộc tính Position trong CSS',
       'Định dạng danh sách (syllabus Style) trong CSS',
       'Xử lý tự động thu hẹp lề khi sử dụng Margin',
       'Hướng dẫn kỹ thuật CSS Sprites chi tiết',
       'Nguyên tắc kế thừa class - id trong CSS',
       'Hướng dẫn sử dụng BEM để đặt tên class',

    ]
  },
]

const result = lessons.map((lesson,index) => (
  ` <div class="list-item active" draggable="true">
      <span>Module ${index+1}</span>
      ${lesson.module}
    </div>
    ${lesson.list.map((item,index) => (
      `<div class="list-item" draggable="true">
      <span>Bài ${index + 1}</span>
        ${item}
      </div>`
    )).join("")}`
)).join("")

container.innerHTML = result
const listItem = document.querySelectorAll('.list-item')

listItem.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});
container.addEventListener('dragover',function(e) {
    const itemDrag = document.querySelector(".list-item.dragging");
    const itemsNotDrag = document.querySelectorAll(".list-item:not(.dragging)");
    const node = Array.from(itemsNotDrag).find((item) => {
      return e.pageY <= item.offsetTop + itemDrag.offsetHeight/2 + itemDrag.offsetHeight/4;
    });
    container.insertBefore(itemDrag, node);
})

container.addEventListener("dragend", function () {
  const listItem = document.querySelectorAll(".list-item:not(.active) span");
  const listModule = document.querySelectorAll(".list-item.active span");
  listItem.forEach((item, index) => {
    item.innerHTML = `Bài ${++index}:`;
  });
  listModule.forEach((module, index) => {
    module.innerHTML = `Module ${++index}:`;
  });
});