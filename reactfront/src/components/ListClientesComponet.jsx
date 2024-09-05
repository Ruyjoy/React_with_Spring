import React, { useEffect, useState } from 'react'
import ClienteService from "../services/ClienteService"
import { Link } from 'react-router-dom';

export const ListClientesComponet = () => {

    const[clientes, setClientes] = useState([]);
    
    useEffect (() =>{
        listarClientes();
    },[])


    const deleteCliente = (clienteid) =>{
        ClienteService.deleteCliente(clienteid).then((response) => {
            listarClientes();
          }).catch((error) => {
            console.log("error", error);
          });
    }

    const listarClientes = () =>{
        ClienteService.getAllClientes().then(response =>{
            setClientes(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log('error', error)
        });
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Lista de Clientes</h2>
        <Link to = '/add-cliente' className='btn btn-primary mb-2'>Agregar cliente</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Mail</th>
                <th>Acciones</th>

            </thead>
            <tbody>
                {
                    clientes.map(
                        cliente =>
                            <tr key={cliente.id }>
                                <td>{cliente.id}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.apellido}</td>
                                <td>{cliente.mail}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-cliente/${cliente.id}`}>Actualizar</Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteCliente(cliente.id)} >Eliminar</button>
                                </td>
                            </tr>
                            
                    )
                }
            </tbody>
        </table>
    

    </div>
  )
}
export default ListClientesComponet;