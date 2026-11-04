---
id: profiles
title: Hồ sơ
sidebar_label: Hồ sơ
---

# Hồ sơ STB {/* #stb-profiles */}

**Hồ sơ STB** là tập hợp tùy chọn để mô phỏng hộp giải mã trong ứng dụng. Ứng dụng tạo một hồ sơ khi chạy lần đầu. Bạn có thể sửa hoặc thêm hồ sơ để tải nhiều cổng khác nhau trên cùng thiết bị. Để tạo hồ sơ, chạm hai lần vào màn hình để hiện menu ở trên hoặc bên cạnh [^1]. Chọn **Settings**, rồi **Profiles**, nơi bạn có thể thêm hoặc sửa hồ sơ.

StbEmu không cung cấp, lưu trữ hoặc lập chỉ mục nội dung phương tiện hay danh sách phát IPTV. Người dùng phải có quyền truy cập hợp pháp đối với nội dung được mở qua trình mô phỏng.

[^1]: Nếu dùng điều khiển 3D hoặc chuột, di chuyển con trỏ, nhấp vào màn hình và mở menu ứng dụng ở trên cùng.

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
    - [IP address](#ip-address)
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
URL của cổng. Phải bắt đầu bằng một lược đồ (**http://**, **https://**, **ftp://**, v.v.).

##### Portal language
Ngôn ngữ mặc định của cổng, được chỉ định bằng mã ngôn ngữ hai chữ cái [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Cài đặt proxy HTTP.

##### Use HTTP proxy
Bật nếu bạn muốn dùng proxy HTTP.

##### Proxy host name
##### Proxy port

##### Portal is internal
Bật để dùng cổng nội bộ cho thiết bị MAG.

##### Internal portal URL

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
Tùy chọn này chỉ có với firmware **Custom**, hiện chỉ được hỗ trợ trên MAG 250. Dùng để cấu hình thông số firmware cụ thể, như phiên bản hoặc chuỗi User Agent tùy chỉnh.

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
Giá trị khởi tạo để tạo mã định danh thiết bị. Dùng cùng giá trị trên các thiết bị có cùng URL cổng và địa chỉ MAC. Nhấn **Reset device ID** sau khi thay đổi.

##### Device ID value
Mã định danh thiết bị. Dùng giá trị được tạo hoặc nhập giá trị riêng.

##### Custom device ID 2 and signature
Bật để sửa Device ID 2 và chữ ký.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Tạo lại **Device ID**, **Device ID 2** và chữ ký.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
Địa chỉ IP gửi cho cổng khi được yêu cầu. Đây là địa chỉ được mô phỏng, không phải IP thực của thiết bị. Đa số cổng không dùng thông tin này nên thường không cần thay đổi.
### Media player settings

Cài đặt trình phát phương tiện cho hồ sơ này.
#### Media player
Chọn trình phát phương tiện mặc định cho hồ sơ này.

| Trình phát      | Mô tả                                                                                                                                          | Ghi chú                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | Trình phát mặc định, nên dùng trên đa số thiết bị |
| VLC             | [Trang web](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | Không hỗ trợ phụ đề                               |
| Internal player | Dùng trình phát Android. Codec được hỗ trợ phụ thuộc phiên bản Android trên thiết bị.                                                          | Không hỗ trợ phụ đề                               |
| External player | Có thể dùng gần như bất kỳ trình phát bên ngoài nào. Không có tích hợp với trình mô phỏng; luồng phương tiện mở trong ứng dụng khác. |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
