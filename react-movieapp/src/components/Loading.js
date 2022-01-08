import RotateLoader from "react-spinners/RotateLoader";
import "./loading.css";
const Loading = () => {
  return (
    <div className="loader">
      <RotateLoader color="#fff" />
    </div>
  );
};
export default Loading;
