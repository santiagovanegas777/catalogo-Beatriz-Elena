import '../../../styles/Estilos/ListActividades.css';

function CardUser({ itemm }) {
    return (
        <article className="actividad">
      

            <div className="actividad-info">
            <h3 className="actividad-name">
            Apellido: {itemm.apellidos}</h3>
           <h3 className="actividad-name">
           Nombre:{itemm.nombre}</h3>
            
            <h3 className="actividad-name">
           Email:{itemm.email}</h3>
            <h3 className="actividad-name">
            UserName:{itemm.username}</h3>
            <h3 className="actividad-name">
            Telefono:{itemm.telefono}</h3>
            <h3 className="actividad-name">
            Fecha de Creacion:{itemm.createdAt}</h3>
            
            </div>
        </article>
    )

}
export default CardUser;