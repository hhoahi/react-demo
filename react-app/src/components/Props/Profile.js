//props: properties
//chứa các giá trị được truyền từ thành phần cha đến thành phần con
function Profile(props) {
  // console.log(props);
  const { name, lastname } = props;

  return (
    <h1>
      {/* Name: {props.name} {props.lastname} */}
      Name: {name} {lastname}
    </h1>
  );
}
export default Profile;
