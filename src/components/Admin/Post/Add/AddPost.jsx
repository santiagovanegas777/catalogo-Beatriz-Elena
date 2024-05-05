import React, { useState } from 'react';
import './AddPost.css';




function AgregarPost() {
  

//Formulario controlado --- Controlador de eventos que se dispara cada vez que cambia el valor de los campos de entrada del formulario.
//Cuando el usuario escribe en los campos de entrada del formulario, 
//actualiza el estado de post para reflejar lo que el usuario ha escrito. Esto es lo que hace handleInputChange.
const AddPost = async ()  =>{
  const response = await fetch('https://api-unas.vercel.app/estilos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post),
  });

  const data = await response.json();
  console.log(data);
}

const [post, setPost] = useState({ estiloName: '', estiloPrice: '', estiloImg: ''}); 

  const handleInputChange = (event) => {

    const { value, name } = event.target;
    setPost({ ...post, [name]: value });
    
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    AddPost(post);
    console.log("se han enviado el post");
    console.log(post);

   


//LIMPIA LOS CAMPOS DEL FOTMULARIO CUANDO YA HEMOS ENVIADO EL POST
    // setPost({ title: '', content: '' }); 
  };

  return (
    <div className="AgregarPost">
    <h2>Agregar nuevo post</h2>
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="estiloName"
        value={post.estiloName}
        onChange={handleInputChange}
        placeholder="Nombre"
        id='estiloName'
       
       
      />
       <input
        type="text"
        name="estiloPrice"
        value={post.estiloPrice}
        onChange={handleInputChange}
        placeholder="Price"
        id='estiloPrice'
       
      />
      
      <input
      
      type="file"
        name="estiloImg"
        value={post.estiloImg}
        onChange={handleInputChange}
        placeholder="Contenido del post"
        id='estiloImg'
      
       
      />
      <button type="submit">Agregar post</button>
      
    </form>
  </div>
);
}

export default AgregarPost;