import { useEffect, useState } from "react";
const tabs = ["posts", "comments", "albums", "todos", "users"];

//Dùng khi muốn thực hiện các Side Effects 
//(khi có một tác động xảy ra dẫn đến dữ liệu của chương trình thay đổi)
function UseEffect() {
  // const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  //Update title DOM
  useEffect(() => {
    document.title = title;
  });

  //Call API
  // useEffect(callback, [])
  // - Chỉ gọi callback một lần sau khi component mounted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  //useEffect(callback, [deps])
  // - Callback được gọi lại mỗi khi deps thay đổi
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  //scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    //Cleanup Function
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ padding: 32, textAlign: "center" }}>
      <h4>Call API</h4>

      {/* tạo ra một danh sách các nút dựa trên một mảng các "tab" 
      và xử lý sự kiện click trên mỗi nút để cập nhật trạng thái "type"*/}
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          onClick={() => handleGotoTop()}
          style={{
            position: "fixed",
            right: 20,
            bottom: 70,
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
}

export default UseEffect;
