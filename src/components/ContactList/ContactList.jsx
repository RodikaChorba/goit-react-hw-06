import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

const getVisibleList = (list, statusFilter) => {
  return list.filter((item) =>
    item.name.toLowerCase().includes(statusFilter.toLowerCase())
  );
};

const ContactList = () => {
  const list = useSelector(selectContacts);
  const statusFilter = useSelector((state) => state.filters.name);
  const visibleList = getVisibleList(list, statusFilter);

  return (
    <ul className={css.list}>
      {visibleList.map(({ name, number, id }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
export default ContactList;
