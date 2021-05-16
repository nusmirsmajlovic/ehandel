import React, { useEffect } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { addProduct } from './../../redux/Cart/cart.actions';
import Button from './../forms/Button';
import './styles.scss';

const mapState = state => ({
    product: state.productsData.product
  });

const ProductCard = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productID } = useParams();
    const { product }  = useSelector(mapState);
    
    const {
        productThumbnail,
        productName,
        productPrice,
        productDesc,
    } = product;  

    useEffect(() => {
        dispatch(
          fetchProductStart(productID)
        )
        return () => {
            dispatch(
              setProduct({})
            )
          }
      

    },[]);

    const handleAddToCart = (product) => {
      if (!product) return;
      dispatch(
        addProduct(product)
      );
      history.push("/cart");
    }
  

    const configAddToCartBtn = {
        type: 'button'
      }
        return (
            <div className="productCart">
              <img id="card_img" src={productThumbnail} />
              
              <div className="productDetails">
                <ul>
                  <li>
                    <h1>
                      {productName}
                    </h1>
                  </li>
                  <li>
                    <span>
                      Kr{productPrice}
                    </span>
                  </li>
                  <li>
                    <span className="desc" dangerouslySetInnerHTML={{ __html: productDesc }} />
                  </li>
                  <li>
                    <div className="addToCart">
                      <Button {...configAddToCartBtn }onClick={() => handleAddToCart(product)}>
                        Add to cart
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
}

export default ProductCard;