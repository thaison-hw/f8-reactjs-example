import { Fragment, useState } from "react";

import "./App.css";

function UseStateUpdateUserInfo() {
  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 18,
    address: "Ha Noi, VN",
  });

  const handleUpdate = () => {
    setInfo({
      bio: "Yêu màu hồng ^^",
    });
  };

  return (
    <Fragment>
      <div className="ex1-counter" style={{ padding: 20 }}>
        <h1>Ví dụ 4: Update user info với useState </h1>
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>

        <ul className="explain"></ul>
        <li>Lưu ý: Set state là thay thế state bằng giá trị mới </li>
      </div>
    </Fragment>
  );
}

export default UseStateUpdateUserInfo;
