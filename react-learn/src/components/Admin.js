import UseState from "./Hooks/UseState";
import UseStateClass from "./Hooks/UseStateClass";
import UseStateFunc from "./Hooks/UseStateFunc";
const Admin = (props) => {
  return (
    <div>
      <UseState />
      <UseStateFunc />
      <UseStateClass />
    </div>
  );
};
export default Admin;
