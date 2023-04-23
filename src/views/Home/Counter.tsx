// import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { incremented, decremented, selectCounter } from "@/store/counter";

export default () => {
  const dispatch = useDispatch();

  const { count } = useSelector(selectCounter);

  return (
    <div>
      <h2>当前组件显示Counter {count}</h2>
      <button type='button' onClick={() => dispatch(incremented())}>
        Counter++
      </button>
      <button type='button' onClick={() => dispatch(incremented())}>
        Counter--
      </button>
    </div>
  );
};
