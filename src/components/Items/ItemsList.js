import { useContext } from 'react';
import { ItemsContext } from '../../context/ItemsContext.js';
import { deleteListItem, toggleListItem } from '../../services/items.js';
import './Items.css';

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
          <div className="list-item">
            {/* <button onClick={() => deleteListItem(item.id)}>❌</button> */}
            <input
              className="tick"
              type="checkbox"
              checked={item.complete}
              onChange={() => handleChange(item)}
            />
            <p className="item-description" onClick={() => deleteListItem(item.id)}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
