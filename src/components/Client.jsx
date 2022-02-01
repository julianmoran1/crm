import { useNavigate } from "react-router-dom";

export default function Client({ client, handleDelete } ) {
  const { name, email, company, phone, notes, id } = client;
  const navigate = useNavigate();

  return (
    <tr className="border-b hover:bg-gray-50">
      <th className="p-3">{name}</th>
      <th className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Phone: </span>
          {phone}
        </p>
      </th>
      <th className="p-3">{company}</th>
      <th className="p-3">
        <button
          type="button"
          className="bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-xs"
          onClick={()=> navigate(`/clientes/${id}`)}
        >
          View
        </button>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
          onClick={()=> navigate(`/clientes/editar/${id}`)}
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
}
