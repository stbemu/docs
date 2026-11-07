---
title: "Điều khiển từ xa"
sidebar_label: "Điều khiển từ xa"
---

# Điều khiển từ xa {/* #remote-control */}

Mở thiết bị đang kết nối và chọn **Remote control**. Thao tác chỉ hiển thị khi thiết bị hỗ trợ đầu vào từ xa được cấp quyền. Các nút này điều khiển StbEmu và cổng thông tin của nó; chúng tách biệt với dịch vụ điều khiển MAG cũ được mô tả trong [Điều khiển từ xa cũ](../settings/common_settings.md#legacy-remote).

![Bộ điều khiển có thể cuộn với các phím màu và cụm phím hướng](/img/companion/remote-control.png)

Chạm vào nút để thực hiện thao tác thông thường. Giữ nút để nhấn giữ hoặc nhấn lặp lại khi được hỗ trợ. Thả tay để ngừng giữ. Các nút có sẵn và hành vi nhấn giữ phụ thuộc vào thiết bị; không phải phím nào cũng hỗ trợ lặp lại. Cuộn để đến các nút còn lại, gồm phát nội dung, âm lượng, kênh và phím số.

Mỗi lần chỉ có một cử chỉ phím hoạt động. Rời trang điều khiển hoặc ứng dụng, mất kết nối hay mất quyền đều hủy đầu vào đang hoạt động. Đầu vào từ xa không được phát lại sau khi kết nối lại: hãy kết nối lại rồi chủ động nhấn lại.

## Hiểu phản hồi {/* #read-the-feedback */}

Phản hồi nhấn/giữ cục bộ nghĩa là Companion đã nhận ra cử chỉ. **Awaiting device confirmation** nghĩa là kết quả vẫn đang chờ. **Device accepted input** xác nhận StbEmu đã chấp nhận đầu vào, không có nghĩa thao tác kênh hoặc cổng thông tin chắc chắn đã hoàn tất.

Với **Input target unavailable**, hãy kiểm tra kết nối. Với **Authorization expired. Pair again.**, hiển thị mã mới trong StbEmu và nhập vào Companion. Nếu thao tác không còn được hỗ trợ, hãy ngừng dùng và kiểm tra các nút có sẵn. Kết nối lại nếu đầu vào vẫn không khả dụng.

Thay đổi rung điều khiển trong **Settings > Interface > Remote control haptic feedback**. Cài đặt này độc lập với **UI haptic feedback**; phản hồi hình ảnh vẫn có khi tắt rung.
