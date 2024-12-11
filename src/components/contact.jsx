import { CONTACT } from "../constants";

const contact = () => {
  return (
    <div className="border-b border-zinc-50 pb-4">
      <h1 className="my-20 text-center text-4xl">Contact</h1>
      <div className="text-center tracking-tighter">
        <p className="mb-4 text-zinc-500 text-justify">{CONTACT.description}</p>
        <a mailto="vidhiisaxena076@gmail.com">{CONTACT.email}</a>
        <p className="my-4">{CONTACT.address}</p>
      </div>
    </div>
  );
};

export default contact;
