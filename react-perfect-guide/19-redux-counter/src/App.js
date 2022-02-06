import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
function App() {
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  return (
    <Fragment>
      <Header />
      {!isAuthed && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
