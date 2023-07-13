## Chu trình luồng dữ liệu Redux hoàn chỉnh:
- PostList đọc nhóm bài đăng ban đầu từ useSelector store và hiển thị giao diện người dùng ban đầu.
- Gửi postAdded actions chứa dữ liệu cho AddPostForm mới
- Post reducer đã thấy action postAdded và cập nhật mảng bài đăng với mục mới
- Redux store nói với giao diện người dùng rằng một số dữ liệu đã thay đổi
- Danh sách bài đăng đọc mảng bài đăng được cập nhật và tự kết xuất lại để hiển thị bài đăng mới

## tính năng mới sẽ thêm sau này sẽ tuân theo các mẫu cơ bản giống như sau: 
- Thêm các State Slide, viết các reducer functions, gửi actions và hiển thị giao diện người dùng dựa trên dữ liệu từ Redux store.

## cửa hàng Redux chỉ nên chứa dữ liệu được coi là "toàn cầu: global" cho ứng dụng! 