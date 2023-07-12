import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  console.log("users:", users);
  console.log("userId:", userId, typeof userId);
  const author = users.find(
    (user) => typeof user.id === "number" && Number(user.id) === Number(userId)
  );
  console.log("author:", author);
  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
