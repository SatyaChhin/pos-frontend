import { Form, Input, Button, Modal, message, Select, Radio } from "antd";
import { useEffect, useState } from "react";
import { request } from "../../utils/request";

const { Option } = Select;

const AddCategoryForm = ({ visible, onClose, onAdd }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [parentCategories, setParentCategories] = useState([]);
  const [statuses, setStatuses] = useState([
    { id: 1, name: "Active" },
    { id: 0, name: "Inactive" },
    { id: 2, name: "Pending" }
  ]);

  useEffect(() => {
    if (visible) {
      fetchParentCategories();
    }
  }, [visible]);

  const fetchParentCategories = async () => {
    // Mock data for parent categories
    const mockData = [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Books" },
      { id: 3, name: "Clothing" },
    ];
    
    // Simulate a network request with a timeout
    setTimeout(() => {
      setParentCategories(mockData);
    }, 1000);
  };

  const handleSubmit = async (values) => {
    console.log(values)
    setLoading(true);
    try {
      const res = await request("category", "post", values); 
      if (res.success) {
        message.success("Category added successfully");
        form.resetFields();
        onAdd(); 
        onClose(); 
      } else {
        message.error("Failed to add category");
      }
    } catch (error) {
      message.error("An error occurred while adding the category");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    form.resetFields(); // Reset all fields in the form
  };

  return (
    <Modal
      title="Add New Category"
      visible={visible}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Category Name"
          rules={[{ required: true, message: "Please enter the category name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="parent_id"
          label="Parent Category"
        >
          <Select placeholder="Select a parent category">
            {parentCategories.map((category) => (
              <Option key={category.id} value={category.id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Please select the status" }]}
        >
          <Radio.Group>
            {statuses.map((status) => (
              <Radio key={status.id} value={status.id}>
                {status.name}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Category
          </Button>
          <Button type="default" onClick={handleReset} style={{ marginLeft: 8 }}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCategoryForm;
