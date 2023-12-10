import ContactList from "./ContactList";
import { Link, useNavigate } from "react-router-dom";

const ContactCard = (probs) => {
  const { contacts, deleteContact, isEditmode, setIsEditmode } = probs;
  const navigate = useNavigate();

  const backToAdd = () => {
    setIsEditmode(false);
    navigate("/add");
  };
  return (
    <div className="ui container" style={{ marginTop: "2rem" }}>
      <div
        className=" ui content"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <h1>Contact list</h1>

        <button
          style={{
            backgroundColor: "green",
            padding: "1rem",
            color: "white",
          }}
          onClick={backToAdd}
        >
          add contact
        </button>
      </div>
      <hr />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        isEditmode={isEditmode}
        setIsEditmode={setIsEditmode}
      />
    </div>
  );
};

export default ContactCard;
