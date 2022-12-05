import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, selectLoading, selectContacts } from "../../app/store/contactsSlice";
import ContactsContainer from "./ContactsContainer";
import { useFilter, useScroll } from "../../app/hooks";
import { WidgetTitle, Spinner } from '../../components';

const Contacts = () => {
  const contactsRef = useRef();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filteredContacts = useFilter(contacts);
  useScroll(contactsRef, dispatch(fetchContacts()));

  return (
    <ContactsContainer>
      <WidgetTitle>
        Contacts
      </WidgetTitle>
      <ul ref={contactsRef}>
        {filteredContacts && filteredContacts.length && filteredContacts.map(item => <li key={item.id}>{item.name}</li>)}
        {isLoading && <li className="spinner"><Spinner /></li>}
      </ul>
    </ContactsContainer>
  )
}

export default Contacts;