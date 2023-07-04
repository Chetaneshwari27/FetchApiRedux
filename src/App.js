import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchApi, test } from "./store/UserSlice";

function App() {
  const dispatch = useDispatch();
  const getStoreData = useSelector((state) => state.useDetails);
  const { data, errorData, loading, status } = useSelector(
    (state) => state.useDetails.userData
  );
  console.log(data, errorData, loading, status);

  useEffect(() => {
    dispatch(test(1));
    dispatch(FetchApi(1));
  }, []);

  return <div className="App">{getStoreData.value}</div>;
}

export default App;
