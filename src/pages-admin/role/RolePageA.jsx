import { useEffect, useState } from "react";
import { request } from "../../utils/request";
const RolePageA = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await request("category", "get");
    if (res) {
      setList(res.list);
    }
  };
  return (
    <div>
      <h1>{list.length}</h1>
    </div>
  );
};

export default RolePageA;
