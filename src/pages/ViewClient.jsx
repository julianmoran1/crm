import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewClient() {
  const params = useParams();
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

  const { name, company, email, phone, notes } = client;

  return (
    <div>
      {loading ? "Loading" : Object.keys(client).length === 0 ? (
        "No results"
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">Clients</h1>
          <p className="mt-3">View client {name}</p>
          <p className="text-gray-600 text-2xl mt-4">
            <span className="text-gray-800 uppercase font-bold">Client: </span>
            {name}
          </p>

          <p className="text-gray-600 text-2xl mt-4">
            <span className="text-gray-800 uppercase font-bold">Company: </span>
            {company}
          </p>

          <p className="text-gray-600 text-2xl mt-4">
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}
          </p>

          <p className="text-gray-600 text-2xl mt-4">
            <span className="text-gray-800 uppercase font-bold">
              Phone:
            </span>
            {phone}
          </p>
          {notes && (
            <p className="text-gray-600 text-2xl mt-4">
              <span className="text-gray-800 uppercase font-bold">Notes: </span>
              {notes}
            </p>
          )}
        </>
      )}
    </div>
  );
}
