import { Fragment, useState } from "react";

import "./App.css";

function UseStateAddMoreUserInfo() {
  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 18,
    address: "Ha Noi, VN",
  });

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "Yêu màu hồng ^^",
    });
  };

  return (
    <Fragment>
      <div className="ex1-counter" style={{ padding: 20 }}>
        <h1>Ví dụ 5: Add more user info với useState </h1>
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>

        <ul className="explain"></ul>
        <li>Áp dụng toán tử ES6 spread rải info vào info mới và thêm vào những gì cần thêm </li>

      </div>
    </Fragment>
  );
}

export default UseStateAddMoreUserInfo;
