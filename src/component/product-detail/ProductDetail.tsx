import { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import './styleProduct.css'
import { useOpenState } from '../hooks/open';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PopupNewProductAdd from '../popup-new-product-add/PopupNewProductAdd';
import PopupEditProduct from '../popup-edit-product/PopupEditProduct';



function ProductDetail(){

   const { isOpen, toggleOpen } = useOpenState();

    const navigate = useNavigate()
    const { id } = useParams();

    const [product, setProduct] = useState(null);



    useEffect(() => {
      // Fetch the details of the specific product from an API
      fetch(`https://back-end-products.vercel.app/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [id]);

    const handleDelete = () => {
      // Perform delete request
      fetch(`https://back-end-products.vercel.app/products/${id}`, {
        method: 'DELETE',
      })
     .catch((error) => {
          // Handle any errors
          console.error(error);
        });

        navigate('/')

    };
    
    if (!product) {
      return <div>Loading...</div>;
    }
    const { title, img, brand, price, codeBar, description } = product;
    return (
       <div className = 'product-detail'>
         <img className = 'product-detail-image' src={img} alt={title} />
         <div className = "product-detail-infos">
               <h2 className='product-detail-title'>{title}</h2>
               <p>{codeBar}</p>
               <h2 className='product-detail-price'>R$ {price},00</h2>
               <p className='product-detail-brand'>{brand}</p>
               <div>
               <p>{description}</p>
               </div>
        </div>
        <div className='product-detail-icons'>
         <div className='product-detail-icon'>
          <EditIcon onClick = {() => toggleOpen()}/>
         </div>
         <div className='product-detail-icon'>
          <DeleteForeverIcon  onClick = {handleDelete}/>
          </div>
        </div>
        {isOpen && <PopupEditProduct onClick = {toggleOpen} _id = {id}/>}
    </div>
    );
  }
  
  export default ProductDetail;