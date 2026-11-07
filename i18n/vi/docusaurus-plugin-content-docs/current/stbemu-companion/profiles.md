---
title: "Quản lý hồ sơ"
sidebar_label: "Hồ sơ"
---

# Quản lý hồ sơ {/* #managing-profiles */}

Mở thiết bị đang kết nối và chọn **Profiles**. Danh sách hiển thị tên hồ sơ, mã định danh (UUID) và địa chỉ cổng thông tin có sẵn. Chọn hồ sơ để xem cài đặt. Dùng **Load more** cho các trang tiếp theo và **Refresh** để lấy dữ liệu hiện tại. Các thao tác phụ thuộc vào quyền thiết bị hỗ trợ.

## Tạo, sửa và xóa {/* #create-edit-and-delete */}

- Chọn **Create profile** từ danh sách. Các trường tạo được hỗ trợ gồm **Name** và **Portal URL**. Trường không chỉnh sửa dùng giá trị mặc định của StbEmu.
- Mở hồ sơ và chọn **Edit profile** để thay đổi các trường có thể chỉnh sửa được hỗ trợ. Chỉ các trường đã sửa thay đổi; cài đặt bổ sung mà thiết bị lưu giữ được bảo toàn.
- Chọn **Delete profile** để chuẩn bị xóa. Xem xét mọi thay đổi hồ sơ đang hoạt động hoặc hồ sơ thay thế trước khi xác nhận.

Chọn **Review changes**, xem bản xem trước và cảnh báo, rồi chọn **Confirm changes** hoặc **Confirm deletion**. Thao tác đầu tiên không lập tức lưu hay xóa hồ sơ. Không thể xác nhận thay đổi không tương thích. Nếu hồ sơ hoặc các trường khả dụng thay đổi trong lúc sửa, hãy làm mới và xem xét lại.

Để biết ý nghĩa các trường hồ sơ StbEmu, xem [Hồ sơ STB](../settings/profiles.md).

## Sao chép hồ sơ {/* #copy-a-profile */}

Mở hồ sơ và chọn **Copy profile**. Chọn **This device** để sao chép trên cùng thiết bị, rồi xem xét và xác nhận thay đổi. Bản sao có danh tính mới; đừng chỉ dựa vào tên để nhận diện. **Edit copied profile**, nếu có sau khi thành công, mở bản sao được trả về thay vì bản gốc.

Chọn thiết bị đã ghép nối khác đủ điều kiện sẽ mở [quy trình trong hướng dẫn chuyển](transferring-profiles.md) với hồ sơ đó được chọn sẵn.

## Kết quả thao tác {/* #operation-results */}

Nếu kết nối thất bại hoặc kết quả không chắc chắn, mở **Recent operation results** của thiết bị và dùng **Check result** trước khi bắt đầu thay đổi khác. Kiểm tra kết quả cần kết nối được cấp quyền và truy vấn thao tác ban đầu; nó không gửi lại thay đổi. Điều này cũng áp dụng cho [chuyển dữ liệu](transferring-profiles.md) và [khôi phục bản sao lưu](backups.md).

Bản xem trước hết hạn cần được xem xét lại một cách rõ ràng. Hủy có thể xảy ra đồng thời với lưu, nên hãy đọc kết quả cuối thay vì cho rằng **Cancel operation** đã hoàn tác thay đổi. **Changes saved on the device** xác nhận dữ liệu đã lưu; làm mới trạng thái khi chạy vẫn có thể đang chờ. Kiểm tra kết quả không thử lại việc làm mới trạng thái khi chạy, và hồ sơ bản sao đã xóa không bao giờ được tạo lại bằng cách kiểm tra lịch sử.
