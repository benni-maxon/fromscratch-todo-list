import { useContext } from 'react';
import { ItemsContext } from '../../context/ItemsContext.js';
import { toggleListItem } from '../../services/items.js';

export default function ItemsList() {
  const { items, setItems } = useContext(ItemsContext);
  const handleChange = async (item) => {
    try {
      const updatedItem = await toggleListItem(item);
      setItems((prevItems) =>
        prevItems.map((prevItem) => (prevItem.id === item.id ? updatedItem : prevItem))
      );
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <label className="checkbox">
            <input type="checkbox" checked={item.complete} onChange={() => handleChange(item)} />
            {item.description}
          </label>
        </div>
      ))}
    </>
  );
}
