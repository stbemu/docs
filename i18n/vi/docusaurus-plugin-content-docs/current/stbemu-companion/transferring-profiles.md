---
title: "Chuyển hồ sơ và cài đặt"
sidebar_label: "Chuyển hồ sơ"
---

# Chuyển hồ sơ và cài đặt {/* #transferring-profiles-and-settings */}

Dùng tính năng chuyển để sao chép trực tiếp nội dung đã chọn giữa hai bản cài đặt StbEmu khác nhau đã ghép nối. Cả hai phải đang kết nối và hỗ trợ các thao tác nguồn và đích đã chọn. Để sao chép trên cùng bản cài đặt, dùng [Copy profile > This device](profiles.md#copy-a-profile).

![Màn hình chuyển đang chờ thiết bị đích tương thích](/img/companion/transfer.png)

## Chọn và xem xét {/* #select-and-review */}

1. Mở thiết bị nguồn và chọn **Transfer to another device**.
2. Chọn **Destination device**. Nếu không có thiết bị khả dụng, quay về **Devices**, kết nối thiết bị đã ghép nối khác và thử lại.
3. Chọn **Application settings and remote mappings**, hồ sơ hoặc cả hai. Với hồ sơ, chọn **Do not copy profiles**, **All profiles** hoặc **Choose individual profiles**. Phải chọn ít nhất một danh mục.
4. Chọn **Review transfer**. Kiểm tra hồ sơ mới, thay đổi cài đặt, ảnh hưởng của ánh xạ điều khiển, thay đổi hồ sơ hoạt động, các mục loại trừ và điểm không tương thích.
5. Đánh dấu **I confirm these changes**, rồi chọn **Confirm transfer**.

Chọn riêng từng hồ sơ cần danh sách hồ sơ nguồn đầy đủ và hiện tại. Nếu hồ sơ đã chọn biến mất, dùng **Refresh** để kiểm tra danh sách, rồi chủ động bỏ chọn mọi hồ sơ vẫn còn thiếu. Làm mới không tự ý xóa hoặc thay thế hồ sơ đã chọn.

## Những gì sẽ thay đổi {/* #what-changes */}

Hồ sơ được chuyển là bản sao mới với danh tính mới ở đích. Các hồ sơ hiện có tại đích được giữ lại. Địa chỉ MAC, số sê-ri, ID thiết bị và các giá trị hồ sơ khác được giữ nguyên, nên sao chép không tạo thuê bao mới hoặc quyền mới từ nhà cung cấp. Quy trình này không có lựa chọn **Merge**/**Replace all**; các chế độ đó thuộc về [khôi phục bản sao lưu](backups.md#restore-a-backup).

Chỉ chuyển hồ sơ sẽ giữ cài đặt ứng dụng, ánh xạ điều khiển và lựa chọn hoạt động ở đích. Chỉ chuyển cài đặt sẽ giữ hồ sơ và lựa chọn hoạt động ở đích. Khi sao chép cả hai, hồ sơ hoạt động ở nguồn chỉ trở thành hồ sơ hoạt động thông qua bản sao mới nếu hồ sơ đó được bao gồm; nếu không, lựa chọn hoạt động ở đích được giữ lại.

Cài đặt ứng dụng bao gồm tùy chọn StbEmu có thể chuyển và ánh xạ phím điều khiển, không bao gồm ngôn ngữ/chủ đề Companion, quyền ghép nối, danh tính dịch vụ hay lịch sử thao tác. Giá trị không được hỗ trợ sẽ được báo cáo thay vì âm thầm bỏ qua. Xem xét cài đặt liên quan đến mật khẩu và các cài đặt khác bị ghi đè trước khi xác nhận. Một số cài đặt đã lưu cần thay đổi vòng đời hoặc khởi động lại StbEmu; xem [áp dụng cài đặt đã lưu](backups.md#results-and-applying-saved-settings).

Sau khi Companion báo ảnh chụp trạng thái nguồn đã được xác minh, chính lần thực hiện đó có thể tiếp tục nếu nguồn ngắt kết nối. Chuyển không tạo mục cố định trong thư viện bản sao lưu. Với kết quả không chắc chắn hoặc hủy, dùng [kết quả thao tác](profiles.md#operation-results).
