import React, {useContext} from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import bt_add_to_cart from'../assets/icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext)
	
	const handleClick = (item) => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<h1>H1 DESDE PRODUCITEM</h1>
			<img src={product.images[0]} alt={product.titles} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handleClick(product)}>
					<img src={bt_add_to_cart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
