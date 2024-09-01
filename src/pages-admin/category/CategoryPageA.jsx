import { useEffect, useState } from "react";
import { request } from "../../utils/request";
import { Button, Input, Space, Table, Pagination, message, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined, HourglassOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import moment from "moment";
import AddCategoryForm from "./AddCategoryForm"; // Import the AddCategoryForm component

const CategoryPageA = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Default page size
  const [sorter, setSorter] = useState({ field: '', order: '' }); // State for sorting
  const [formVisible, setFormVisible] = useState(false); // State for product form visibility
  const [categoryFormVisible, setCategoryFormVisible] = useState(false); // State for category form visibility

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    let filtered = list.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (sorter.field) {
      filtered = filtered.sort((a, b) => {
        if (sorter.order === 'ascend') {
          return a[sorter.field] > b[sorter.field] ? 1 : -1;
        }
        if (sorter.order === 'descend') {
          return a[sorter.field] < b[sorter.field] ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredList(filtered);
    setCurrentPage(1); // Reset to the first page on new search or sort
  }, [searchQuery, list, sorter]);

  const getList = async () => {
    const res = await request("category", "get");
    if (res) {
      setList(res.list);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleReset = () => {
    setSearchQuery(""); // Clear the search query
    setCurrentPage(1); // Reset to the first page
    setPageSize(10); // Reset to default page size if needed
  };

  const handleEdit = (record) => {
    console.log("Edit record:", record);
    // Implement edit logic here
  };

  const handleDelete = async (record) => {
    console.log("Delete record:", record);
    try {
      const res = await request(`category/${record.id}`, "delete");
      if (res.success) {
        message.success("Record deleted successfully");
        getList();
      } else {
        message.error("Failed to delete record");
      }
    } catch (error) {
      message.error("An error occurred while deleting the record");
    }
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize); // Optional: allow user to change page size
  };

  const paginatedList = filteredList.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name), // Sorting for Name column
      sortOrder: sorter.field === 'name' && sorter.order, // Apply sortOrder if current field is 'name'
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Create At",
      dataIndex: "create_at",
      key: "create_at",
      render: (date) => moment(date).format("DD-MM-YYYY"),
      sorter: (a, b) => moment(a.create_at).unix() - moment(b.create_at).unix(), // Sorting for Date column
      sortOrder: sorter.field === 'create_at' && sorter.order, // Apply sortOrder if current field is 'create_at'
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        switch (status) {
          case 1:
            return <CheckCircleOutlined style={{ color: "green" }} title="Open" />;
          case 0:
            return <CloseCircleOutlined style={{ color: "red" }} title="Closed" />;
          case 2:
            return <HourglassOutlined style={{ color: "orange" }} title="Pending" />;
          default:
            return null;
        }
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleEdit(record)} type="primary" icon={<EditOutlined />} />
          <Popconfirm
            title="Are you sure you want to delete this record?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    setSorter({
      field: sorter.field,
      order: sorter.order,
    });
  };

  const handleAddCategory = () => {
    setCategoryFormVisible(true); // Show the category form
  };

  const handleCategoryFormClose = () => {
    setCategoryFormVisible(false); // Hide the category form
  };

  const handleCategoryFormAdd = () => {
    message.success("Category added successfully"); // Show success message
    getList(); // Refresh the list after adding a category
  };

  return (
    <div>
      <Space style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
        <Input
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Space>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAddCategory}>
            Add Category
          </Button>
          <Button icon={<ReloadOutlined />} onClick={handleReset}>
            Reset
          </Button>
        </Space>
      </Space>
      <Table
        columns={columns}
        dataSource={paginatedList.map((item, index) => ({ ...item, key: index }))}
        pagination={false}
        bordered
        rowClassName="custom-row"
        className="custom-table"
        onChange={handleChange} // Handle changes to sorting
      />
      <div className="custom-pagination pt-5 pb-5 float-right">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredList.length}
          onChange={handlePageChange}
          showSizeChanger
        />
      </div>
      <AddCategoryForm
        open={categoryFormVisible}
        onClose={handleCategoryFormClose}
        onAdd={handleCategoryFormAdd}
      />
    </div>
  );
};

export default CategoryPageA;
