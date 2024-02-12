import { useState, useEffect } from 'react';

function Crud() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    
      const response = await fetch(url);
     
        const result = await response.json();
        setData(result);
     
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleAdd = async () => {
    const newPost = { title: newItem };

    const newId = Math.max(...data.map((item) => item.id), 0) + 1;
    const newItemWithId = { ...newPost, id: newId };

    setData([...data, newItemWithId]);
    setNewItem('');

  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm'>
          {data.map((item) => (
            <div key={item.id}>
                <h1>{item.id}</h1>
              <h1>{item.title}</h1>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
        </div>
        <div className='col-sm m-5'>
          <form>
            <input
              type='text'
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </form>
          <button className='btn btn-success m-4' onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Crud;
