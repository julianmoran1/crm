import Formulario from "../components/Formulario";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditClient() {
  const { id } = useParams();

  const [cliente, setCliente] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setLoading(!loading);
    };
    obtenerClienteAPI();
  }, []);

  //const { nombre, company, email, phone, notes } = cliente;

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3">Fill the inputs to edit the client</p>
      
      {cliente?.name ? (
        <Formulario titulo="Edit client" cliente={cliente} />
      ) : (
        <p>Invalid client's id</p>
      )}
    </>
  );
}
