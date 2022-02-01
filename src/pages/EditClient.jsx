import MainForm from "../components/MainForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditClient() {
  const { id } = useParams();

  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getClientAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
      setLoading(!loading);
    };
    getClientAPI();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3">Fill the inputs to edit the client</p>
      
      {client?.name ? (
        <MainForm title="Edit client" client={client} />
      ) : (
        <p>Invalid client's id</p>
      )}
    </>
  );
}
