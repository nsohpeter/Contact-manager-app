import { FaTrashAlt, FaEdit, FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const ContactListItem = ({
  item,
  deleteContact,
  isEditmode,
  setIsEditmode,
}) => {
  const { name, email, id } = item;
  const navigate = useNavigate();

  const handleEditClick = () => {
    // Set isEditmode to true
    setIsEditmode(true);

    // Navigate to the edit route with the contact ID
    navigate(`/edit/${id}`);
  };

  return (
    <tr className="">
      <td className="" style={{ gap: "0.5rem" }}>
        <FaUserCircle style={{ fontSize: "1.2rem" }} />
        {name}
      </td>

      <td className="">{email}</td>
      <td>
        <FaTrashAlt
          style={{
            marginRight: "1.5rem",
            fontSize: "1.8rem",
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => deleteContact(id)}
        />
        <FaEdit
          style={{
            marginRight: "1.5rem",
            fontSize: "1.8rem",
            color: "green",
            cursor: "pointer",
          }}
          onClick={handleEditClick}
        />
        <Link to={`/singlecontact/${id}`}>
          <button
            style={{
              marginRight: "1.5rem",
              fontSize: "1.5rem",
              color: "blue",
              cursor: "pointer",
            }}
          >
            view
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
