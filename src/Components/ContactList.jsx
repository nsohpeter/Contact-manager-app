import ContactListItem from "./ContactListItem";

const ContactList = (probs) => {
  const { contacts, deleteContact, isEditmode, setIsEditmode } = probs;
  // console.log(contacts);
  return (
    <div className="ui container">
      <table className="ui celled table">
        <thead className="">
          <tr className="">
            <th className="">Name</th>
            <th className="">Email</th>
            <th className="">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item, index) => {
            //console.log(item);
            return (
              <ContactListItem
                key={index}
                item={item}
                deleteContact={deleteContact}
                isEditmode={isEditmode}
                setIsEditmode={setIsEditmode}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
