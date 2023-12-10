import { useState, useRef } from "react";
import PropTypes from "prop-types";

const AddContact = (props) => {
  const { addContact, isEditmode } = props;
  const [contactDetails, setContactDetails] = useState({ name: "", email: "" });
  //console.log(probs);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactDetails.name === "" || contactDetails.email === "") {
      alert("enter the details");
      return;
    }
    addContact(contactDetails);
    setContactDetails({ name: "", email: "" });
    return history.back("/");
  };

  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={contactDetails.name}
            onChange={handleNameChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={contactDetails.email}
            onChange={handleNameChange}
          />
        </div>

        <button
          className="ui button"
          type="submit"
          style={{ backgroundColor: "green", color: "white" }}
        >
          {isEditmode ? "update contact" : "add contact"}
        </button>
      </form>
    </div>
  );
};

AddContact.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  // contactDetails: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  // }).isRequired,
  addContact: PropTypes.func.isRequired,
  isEditmode: PropTypes.bool.isRequired,
  // setContactDetails: PropTypes.func.isRequired,
};

export default AddContact;
