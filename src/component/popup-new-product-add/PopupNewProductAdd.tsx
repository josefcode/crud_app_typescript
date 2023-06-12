import React, { useState } from 'react';
import './stylePopupNewProductAdd.css'

interface OpenStateContextType {
  onClick: () => void;

}

// type FormDataProps = {
//   title: string;
//   img: string;
//   brand: string;
//   price: string | number;
//   codeBar: string;
//   description: string
// }

interface FormData {
  [key: string]: string;
}

const PopupNewProductAdd = ({onClick,}: OpenStateContextType) => {
  // const [formData, setFormData] = React.useState<FormDataProps>({
  //   title: "",
  //   img: "",
  //   brand: "",
  //   price: '',
  //   codeBar: "",
  //   description: "",
  //   })

    const [formData, setFormData] = useState<FormData>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
      const { name, value } = e.target;
      console.log(name, value)
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const data = {
        title: formData.title,
        img: formData.img,
        brand: formData.brand,
        price: Number(formData.price),
        codeBar: formData.codeBar,
         description: formData.description
      }
   
      fetch('https://back-end-products.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

      onClick()

    };

  const handleCancel = () => {
    // Handle cancel logic here
    onClick()
    console.log('Cancel button clicked');
  };

  return (
    <div className='popup-new-product'>
      <div className='popup-new-product-container'>
        <h1 className='popup-new-product-title'>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <input
           className='popup-new-product-input'
            type="text"
            name = "title"
            onChange={handleChange}
            placeholder='Nome do Produto'
          />

          <input
           className='popup-new-product-input'
            type="text"
            name = "img"
            onChange={handleChange}
            placeholder='Url do imagem'
          />
          <div className = 'popup-side-by-side-inputs'>
          <input
            className='popup-new-product-input'
            type="text"
            name = "brand"
            onChange={handleChange}
            placeholder='Fornecedor'
          />

          <input
            className='popup-new-product-input'
            type="text"
            name = "price"
            onChange={handleChange}
            placeholder='Price'
          />
          </div>
          <input
            className='popup-new-product-input'
            type="text"
            name = "codeBar"
            onChange={handleChange}
            placeholder='codigo de barra'
          />

          <textarea
            className='popup-new-product-textarea'
            name = "description"
            onChange={handleChange}
            placeholder = 'descrição'
          />

          <div  className='popup-new-product-btn-container'>
            <button 
            className='popup-new-product-save-btn'
            type="submit"
             >
              Save
            </button>
            <button 
            className='popup-new-product-cancel-btn'
            type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupNewProductAdd;
