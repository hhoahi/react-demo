﻿1. Creating and nesting components(lồng các thành phần)
// <MyDemo /> phải luôn bắt đầu bằng chữ in hoa
function MyDemo() {
    return (
        <buton>Sign in</buton>
    );
}

// export default: từ khóa chỉ định thành phần chính trong tệp
export default function FirstDemo() {
    return (
        <div>
           // <h1>Welcome to my first demo</h1>
            <MyDemo />
        </div>
    );
} 
2. Writing markup with JSX
-	Phải đóng các thẻ như <br />.
-	Không thể trả về nhiều thẻ JSX, phải gói chúng vào 1 <div>…</div> hoặc 1 bao bọc trống <>…</>
-	Nếu có nhiều HTML để chuyển sang JSX, sử dụng: https://transform.tools/html-to-jsx
3.Adding styles(giống class html)
<img className="avatar" />
// className not class
4. Displaying data(hiển thị dữ liệu)
-	JSX cho phép đặt đánh dấu vào JavaScript.
-	Dấu ngoặc nhọn {} cho phép “thoát trở lại” vào JavaScript để có thể nhúng một số biến từ mã của mình và hiển thị nó cho người dùng.
-	Ví dụ: điều này sẽ hiển thị user.name:
return (
    <h1>
      {user.name}
    </h1>
  );
-	cũng có thể “vào JavaScript” từ các thuộc tính JSX, nhưng phải sử dụng dấu ngoặc nhọn {} thay vì dấu ngoặc kép ‘’’’.
return (
    <img
      className="avatar"
      src={user.imageUrl}
   />
  );
-	Ví dụ: className='avatar' chuyển chuỗi 'avatar' làm lớp CSS, nhưng src={user.imageUrl} đọc giá trị biến JavaScript user.imageUrl và sau đó chuyển giá trị đó làm thuộc tính src.
-	cũng có thể đặt các biểu thức phức tạp hơn bên trong dấu ngoặc nhọn JSX, ví dụ: nối chuỗi
5.Conditional rendering(kết xuất có điều kiện)
-	Sử dụng các kỹ thuật giống như khi viết mã JavaScript thông thường
-	Ví dụ: sử dụng một câu lệnh if
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
 return (
   <div>
      {content}
    </div>
  );
-	có thể sử dụng toán tử điều kiện ?. Không giống như if, nó hoạt động bên trong JSX:
  <div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
6. Rendering lists
-	Dựa vào các tính năng của JavaScript như vòng for và hàm mảng map() để hiển thị danh sách các thành phần.
	const products = [
	    { title: 'Cabbage', isFruit: false, id: 1 },
	    { title: 'Garlic', isFruit: false, id: 2 },
	    { title: 'Apple', isFruit: true, id: 3 },
	  ];
	  
	  //map() để chuyển đổi một mảng sản phẩm thành <li> các mặt hàng
	  export default function ShoppingList() {
	    const listItems = products.map(product =>
	      // <li> có một thuộc tính key
	      //
	      <li
	        key={product.id}
	        style={{
	          color: product.isFruit ? 'magenta' : 'darkgreen'
	        }}
	      >
	        {product.title}
	      </li>
	    );
	  
	    return (
	      <ul>{listItems}</ul>
    );
  }

