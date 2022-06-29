import { Fragment, useState } from "react";

import "./App.css";

function UseStateWCallbackExamples() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
  };

  return (
    <Fragment>
      <div className="ex1-counter" style={{ padding: 20 }}>
        <h1>Ví dụ 2: setState với Callback</h1>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>

        <ul className="explain">
          <li>
            Khi dùng set State với callback thì ta có thể gọi setCounter nhiều
            lần
          </li>
          <li>
            Sau khi gọi setCounter với callback sẽ trả lại state trước đó, 3 cái
            setState sẽ tăng counter lên 3 đơn vị mỗi lần re-render
          </li>
          <li>Dù nhiều setCounter nhưng vẫn chỉ re-render 1 lần</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default UseStateWCallbackExamples;
