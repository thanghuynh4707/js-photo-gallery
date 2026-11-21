/* Hàm chạy khi di chuột vào một ảnh nhỏ */
function upDate(previewPic) {
    // 1. Lấy phần tử khung hiển thị lớn có id="image"
    let imageDiv = document.getElementById("image");

    // 2. Thay đổi chữ hiển thị thành nội dung thuộc tính alt của ảnh đang trỏ chuột
    imageDiv.innerHTML = previewPic.alt;

    // 3. Thay đổi ảnh nền thành đường dẫn src của ảnh đang trỏ chuột
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Hàm chạy khi di chuột rời khỏi ảnh nhỏ */
function unDo() {
    // 1. Lấy phần tử khung hiển thị lớn có id="image"
    let imageDiv = document.getElementById("image");

    // 2. Đưa ảnh nền trở về trạng thái rỗng ban đầu
    imageDiv.style.backgroundImage = "url('')";

    // 3. Đưa đoạn văn bản trở về nguyên gốc theo yêu cầu đề bài
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
