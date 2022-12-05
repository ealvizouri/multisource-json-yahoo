import { useEffect } from "react";
import { fetchContacts, selectContacts } from '../../app/store/contactsSlice';
import ContactsContainer from "./ContactsContainer"
import { WidgetTitle } from '../../components';
import { useSelector, useDispatch } from "react-redux";
import { useFilter } from "../../app/hooks";

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filteredContacts = useFilter(contacts);

  /* useEffect(() => {
    dispatch(fetchData({
      factoryName: 'contact'
    }));
  }, [dispatch]); */
  return (
    <ContactsContainer>
      <WidgetTitle>
        Contacts
      </WidgetTitle>
      <ul>
        {filteredContacts && filteredContacts.length && filteredContacts.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </ContactsContainer>
  )
}

export default Contacts;