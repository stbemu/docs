---
id: profiles
title: Hồ sơ
sidebar_label: Hồ sơ
---

# Hồ sơ STB {/* #stb-profiles */}

**Hồ sơ STB** là tập hợp tùy chọn để mô phỏng một hộp giải mã trong ứng dụng. Ứng dụng tạo một hồ sơ khi chạy lần đầu. Bạn có thể chỉnh sửa hoặc thêm hồ sơ để tải nhiều cổng khác nhau trên cùng thiết bị. Mở **Cài đặt > Hồ sơ** và chọn **Thêm hồ sơ**, hoặc chọn hồ sơ hiện có để chỉnh sửa. Trang tổng quan nhóm tùy chọn vào **Kết nối**, **Phát và thiết bị** và **Quản lý hồ sơ**. Thao tác khả dụng phụ thuộc vào phiên bản phân phối ứng dụng và giới hạn của hồ sơ. Không thể xóa hồ sơ đang hoạt động; hãy chuyển sang hồ sơ khác trước khi xóa. Việc xóa yêu cầu xác nhận.

Chỉnh sửa văn bản và lựa chọn cần xác nhận; công tắc lưu ngay lập tức. Xem [Lưu thay đổi](/settings#saving-changes) để biết về lỗi xác thực dữ liệu, xung đột chỉnh sửa và thay đổi đã lưu cần cập nhật ứng dụng đang chạy.

StbEmu không cung cấp, lưu trữ hoặc lập chỉ mục nội dung phương tiện hay danh sách phát IPTV. Người dùng phải có quyền truy cập hợp pháp đối với nội dung được mở qua trình mô phỏng.

- [Tên hồ sơ](#profile-name)
- [Cài đặt cổng thông tin](#portal-settings)
    - [URL cổng thông tin](#portal-url)
    - [Ngôn ngữ cổng thông tin](#portal-language)
    - [Cài đặt proxy HTTP](#http-proxy-settings)
        - [Dùng proxy HTTP](#use-http-proxy)
        - [Tên máy chủ proxy](#proxy-host-name)
        - [Cổng proxy](#proxy-port)
    - [Cổng thông tin nội bộ](#portal-is-internal)
    - [URL cổng thông tin (Cổng thông tin nội bộ)](#internal-portal-url)
- [Cấu hình STB](#stb-configuration)
    - [Mẫu STB](#stb-model)
    - [Phần sụn](#firmware)
    - [Cài đặt firmware](#firmware-settings)
    - [Tác nhân người dùng](#user-agent)
    - [Độ phân giải màn hình](#screen-resolution)
    - [Địa chỉ MAC](#mac-address)
    - [Số sê-ri](#serial-number)
    - [ID thiết bị](#device-id)
        - [Dùng ID thiết bị dựa trên MAC](#use-mac-based-device-id)
        - [Gửi ID thiết bị](#send-device-id)
        - [Giá trị khởi tạo ngẫu nhiên cho ID thiết bị](#device-id-random-seed)
        - [ID thiết bị](#device-id-value)
        - [ID2 thiết bị và chữ ký tùy chỉnh](#custom-device-id-2-and-signature)
        - [ID thiết bị 2](#device-id-2)
        - [Chữ ký](#signature)
        - [Đặt lại ID thiết bị về mặc định…](#reset-device-id-to-default-value)
    - [Cài đặt phần cứng](#hardware-settings)
        - [Nhà sản xuất](#vendor)
        - [Phiên bản phần cứng](#hardware-version)
- [Cài đặt trình phát đa phương tiện](#media-player-settings)
    - [Trình phát đa phương tiện](#media-player)
    - [Cài đặt UDPXY](#udpxy-settings)
        - [Bật hỗ trợ UDPXY](#enable-udxpy-support)
        - [URL máy chủ UDPXY](#udpxy-server-url)
        - [Thay thế giao thức luồng](#overwrite-stream-protocol)
- [Cài đặt nâng cao](#advanced-settings)

### Tên hồ sơ {/* #profile-name */}
Tên hồ sơ. Có thể là bất kỳ chuỗi không rỗng nào.

### Cài đặt cổng thông tin {/* #portal-settings */}
Tùy chọn riêng của cổng.
##### URL cổng thông tin {/* #portal-url */}
Nhập URL tuyệt đối **http://** hoặc **https://**. Hỗ trợ máy chủ trong mạng cục bộ, localhost, địa chỉ IPv6 và tên miền quốc tế. URL mạng không được chứa khoảng trắng. Với cổng nội bộ, cũng chấp nhận đường dẫn hệ thống tệp tuyệt đối hoặc URL **file://** tuyệt đối được hỗ trợ. Trình sửa mới không chấp nhận URL FTP.

##### Ngôn ngữ cổng thông tin {/* #portal-language */}
Ngôn ngữ mặc định của cổng, được chỉ định bằng mã ngôn ngữ hai chữ cái [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### Cài đặt proxy HTTP {/* #http-proxy-settings */}
Cài đặt proxy HTTP.

##### Dùng proxy HTTP {/* #use-http-proxy */}
Bật nếu bạn muốn dùng proxy HTTP.

##### Tên máy chủ proxy {/* #proxy-host-name */}
Máy chủ proxy được nhập riêng với cổng kết nối; máy chủ mặc định là 127.0.0.1.
##### Cổng proxy {/* #proxy-port */}
Mặc định: 3128. Chỉ có thể chỉnh sửa máy chủ và cổng kết nối khi bật **Dùng proxy HTTP**.

##### Cổng thông tin nội bộ {/* #portal-is-internal */}
Bật tùy chọn này để dùng cổng nội bộ cho thiết bị MAG. URL cổng cục bộ tự động bật tùy chọn và khiến công tắc không thể thay đổi. Chuyển sang URL mạng xóa trạng thái cổng nội bộ được đặt tự động.

##### URL cổng thông tin (Cổng thông tin nội bộ) {/* #internal-portal-url */}
Dùng trường **URL cổng thông tin** cho đường dẫn cục bộ hoặc URL tệp; không có trình sửa URL nội bộ riêng.

Để cài cổng, mở **Cài đặt > Hồ sơ > hồ sơ của bạn > Cài đặt cổng thông tin**, dùng thao tác cài đặt và chọn tệp nén của cổng. Chờ giải nén rồi xác nhận URL cục bộ được đề xuất. Cài tệp và chấp nhận URL là hai bước riêng. Dùng thao tác xóa trong **Cài đặt cổng thông tin** để gỡ cổng nội bộ đã cài.

### Cấu hình STB {/* #stb-configuration */}
Các tùy chọn mô phỏng chính.

#### Mẫu STB {/* #stb-model */}
Mẫu thiết bị STB cần mô phỏng.

#### Phần sụn {/* #firmware */}
**Phần sụn** cần mô phỏng; không cài Phần sụn thực. Một số cổng yêu cầu Phần sụn cụ thể. Khi đó, chọn Phần sụn trong danh sách nếu có. Đa số mẫu STB được hỗ trợ chỉ có Phần sụn **Generic**, thường tương ứng với phiên bản mới nhất.

Các lựa chọn Phần sụn:
* Generic: thường là Phần sụn mới nhất có sẵn.
* Custom (chỉ MAG 250): Phần sụn có thể tùy chỉnh. Dùng nếu bạn cần thay đổi cài đặt Phần sụn cụ thể.

Đa số người dùng nên dùng Phần sụn **Generic**, được chọn theo mặc định.

#### Cài đặt firmware {/* #firmware-settings */}
Tùy chọn này chỉ có với Phần sụn **Custom**, hiện chỉ được hỗ trợ trên MAG 250. Cấu hình phiên bản bộ máy phát, API JavaScript và API STB cùng phiên bản, mô tả và ngày của bản ảnh hệ thống. Bật sử dụng Tác nhân người dùng tùy chỉnh trước khi sửa chuỗi Tác nhân người dùng tùy chỉnh.

#### Tác nhân người dùng {/* #user-agent */}
Chuỗi Tác nhân người dùng của trình duyệt web trong ứng dụng.

#### Độ phân giải màn hình {/* #screen-resolution */}
Độ phân giải cần mô phỏng; không thay đổi độ phân giải màn hình thực. Chọn độ phân giải cổng hỗ trợ, thường là **1280x720**.

#### Địa chỉ MAC {/* #mac-address */}
Địa chỉ MAC của thiết bị được mô phỏng. Có thể dùng địa chỉ MAC của thiết bị MAG 250 thực thuộc sở hữu của bạn, hoặc 12 chữ số thập lục phân ngẫu nhiên (0–9, A–F), chia thành các cặp ngăn bằng dấu hai chấm. [^wrong_mac]

Đa số cổng yêu cầu địa chỉ MAC bắt đầu bằng 00:1A:79.

[^wrong_mac]: Trên một số thiết bị chỉ có Wi-Fi, địa chỉ MAC được tạo có thể là **00:1A:79:00:00:00**. Điều này nghĩa là ứng dụng không thể phát hiện chính xác do hạn chế của Android. Thay phần **00:00:00** bằng chữ số thập lục phân ngẫu nhiên, giữ dấu hai chấm giữa các cặp.

#### Số sê-ri {/* #serial-number */}
Số sê-ri của thiết bị được mô phỏng. Đa số cổng không kiểm tra nên thông thường có thể dùng bất kỳ chuỗi văn bản nào.

#### ID thiết bị {/* #device-id */}
Cài đặt mã định danh thiết bị.

##### Dùng ID thiết bị dựa trên MAC {/* #use-mac-based-device-id */}
Tạo mã định danh dựa trên địa chỉ MAC của thiết bị. Nhấn **Đặt lại ID thiết bị về mặc định…** sau khi bật hoặc tắt tùy chọn để tạo lại mã.

##### Gửi ID thiết bị {/* #send-device-id */}
Gửi mã định danh khi cổng yêu cầu. Nếu tắt, ứng dụng gửi một chuỗi rỗng.

##### Giá trị khởi tạo ngẫu nhiên cho ID thiết bị {/* #device-id-random-seed */}
Giá trị khởi tạo dùng để tạo mã định danh thiết bị. Dùng cùng giá trị trên các thiết bị có cùng URL cổng và địa chỉ MAC. Xác nhận thay đổi giá trị sẽ tự động tạo lại các mã định danh. Không nhấn **Đặt lại ID thiết bị về mặc định…** nếu muốn giữ giá trị khởi tạo: thao tác này sẽ xóa nó.

##### ID thiết bị {/* #device-id-value */}
Mã định danh thiết bị. Dùng giá trị được tạo hoặc nhập giá trị riêng.

##### ID2 thiết bị và chữ ký tùy chỉnh {/* #custom-device-id-2-and-signature */}
Bật để sửa ID thiết bị 2 và chữ ký.

##### ID thiết bị 2 {/* #device-id-2 */}
##### Chữ ký {/* #signature */}
##### Đặt lại ID thiết bị về mặc định… {/* #reset-device-id-to-default-value */}
Sau khi xác nhận, xóa giá trị khởi tạo và tạo lại **ID thiết bị**, **ID thiết bị 2** cùng chữ ký từ các giá trị hồ sơ hiện tại. Các cài đặt hồ sơ khác được giữ nguyên.

Chỉ có thể sửa **ID thiết bị** thủ công khi bật **Gửi ID thiết bị** và tắt mã định danh dựa trên MAC. Sửa **ID thiết bị 2** và **Chữ ký** còn yêu cầu bật **ID2 thiết bị và chữ ký tùy chỉnh**. Giá trị tự suy ra vẫn có thể đọc khi không cho phép chỉnh sửa.

#### Cài đặt phần cứng {/* #hardware-settings */}
##### Nhà sản xuất {/* #vendor */}
##### Phiên bản phần cứng {/* #hardware-version */}

Tùy chọn thiết bị còn có tính tương thích Ministra và chuyển hướng trình duyệt. Chỉ thay đổi khi cổng yêu cầu.

### Cài đặt trình phát đa phương tiện {/* #media-player-settings */}

Cài đặt trình phát phương tiện cho hồ sơ này.
#### Trình phát đa phương tiện {/* #media-player */}
Chọn trình phát phương tiện mặc định cho hồ sơ này.

Danh sách gồm lựa chọn tự động, Exo, trình phát nội bộ Android, trình phát bên ngoài và các trình phát bổ sung có trong bản dựng của bạn. Chọn trong các tùy chọn ứng dụng hiển thị. Codec trình phát nội bộ hỗ trợ phụ thuộc Android; trình phát bên ngoài mở luồng trong ứng dụng khác.

#### Cài đặt UDPXY {/* #udpxy-settings */}
##### Bật hỗ trợ UDPXY {/* #enable-udxpy-support */}
Chỉ bật UDPXY sau khi nhập URL máy chủ HTTP/HTTPS hợp lệ.
##### URL máy chủ UDPXY {/* #udpxy-server-url */}
Có thể nhập URL khi UDPXY đang tắt. Chỉ cho phép URL rỗng khi tính năng tắt; URL không rỗng phải là địa chỉ HTTP/HTTPS hợp lệ.
##### Thay thế giao thức luồng {/* #overwrite-stream-protocol */}
Chọn giao thức thay thế cho luồng khi UDPXY được bật.
### Cài đặt nâng cao {/* #advanced-settings */}
Tùy chọn tương thích của hồ sơ gồm bản vá CSS, phát hiện trình mô phỏng, sửa màu nền, tệp cục bộ và hỗ trợ AJAX, cùng sự kiện quay lại và sự kiện phím cho trình phát bên ngoài. Các tùy chọn sự kiện Quay lại, Thoát và OK phụ thuộc vào tùy chọn sự kiện quay lại danh sách kênh. Chỉ thay đổi khi cổng hoặc trình phát bên ngoài yêu cầu.
