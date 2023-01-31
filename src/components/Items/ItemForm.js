import React, { useContext, useState } from 'react';
import { ItemsContext } from '../../context/ItemsContext.js';
import { createListItem } from '../../services/items.js';

export default function ItemForm() {
  const [description, setDescription] = useState('');
  const { setItems } = useContext(ItemsContext);
  const handleNewItem = async () => {
    try {
      const item = await createListItem(description);
      setItems((prev) => [...prev, item]);
      setDescription('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="field">
      <input
        type="text"
        placeholder="new to-do list item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleNewItem}>Add</button>
    </div>
  );
}
