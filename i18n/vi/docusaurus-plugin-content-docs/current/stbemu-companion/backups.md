---
title: "Sao lưu và khôi phục"
sidebar_label: "Sao lưu và khôi phục"
---

# Sao lưu và khôi phục {/* #backups-and-restore */}

Thư viện **Backups** của Companion lưu riêng tư các bản sao lưu JSON StbEmu đã hoàn tất trên điện thoại hoặc máy tính bảng. Các tệp đã lưu vẫn dùng được ngoại tuyến. Thư viện này tách biệt với [sao lưu hệ thống Android](system-backup.md), vốn bảo vệ trạng thái của chính Companion.

![Thư viện bản sao lưu và tạo bản sao lưu thiết bị](/img/companion/backup-library.png)

## Lưu và quản lý tệp {/* #save-and-manage-files */}

- **Create backup:** mở thao tác **Create backup** của thiết bị đã ghép nối đang kết nối, nhập **Backup name** rồi chọn **Create backup**. Đợi **Backup saved**.
- **Import backup:** mở **Backups** từ menu ứng dụng, chọn **Import backup** rồi chọn tệp JSON StbEmu. Nhập cục bộ, xuất hoặc chia sẻ không yêu cầu thiết bị StbEmu đang kết nối.
- **Export JSON:** chọn thao tác này trên mục bản sao lưu trong thư viện, rồi chọn nơi lưu bên ngoài.
- **Share JSON:** chọn thao tác này trên mục bản sao lưu trong thư viện để mở bảng chia sẻ Android. Mở bảng không xác nhận đã gửi đến ứng dụng được chọn.
- **Delete local backup:** xác nhận xóa bản sao cục bộ đó. Thiết bị StbEmu nguồn không thay đổi.

Giới hạn JSON là **16 MiB (16,777,216 byte)**. Tệp nhập được xác thực và giữ nguyên các byte gốc. Tệp nhập có nhãn **Source device unknown**; kiểm tra tính toàn vẹn không xác định ai tạo ra tệp. Xuất ra ngoài thất bại có thể để lại tệp đích chưa hoàn chỉnh, trong khi các bản sao lưu cục bộ hiện có vẫn được giữ lại.

:::note
Tệp sao lưu có thể chứa mật khẩu, dữ liệu cổng thông tin và mã định danh thiết bị. Xuất và chia sẻ giữ nguyên các giá trị này; hãy chọn nơi lưu hoặc người nhận cho phù hợp.
:::

## Khôi phục bản sao lưu {/* #restore-a-backup */}

1. Chọn **Restore backup** từ mục trong thư viện hoặc trang thao tác của thiết bị.
2. Chọn **Destination device**, **Backup to restore** và **Restore mode** được hỗ trợ.
3. Chọn **Review restore**. Kiểm tra hồ sơ được thêm, ghi đè và xóa; **Changed settings**; ánh xạ điều khiển; siêu dữ liệu cục bộ bị loại trừ; và các trường không tương thích hoặc bị khóa.
4. Đánh dấu hộp xác nhận, rồi chọn **Apply restore**.

![Màn hình khôi phục hiển thị hành vi Merge](/img/companion/restore.png)

**Merge** ghi đè hồ sơ có UUID trùng khớp, thêm hồ sơ mới và giữ hồ sơ chỉ có ở đích. **Replace all** còn xóa hồ sơ đích không có trong bản sao lưu. Việc đối chiếu dựa trên mã định danh, không phải tên hồ sơ. Cả hai chế độ khôi phục cài đặt ứng dụng có thể chuyển và ánh xạ điều khiển. Siêu dữ liệu cục bộ của đích, như ID hàng cục bộ, phiên bản ứng dụng và thư mục cập nhật, bị loại trừ.

:::warning
Xem xét mọi mục ghi đè và xóa trước khi áp dụng. **Replace all** thay thế cả tập hồ sơ; đây không phải cách chỉ thêm các hồ sơ được chọn. Để sao chép có chọn lọc, dùng [chuyển hồ sơ](transferring-profiles.md).
:::

## Kết quả và áp dụng cài đặt đã lưu {/* #results-and-applying-saved-settings */}

Bản xem trước hết hạn cần **Start a new attempt** và xem xét mới. Nếu kết quả không chắc chắn, kiểm tra [kết quả thao tác](profiles.md#operation-results) trước khi khôi phục lại. Việc truy xuất kết quả có thể hỏi thiết bị đích ngay cả khi bản sao lưu gốc không còn khả dụng.

Cài đặt đã lưu và tác động khi chạy là hai việc riêng. Nếu thay đổi, cài đặt điều khiển ảo có hiệu lực trong lần tạm dừng/tiếp tục bình thường kế tiếp của StbEmu, kích thước bộ nhớ đệm cần khởi động lại tiến trình StbEmu và ngôn ngữ có thể tạo lại activity của ứng dụng. Cờ tương thích UPnP không bật/tắt trạng thái UPnP hiện tại, ngay cả sau khi khởi động lại. **Check result** không thử lại các cập nhật khi chạy này.
