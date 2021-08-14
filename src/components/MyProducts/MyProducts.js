import { Button, Card, Form, Input, InputNumber, message } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addToMyProduct, getMyProducts } from "../../store/action-creators/productActionCreators";

const { Meta } = Card;

const MyProducts = () => {
    const dispatch = useDispatch()
    const { myProducts } = useSelector(state => state.products);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        dispatch(getMyProducts())
    },[dispatch])
    const onFinish = (values) => {
        setLoading(true)
        addProduct(values).then(res => {
            setLoading(false)
            if (res.status === 200) {
                dispatch(addToMyProduct(res.data))
                message.success('Product is added')
            }
        });
    };
  
    return <div>
        <h1>My Products</h1>
        <Button type="primary" onClick={showModal}>
            Add Product
        </Button>
        <div style={{display:'flex'}} >
        {myProducts.map(e => (
            <Card
                key={e.id}
                hoverable
                style={{ width: 240, margin: 15 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title={e.name} description={e.description} />
                <span>Price: {e.price}$</span>
            </Card>
        )
        )}
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 8,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                    required: true,
                    message: 'Please input name!',
                    },
                ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="Description"
            name="description"
            rules={[
                {
                required: true,
                message: 'Please input description!',
                },
            ]}
            >
            <Input />
            </Form.Item>
    
            <Form.Item
            label="Category"
            name="category"
            rules={[
                {
                required: true,
                message: 'Please input category',
                },
            ]}
            >
            <Input />
            </Form.Item>

                
            <Form.Item
            label="Price"
            name="price"
            rules={[
                {
                required: true,
                message: 'Please input price',
                },
            ]}
            >
            <InputNumber  />
            </Form.Item>
    
            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit" loading={loading}>
                Submit
            </Button>
            </Form.Item>
        </Form>
        </Modal>
    </div>
}

export default MyProducts;