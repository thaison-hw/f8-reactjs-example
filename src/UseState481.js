import { Fragment, useState } from "react";

import "./App.css";

function UseStateExamples() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };
  return (
    <Fragment>
      <div className="ex1-counter" style={{ padding: 20 }}>
        <h1>Ví dụ 1: Bài toán click button sẽ tăng số</h1>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>

        <ul className="explain">
          <li>Component chỉ re-render 1 lần ở trường hợp này </li>
          <li>
            từ lần thứ 2 click button nó sẽ lấy giá trị counter mà lần trước ta
            set
          </li>
          <li>Sau khi ấn nút Button, nó sẽ gọi lại hàm UseStateExamples</li>
          <li>
            hàm handleIncrease sẽ được thực thi và chạy setCounter với counter
            hiện tại
          </li>
          <li>
            sau đó nó khai báo lại hhandleIncrease với counter hiện tại(đã set)
            và render giao diện người dùng
          </li>
        </ul>

        <ul className="notice">
          <li>- Component được re-render sau khi 'setState'</li>
          <li>- Initial state chỉ dùng cho lần đầu</li>
          <li>Set state với callback?</li>
          <li>Initial state với callback?</li>
          <li>Set state là thay thế state bằng giá trị mới</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default UseStateExamples;
