import React, {useState, useEffect} from 'react';
import './styleHome.css'
import ProductCard from '../component/product-card/ProductCard';
import EllipseAddButton from '../component/add-button/EllipseAddButton';
import PopupNewProductAdd from '../component/popup-new-product-add/PopupNewProductAdd';
import { useOpenState } from '../component/hooks/open';
import { Link } from 'react-router-dom';

// const data = [
//   {
//     id: '1',
//     title: 'Echo Dot (8ª Geração)',
//     img: 'https://m.media-amazon.com/images/I/51yQll2L7xL._AC_SX679_.jpg',
//     brand: 'Amazon',
//     price: 13
//   }
// ]

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const { isOpen, toggleOpen } = useOpenState();
  
  useEffect(() => {
    // Fetch the list of products from an API
    fetch('https://back-end-products.vercel.app/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

 
  const openPopup = () => {
    // Logic to open the popup
     toggleOpen()
  };
  return (
    <div className='home-page'>
      <h1 className='home-title'>Produtos</h1>
      <div className='home-product-card'>
      {
        products.map(card => {
          const {_id, title, img, brand, price} = card

          return (
          <Link to = {`/products/${_id}`}>
          <ProductCard 
          key = {_id}
          title= {title} 
          image = {img} 
          brand= {brand} 
          price = {price} 
          />
          </Link>
          )
        })
      }
      </div>
      {
        isOpen && <PopupNewProductAdd onClick = {toggleOpen} />
      }
      <EllipseAddButton popupClick = {openPopup}/>
    </div>
  );
};

export default HomePage;
