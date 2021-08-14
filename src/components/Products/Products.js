import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/action-creators/productActionCreators";

const { Meta } = Card;

const Products = () => {
    const dispatch = useDispatch()
    const { allProducts } = useSelector(state => state.products);
    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch])
    return <div>
        <h1>All Products</h1>
        <div style={{display:'flex'}} >
        {allProducts.map(e => (
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
    </div>
}

export default Products;