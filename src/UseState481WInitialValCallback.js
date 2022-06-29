import { Fragment, useState } from "react";

import "./App.css";

const orders = [100, 200, 300];

function UseStateWInitialCallback() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <Fragment>
      <div className="ex1-counter" style={{ padding: 20 }}>
        <h1>Ví dụ 3: Initial State với Callback</h1>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>

        <ul className="explain">
          <li>
            Khi ta truyền hàm vào setState thì nó sẽ không dùng hàm đó để làm
            initial state mà nó dùng giá trị mà hàm đó return ra
          </li>
          <li>
            nếu truyền function ở ngoài vào sẽ bị gọi lại function, tính lại mỗi lần re-render
          </li>
          <li>Tính toán ở trong setState sẽ không bị gọi lại function mỗi lần re-render mà chỉ tính toán lần đầu để lấy giá trị khởi tạo</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default UseStateWInitialCallback;
