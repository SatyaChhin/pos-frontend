import { useEffect, useState } from "react";
import { request } from "../../utils/request";
import { Button, Space } from "antd";
const CategoryPageA = () => {
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
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Create At</th>
            <th className="text-center">Active</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status == 1 ? "Active" : "InActive"}</td>
              <td>{item.create_at}</td>
              <td className="text-center">
                <Space>
                  <Button onClick={() => console.log(item)} type="primary">
                    Edit
                  </Button>
                  <Button type="primary" danger>
                    Delete
                  </Button>
                </Space>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryPageA;
