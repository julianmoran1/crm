import { useEffect, useState } from "react";
import Client from "../components/Client";

export default function Home() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const url = process.env.REACT_APP_API_URL;
        const response = await fetch(url);
        const result = await response.json();
        setClients(result);
      } catch (error) {
        console.log(error);
      }
    };
    getClientsAPI();
  }, []);

  const handleDelete = async (id) => {
    // eslint-disable-next-line no-restricted-globals

    try {
      const url = `${process.env.REACT_APP_API_URL}/${id}`;
        const response = await fetch(url, {
          method: "DELETE",
        });
        await response.json();
        const clientsArray = clients.filter((client) => client.id !== id)
        setClients(clientsArray)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Administrate your clients</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Comany</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
              <Client key={client.id} client={client} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
