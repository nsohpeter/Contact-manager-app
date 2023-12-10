import { useEffect, useState } from "react";
import AddContact from "./Components/AddContact";
import ContactCard from "./Components/ContactCard";
import Header from "./Components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePerson from "./Components/SinglePerson";
//import ContactList from "./Components/ContactList";
function App() {
  const LOCAL_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [isEditmode, setIsEditmode] = useState(false);

  const addContact = (contact) => {
    const newContacts = [...contacts, { id: Math.random(), ...contact }];
    // setContacts((prevState) => {
    //   return [...prevState, { id: Math.random(), ...contact }];
    // });
    setContacts(newContacts);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newContacts));
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newContacts));
  };

  useEffect(() => {
    const retrievedContact = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (retrievedContact) setContacts(retrievedContact);
  }, []);

  return (
    <div className="ui container" style={{ width: "60%" }}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactCard
                contacts={contacts}
                deleteContact={deleteContact}
                isEditmode={isEditmode}
                setIsEditmode={setIsEditmode}
              />
            }
          />
          <Route
            path={isEditmode ? `/edit/:id` : `/add`}
            element={
              <AddContact addContact={addContact} isEditmode={isEditmode} />
            }
          />
          {/* <Route
            path="/edit/:id"
            element={
              <AddContact
              // updateContact={updateContact}
              // contactToEdit={editContact}
              />
            }
          /> */}
          <Route
            path="/singlecontact/:id"
            element={<SinglePerson contacts={contacts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* <AddContact addContact={addContact} />
<ContactCard contacts={contacts} deleteContact={deleteContact} /> */
}
