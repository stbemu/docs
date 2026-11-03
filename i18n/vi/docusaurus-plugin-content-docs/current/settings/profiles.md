---
id: profiles
title: Hồ sơ
sidebar_label: Hồ sơ
---

# Hồ sơ STB {/* #stb-profiles */}

**Hồ sơ STB** là tập hợp tùy chọn để mô phỏng một hộp giải mã trong ứng dụng. Ứng dụng tạo một hồ sơ khi chạy lần đầu. Bạn có thể chỉnh sửa hoặc thêm hồ sơ để tải nhiều cổng khác nhau trên cùng thiết bị. Mở **Settings > Profiles** và chọn **Add profile**, hoặc chọn hồ sơ hiện có để chỉnh sửa. Trang tổng quan nhóm tùy chọn vào **Connection**, **Playback & device** và **Manage profile**. Thao tác khả dụng phụ thuộc vào phiên bản phân phối ứng dụng và giới hạn của hồ sơ. Không thể xóa hồ sơ đang hoạt động; hãy chuyển sang hồ sơ khác trước khi xóa. Việc xóa yêu cầu xác nhận.

Chỉnh sửa văn bản và lựa chọn cần xác nhận; công tắc lưu ngay lập tức. Xem [Lưu thay đổi](/settings#saving-changes) để biết về lỗi xác thực dữ liệu, xung đột chỉnh sửa và thay đổi đã lưu cần cập nhật ứng dụng đang chạy.

StbEmu không cung cấp, lưu trữ hoặc lập chỉ mục nội dung phương tiện hay danh sách phát IPTV. Người dùng phải có quyền truy cập hợp pháp đối với nội dung được mở qua trình mô phỏng.

- [Profile name](#profile-name)
- [Portal settings](#portal-settings)
    - [Portal URL](#portal-url)
    - [Portal language](#portal-language)
    - [HTTP Proxy settings](#http-proxy-settings)
        - [Use HTTP proxy](#use-http-proxy)
        - [Proxy host name](#proxy-host-name)
        - [Proxy port](#proxy-port)
    - [Portal is internal](#portal-is-internal)
    - [Internal portal URL](#internal-portal-url)
- [STB configuration](#stb-configuration)
    - [STB Model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware settings](#firmware-settings)
    - [User Agent](#user-agent)
    - [Screen resolution](#screen-resolution)
    - [MAC address](#mac-address)
    - [Serial number](#serial-number)
    - [Device ID](#device-id)
        - [Use MAC-based device ID](#use-mac-based-device-id)
        - [Send Device ID](#send-device-id)
        - [Device ID random seed](#device-id-random-seed)
        - [Device ID](#device-id-value)
        - [Custom device ID 2 and signature](#custom-device-id-2-and-signature)
        - [Device ID 2](#device-id-2)
        - [Signature](#signature)
        - [Reset device ID to default value](#reset-device-id-to-default-value)
    - [Hardware settings](#hardware-settings)
        - [Vendor](#vendor)
        - [Hardware version](#hardware-version)
- [Media player settings](#media-player-settings)
    - [Media player](#media-player)
    - [UDPXY settings](#udpxy-settings)
        - [Enable UDPXY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name
Tên hồ sơ. Có thể là bất kỳ chuỗi không rỗng nào.

### Portal settings
Tùy chọn riêng của cổng.
##### Portal URL
Nhập URL tuyệt đối **http://** hoặc **https://**. Hỗ trợ máy chủ trong mạng cục bộ, localhost, địa chỉ IPv6 và tên miền quốc tế. URL mạng không được chứa khoảng trắng. Với cổng nội bộ, cũng chấp nhận đường dẫn hệ thống tệp tuyệt đối hoặc URL **file://** tuyệt đối được hỗ trợ. Trình sửa mới không chấp nhận URL FTP.

##### Portal language
Ngôn ngữ mặc định của cổng, được chỉ định bằng mã ngôn ngữ hai chữ cái [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Cài đặt proxy HTTP.

##### Use HTTP proxy
Bật nếu bạn muốn dùng proxy HTTP.

##### Proxy host name
Máy chủ proxy được nhập riêng với cổng kết nối; máy chủ mặc định là 127.0.0.1.
##### Proxy port
Mặc định: 3128. Chỉ có thể chỉnh sửa máy chủ và cổng kết nối khi bật **Use HTTP proxy**.

##### Portal is internal
Bật tùy chọn này để dùng cổng nội bộ cho thiết bị MAG. URL cổng cục bộ tự động bật tùy chọn và khiến công tắc không thể thay đổi. Chuyển sang URL mạng xóa trạng thái cổng nội bộ được đặt tự động.

##### Internal portal URL
Dùng trường **Portal URL** cho đường dẫn cục bộ hoặc URL tệp; không có trình sửa URL nội bộ riêng.

Để cài cổng, mở **Settings > Profiles > hồ sơ của bạn > Portal settings**, dùng thao tác cài đặt và chọn tệp nén của cổng. Chờ giải nén rồi xác nhận URL cục bộ được đề xuất. Cài tệp và chấp nhận URL là hai bước riêng. Dùng thao tác xóa trong **Portal settings** để gỡ cổng nội bộ đã cài.

### STB configuration
Các tùy chọn mô phỏng chính.

#### STB Model
Mẫu thiết bị STB cần mô phỏng.

#### Firmware
**Firmware** cần mô phỏng; không cài firmware thực. Một số cổng yêu cầu firmware cụ thể. Khi đó, chọn firmware trong danh sách nếu có. Đa số mẫu STB được hỗ trợ chỉ có firmware **Generic**, thường tương ứng với phiên bản mới nhất.

Các lựa chọn firmware:
* Generic: thường là firmware mới nhất có sẵn.
* Custom (chỉ MAG 250): firmware có thể tùy chỉnh. Dùng nếu bạn cần thay đổi cài đặt firmware cụ thể.

Đa số người dùng nên dùng firmware **Generic**, được chọn theo mặc định.

#### Firmware settings
Tùy chọn này chỉ có với firmware **Custom**, hiện chỉ được hỗ trợ trên MAG 250. Cấu hình phiên bản bộ máy phát, API JavaScript và API STB cùng phiên bản, mô tả và ngày của bản ảnh hệ thống. Bật sử dụng User Agent tùy chỉnh trước khi sửa chuỗi User Agent tùy chỉnh.

#### User Agent
Chuỗi User Agent của trình duyệt web trong ứng dụng.

#### Screen resolution
Độ phân giải cần mô phỏng; không thay đổi độ phân giải màn hình thực. Chọn độ phân giải cổng hỗ trợ, thường là **1280x720**.

#### MAC address
Địa chỉ MAC của thiết bị được mô phỏng. Có thể dùng địa chỉ MAC của thiết bị MAG 250 thực thuộc sở hữu của bạn, hoặc 12 chữ số thập lục phân ngẫu nhiên (0–9, A–F), chia thành các cặp ngăn bằng dấu hai chấm. [^wrong_mac]

Đa số cổng yêu cầu địa chỉ MAC bắt đầu bằng 00:1A:79.

[^wrong_mac]: Trên một số thiết bị chỉ có Wi-Fi, địa chỉ MAC được tạo có thể là **00:1A:79:00:00:00**. Điều này nghĩa là ứng dụng không thể phát hiện chính xác do hạn chế của Android. Thay phần **00:00:00** bằng chữ số thập lục phân ngẫu nhiên, giữ dấu hai chấm giữa các cặp.

#### Serial number
Số sê-ri của thiết bị được mô phỏng. Đa số cổng không kiểm tra nên thông thường có thể dùng bất kỳ chuỗi văn bản nào.

#### Device ID
Cài đặt mã định danh thiết bị.

##### Use MAC-based device ID
Tạo mã định danh dựa trên địa chỉ MAC của thiết bị. Nhấn **Reset device ID** sau khi bật hoặc tắt tùy chọn để tạo lại mã.

##### Send Device ID
Gửi mã định danh khi cổng yêu cầu. Nếu tắt, ứng dụng gửi một chuỗi rỗng.

##### Device ID random seed
Giá trị khởi tạo dùng để tạo mã định danh thiết bị. Dùng cùng giá trị trên các thiết bị có cùng URL cổng và địa chỉ MAC. Xác nhận thay đổi giá trị sẽ tự động tạo lại các mã định danh. Không nhấn Reset nếu muốn giữ giá trị khởi tạo: Reset sẽ xóa nó.

##### Device ID value
Mã định danh thiết bị. Dùng giá trị được tạo hoặc nhập giá trị riêng.

##### Custom device ID 2 and signature
Bật để sửa Device ID 2 và chữ ký.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Sau khi xác nhận, xóa giá trị khởi tạo và tạo lại **Device ID**, **Device ID 2** cùng chữ ký từ các giá trị hồ sơ hiện tại. Các cài đặt hồ sơ khác được giữ nguyên.

Chỉ có thể sửa **Device ID** thủ công khi bật **Send Device ID** và tắt mã định danh dựa trên MAC. Sửa **Device ID 2** và **Signature** còn yêu cầu bật **Custom device ID 2 and signature**. Giá trị tự suy ra vẫn có thể đọc khi không cho phép chỉnh sửa.

#### Hardware settings
##### Vendor
##### Hardware version

Tùy chọn thiết bị còn có tính tương thích Ministra và chuyển hướng trình duyệt. Chỉ thay đổi khi cổng yêu cầu.

### Media player settings

Cài đặt trình phát phương tiện cho hồ sơ này.
#### Media player
Chọn trình phát phương tiện mặc định cho hồ sơ này.

Danh sách gồm lựa chọn tự động, Exo, trình phát nội bộ Android, trình phát bên ngoài và các trình phát bổ sung có trong bản dựng của bạn. Chọn trong các tùy chọn ứng dụng hiển thị. Codec trình phát nội bộ hỗ trợ phụ thuộc Android; trình phát bên ngoài mở luồng trong ứng dụng khác.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Chỉ bật UDPXY sau khi nhập URL máy chủ HTTP/HTTPS hợp lệ.
##### UDPXY server URL
Có thể nhập URL khi UDPXY đang tắt. Chỉ cho phép URL rỗng khi tính năng tắt; URL không rỗng phải là địa chỉ HTTP/HTTPS hợp lệ.
##### Overwrite stream protocol
Chọn giao thức thay thế cho luồng khi UDPXY được bật.
### Advanced settings
Tùy chọn tương thích của hồ sơ gồm bản vá CSS, phát hiện trình mô phỏng, sửa màu nền, tệp cục bộ và hỗ trợ AJAX, cùng sự kiện quay lại và sự kiện phím cho trình phát bên ngoài. Các tùy chọn sự kiện Back, Exit và OK phụ thuộc vào tùy chọn sự kiện quay lại danh sách kênh. Chỉ thay đổi khi cổng hoặc trình phát bên ngoài yêu cầu.
