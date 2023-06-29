//JSX: Javascript XML
//JSX sử dụng các thuộc tính để đặt các giá trị cho các thành phần UI.
//Ví dụ: class, style, id, src, alt, onClick,...
//Sử dụng biểu thức JavaScript. Ví dụ: {name}, {index + 1}, {items.map(item => <li>{item}</li>)},...
const name = "Hoa Tran";
function JSX() {
  return (
    // Phải đóng các thẻ như <br />.
    <h1>
      This is JSX. <br /> My name is {name}. I'm {20 + 2} year old.
    </h1>
  );
}

export default JSX;

//Không thể trả về nhiều thẻ JSX, phải gói chúng vào 1 <div>…</div> hoặc 1 bao bọc trống <>…</>
//Nếu có nhiều HTML để chuyển sang JSX, sử dụng: https://transform.tools/html-to-jsx
