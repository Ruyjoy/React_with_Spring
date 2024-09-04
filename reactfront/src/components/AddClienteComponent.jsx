import React, { useState } from "react";
import ClienteService from "../services/ClienteService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AddClienteComponent = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");

  const navigate = useNavigate();

  const saveCliente = (e) => {
    e.preventDefault();
    const cliente = { nombre, apellido, mail };
    ClienteService.crearCliente(cliente)
      .then((response) => {
        console.log(response.data);
        navigate("/clientes");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 ">
            <h2 className="text-center"> Registro de clientes</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    placeholder="Digite su nombre"
                    name="nombre"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-lable">Apellido</label>
                  <input
                    type="text"
                    placeholder="Digite su apellido"
                    name="apellido"
                    className="form-control"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-lable">Mail</label>
                  <input
                    type="text"
                    placeholder="Digite su mail"
                    name="mail"
                    className="form-control"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveCliente(e)}
                >
                  Guardar
                </button>
                &nbsp;&nbsp;
                <Link to="/clientes" className="btn btn-danger">
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClienteComponent;
