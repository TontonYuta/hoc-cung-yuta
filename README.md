📱 Mobile App Project - Tontonyuta Ecosystem
Chào mừng bạn đến với dự án ứng dụng di động của Trần Huy Hoàng (TontonYuta). Đây là bộ khung chuẩn giúp đóng gói các ứng dụng từ nền tảng Web (React/Vite) sang ứng dụng Android chuyên nghiệp.

🛠️ Yêu cầu hệ thống (Prerequisites)
Để đảm bảo quá trình build không gặp lỗi, máy tính của bạn cần được cấu hình đúng các thông số sau:

Java Development Kit: Microsoft OpenJDK 21.

Biến môi trường: JAVA_HOME trỏ đến thư mục cài đặt JDK 21.

Android SDK: Đã được cài đặt thông qua Android Studio.

Node.js: Phiên bản LTS mới nhất.

🚀 Quy trình đóng gói APK (Build Guide)
Thực hiện theo các bước sau trong Terminal của VS Code để xuất xưởng file cài đặt:

1. Chuẩn bị tài nguyên Web
Đảm bảo mã nguồn web được biên dịch mới nhất trước khi đưa vào Android:

PowerShell
# Xóa bản build cũ để tránh xung đột
Remove-Item -Recurse -Force dist

# Build bản web mới nhất
npm run build
2. Đồng bộ với Capacitor
Chuyển đổi dữ liệu từ thư mục dist vào bộ khung Android:

PowerShell
# Copy code web vào thư mục android
npx cap copy

# Cập nhật các plugin hệ thống
npx cap update
3. Xuất file APK (Debug)
Sử dụng Gradle để tạo file cài đặt nhanh mà không cần mật khẩu ký số (Keystore):

PowerShell
# Di chuyển vào thư mục hệ thống
cd android

# Chạy lệnh đóng gói APK
.\gradlew assembleDebug

# Quay lại thư mục gốc sau khi hoàn tất
cd ..
📂 Vị trí file sản phẩm
Sau khi hoàn tất, file cài đặt của bạn sẽ luôn nằm tại:
android\app\build\outputs\apk\debug\app-debug.apk

📝 Cấu hình dự án (Config)
Thông tin định danh ứng dụng được quản lý trong file capacitor.config.ts:

App ID: com.tontonyuta.math (hoặc định danh riêng cho từng app).

App Name: Tên hiển thị trên điện thoại (ví dụ: Toán Tontons Yuta).

Web Directory: Phải luôn để là dist.

⚠️ Giải quyết sự cố thường gặp
Lỗi Java Version: Chạy java -version để đảm bảo đang ở bản 21.

Lỗi trắng màn hình: Kiểm tra đường dẫn base: './' trong file vite.config.js.

Lỗi quyền truy cập: Đóng hẳn VS Code và mở lại với quyền Administrator nếu cần.

© 2026 Lớp Toán Tontonyuta - Học toán cùng Yuta.