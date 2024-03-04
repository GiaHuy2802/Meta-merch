document.addEventListener("DOMContentLoaded", function () {
    var selectAllBtn = document.getElementById("selectAll");
    var deleteSelectedBtn = document.getElementById("deleteSelected");

    var isAllChecked = false; // Biến để kiểm tra trạng thái chọn tất cả

    selectAllBtn.addEventListener("click", function () {
        // Select all checkboxes with the name "sport"
        var checkboxes = document.querySelectorAll('input[name="sport"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = !isAllChecked; // Đảo ngược trạng thái chọn
        });

        isAllChecked = !isAllChecked; // Đảo ngược trạng thái chọn tất cả
    });

    deleteSelectedBtn.addEventListener("click", function () {
        // Your delete logic here
        alert("Delete selected items");
    });
});