---
title: "Kết nối thiết bị"
sidebar_label: "Kết nối thiết bị"
---

# Kết nối thiết bị {/* #connecting-devices */}

## Tìm StbEmu {/* #discover-stbemu */}

1. Kết nối điện thoại hoặc máy tính bảng và thiết bị StbEmu với cùng một mạng cục bộ có thể truy cập lẫn nhau.
2. Trong StbEmu, mở **Settings > Companion** và bật dịch vụ. Xem [cài đặt Companion của StbEmu](../settings/companion.md).
3. Mở trang **Devices** của Companion. Các thiết bị đã xác minh xuất hiện dưới dạng thẻ đã lưu. Mở thẻ của bản cài đặt StbEmu bạn muốn quản lý.

![Trang thiết bị đang tìm kiếm trên mạng cục bộ](/img/companion/devices-empty.png)

Nếu không thấy thiết bị nào, hãy kiểm tra rằng quyền truy cập Companion đã được bật trong StbEmu và Android cho phép truy cập mạng cục bộ. Chọn **Retry** hoặc kết nối thủ công.

### Thêm địa chỉ thủ công {/* #add-an-address-manually */}

Chọn **Add by IP address**. Nhập **IPv4 or IPv6 address** và cổng hiển thị trong StbEmu, rồi chọn **Connect**. Nếu để trống cổng, ứng dụng dùng **10000**. Nhập địa chỉ IP, không phải URL trang web hoặc tên máy chủ. Nhập thủ công không bỏ qua bước xác minh hay ghép nối. Thiết bị có thông tin ghép nối đã lưu còn hiệu lực có thể kết nối lại mà không cần nhập mã mới.

![Thiết bị đã lưu đang chờ ghép nối](/img/companion/devices-saved.png)

## Ghép nối thiết bị {/* #pair-a-device */}

1. Trong **Settings > Companion** của StbEmu, bắt đầu ghép nối để hiển thị mã.
2. Trên trang thao tác thiết bị trong Companion, nhập mã vào **Eight-digit pairing code**.
3. Chọn **Pair device** và đợi **Connected**.

![Nhập mã ghép nối](/img/companion/pairing.png)

Nếu mã hết hạn, hãy hiển thị mã mới trong StbEmu. Nếu bị giới hạn tần suất thử, hãy đợi trước khi thử lại. Thông tin ghép nối được lưu cho các kết nối sau miễn là StbEmu vẫn cho phép. Thu hồi quyền truy cập trong StbEmu cũng ngăn việc sử dụng quyền đã lưu.

## Kết nối lại, đổi tên hoặc xóa {/* #reconnect-rename-or-remove */}

**Disconnect** đóng kết nối và giữ lại thiết bị đã lưu. Để kết nối lại, mở thẻ của thiết bị và chọn **Connect**. Thay đổi mạng có thể làm gián đoạn kết nối; hãy kết nối lại sau khi mạng cục bộ hoạt động trở lại.

Dùng nút bút chì (**Rename device**) để đặt tên cục bộ. **Use app name** khôi phục tên do StbEmu báo cáo. Đổi tên tại đây không đổi tên của chính StbEmu.

Nút thùng rác (**Remove device**) yêu cầu xác nhận. Thao tác này xóa kết nối và thông tin ghép nối đã lưu khỏi điện thoại này, giữ lại tệp sao lưu và không thay đổi gì trên StbEmu. Thiết bị đã xóa sẽ không tự xuất hiện lại qua tính năng dò tìm. Để thêm lại, dùng **Add by IP address** và ghép nối lại.
