import { Button, Card } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProducts } from "../../store/action-creators/productActionCreators";

const { Meta } = Card;

const MyProducts = () => {
    const dispatch = useDispatch()
    const { myProducts } = useSelector(state => state.products);

    const [isModalVisible, setIsModalVisible] = useState(false);

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
    },[])
    return <div>
        <h1>My Products</h1>
        <Button type="primary" onClick={showModal}>
            Open Modal
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
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </div>
}

export default MyProducts;