import MainForm from "../components/MainForm";


export default function NewClient() {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Fill the inputs to register a client</p>
      <MainForm title="Add client" />
    </>
  );
}
