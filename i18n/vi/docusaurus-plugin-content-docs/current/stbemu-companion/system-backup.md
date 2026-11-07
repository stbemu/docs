---
title: "Sao lưu hệ thống Android"
sidebar_label: "Sao lưu hệ thống Android"
---

# Sao lưu hệ thống Android {/* #android-system-backup */}

Mở **Settings > Backups > System backup**. Sau khi Android khôi phục thành công, sao lưu hệ thống Android có thể khôi phục tùy chọn Companion, thiết bị và tên đã lưu, quan hệ tin cậy đã xác minh và thông tin xác thực ghép nối còn hiệu lực. Tính năng này tách biệt với việc khôi phục [bản sao lưu JSON StbEmu](backups.md) vào thiết bị đã ghép nối.

## Bao gồm tệp lưu trữ cục bộ {/* #include-local-archives */}

**Include local archives** được bật mặc định. Nó đưa các bản sao lưu StbEmu đủ điều kiện và đã hoàn tất từ thư viện cục bộ vào các bản sao lưu hệ thống sau này. Tắt tùy chọn này giữ lại tệp cục bộ và cài đặt/thiết bị Companion, nhưng loại tệp lưu trữ khỏi các lần sao lưu sau. Nó không xóa nội dung đám mây cũ.

Trang hiển thị kích thước ước tính của phần đã chọn. Dùng **Refresh estimate** để đo lại, **Open Android settings** để kiểm tra cấu hình sao lưu Android, hoặc **Open archive library / manual export** để tự xuất tệp.

## Khả dụng và giới hạn {/* #availability-and-limits */}

Sao lưu hệ thống yêu cầu **Android 9 trở lên**, mặc dù bản thân Companion hỗ trợ Android 8. Sao lưu đám mây mã hóa còn cần tài khoản được hỗ trợ, khóa màn hình bảo mật và mã hóa phía máy khách Android. Android kiểm soát lịch sao lưu, điều kiện của phương thức truyền và khả năng khôi phục.

Hạn mức đám mây danh nghĩa là **25 MiB**; dung lượng thực tế có thể thấp hơn. Giới hạn **256 MiB** giữa các thiết bị là giới hạn của ứng dụng, không phải cam kết về khả năng truyền. Nếu toàn bộ phần đã chọn quá lớn, hãy loại tệp lưu trữ cục bộ hoặc xuất thủ công. Companion không âm thầm chỉ sao lưu một phần đã chọn.

Ước tính hay thông báo chuẩn bị cục bộ không xác nhận Android đã lưu bản sao lưu đám mây. Không có ước tính không có nghĩa bản sao lưu có kích thước bằng không. Nếu trang báo sao lưu bị tắt hoặc không được hỗ trợ, hãy xuất tệp lưu trữ thủ công thay vì cho rằng dữ liệu đã được bảo vệ.

## Sau khi Android khôi phục Companion {/* #after-android-restores-companion */}

Thiết bị được khôi phục phải được xác minh trước khi hiển thị là đã kết nối. Thông tin xác thực ghép nối còn được cấp quyền có thể kết nối lại mà không cần ghép nối mới, nhưng khôi phục không thể hoàn tác việc thu hồi quyền trong StbEmu. Các bản sao được khôi phục dùng chung quyền; thu hồi một quyền cũng ảnh hưởng đến các bản sao đó.

Thư viện liệt kê các tệp lưu trữ hoàn chỉnh thực sự đã được khôi phục. Chỉ siêu dữ liệu không thể tạo lại tệp bị thiếu. Thao tác chưa hoàn tất không tự động gửi lại; hãy kết nối lại và kiểm tra [kết quả thao tác](profiles.md#operation-results) khi có.
