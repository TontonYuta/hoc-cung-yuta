# Hướng Dẫn Quản Trị Hệ Thống

Tài liệu này hướng dẫn cách cập nhật nội dung cho ứng dụng (Buổi học, Khóa học, Tài liệu).

## 1. Cập Nhật Buổi Học Mới

Để thêm một buổi học mới vào một khóa học có sẵn:

1.  **Xác định file dữ liệu**:
    *   Truy cập thư mục `public/data/levels/`.
    *   Tìm file JSON tương ứng với khóa học (ví dụ: `math-grade-12-6plus.json` cho Toán 12 mức 6+).

2.  **Thêm bài học**:
    *   Mở file JSON.
    *   Tìm đến mảng `groups` (các chương/chuyên đề).
    *   Trong `groups`, tìm đến mảng `lessons` (các bài học).
    *   Thêm một đối tượng bài học mới vào mảng `lessons`.

    **Cấu trúc mẫu:**
    ```json
    {
      "id": "unique-lesson-id", // ID phải duy nhất trong file
      "title": "Tên buổi học mới",
      "youtubeId": "VIDEO_ID", // ID video YouTube (ví dụ: dQw4w9WgXcQ)
      "materials": "LINK_TAI_LIEU", // (Tùy chọn) Link Google Drive tài liệu
      "exercises": "LINK_BAI_TAP", // (Tùy chọn) Link Google Drive bài tập
      "documents": [] // (Tùy chọn) Danh sách tài liệu đính kèm khác
    }
    ```

## 2. Thêm Khóa Học Mới

Để tạo một khóa học hoàn toàn mới:

1.  **Khai báo khóa học**:
    *   Mở file `public/data/courses.json`.
    *   Thêm một đối tượng khóa học mới vào mảng chính.

    **Cấu trúc mẫu:**
    ```json
    {
      "id": "new-course-id", // ID khóa học (dùng để đặt tên file chi tiết)
      "title": "Tên Khóa Học Mới",
      "description": "Mô tả ngắn gọn về khóa học.",
      "thumbnail": "LINK_ANH_BIA",
      "category": "high_school", // Danh mục: primary, middle_school, high_school, university, informatics
      "instructor": "Tên Giảng Viên"
    }
    ```

2.  **Tạo nội dung chi tiết**:
    *   Tạo một file mới trong `public/data/levels/` với tên trùng với ID khóa học (ví dụ: `new-course-id.json`).
    *   Copy cấu trúc từ một file có sẵn (như `math-grade-12-6plus.json`) và sửa đổi nội dung.

    **Cấu trúc file chi tiết:**
    ```json
    {
      "courseId": "new-course-id",
      "title": "Tên Khóa Học Mới",
      "description": "Mô tả chi tiết...",
      "levels": [
        {
          "id": "chapter-1",
          "title": "Chương 1: Tên Chương",
          "groups": [
            {
              "title": "Chuyên đề 1",
              "lessons": [ ... ] // Danh sách bài học như phần 1
            }
          ]
        }
      ]
    }
    ```

## 3. Thêm Tài Liệu Mới

Để thêm tài liệu vào kho tài liệu:

1.  **Xác định file tài liệu**:
    *   Truy cập thư mục `public/data/`.
    *   Chọn file JSON tương ứng với cấp học:
        *   `documents-math-1.json` đến `documents-math-12.json`: Toán lớp 1-12.
        *   `documents-university.json`: Toán đại học & Tin học.
        *   `documents-exam-prep.json`: Luyện đề.

2.  **Thêm tài liệu**:
    *   Mở file JSON tương ứng.
    *   Thêm đối tượng tài liệu vào mảng.

    **Cấu trúc mẫu:**
    ```json
    {
      "id": 12345, // ID số nguyên, phải duy nhất
      "title": "Tên tài liệu",
      "category": "Danh mục hiển thị", // Ví dụ: Toán 12, Đại số, ...
      "type": "PDF", // Loại file: PDF, DOCX, ZIP...
      "size": "2.5 MB", // Dung lượng
      "link": "LINK_GOOGLE_DRIVE",
      "date": "DD/MM/YYYY" // Ngày cập nhật
    }
    ```

---
*Lưu ý: Sau khi sửa đổi các file JSON, nội dung trên web sẽ tự động cập nhật (nếu đang chạy dev server) hoặc cần build lại (nếu đã deploy).*
