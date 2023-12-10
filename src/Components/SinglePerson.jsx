import { FaUserCircle } from "react-icons/fa";

import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const SinglePerson = (props) => {
  const { contacts } = props;
  //console.log(useParams());
  const { id } = useParams();
  const contactId = Number(id);

  const newContacts = contacts.find((item) => item.id === contactId);
  const { name, email } = newContacts;

  return (
    <div className="ui card">
      <div className="image">
        <img src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{email}</div>
      </div>
    </div>
  );
};

SinglePerson.prototype = {
  contacts: PropTypes.array.isRequired,
};
export default SinglePerson;
