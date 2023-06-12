import './styleError.css'
import React, {useState} from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  

  return (
    <div className='error-page'>
        <div className='error-container'>
        <div className='error-title-side'>
            <h1 className='error-title'>
            Ooooopss.
            </h1>
        </div>
        <div className='error-desc-side'>
            <div>
            <h1>Pagína não encontrada</h1>
            <p>Não encontramos essa página em nosso sistema. Verifique se voceê inseriu a url corretamente. </p>
             
             <Link to = '/'>Clique aqui para voltar a página inicial</Link>
            <div className='error-icons'>
                <LinkedInIcon fontSize = "large"/>
                <FacebookIcon fontSize = "large" />
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ErrorPage;
