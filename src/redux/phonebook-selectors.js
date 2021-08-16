export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const items = getContacts(state);
  const filter = getFilter(state);
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
