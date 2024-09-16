import {useState} from 'react';
import './App.css'; 

export default function Create() {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [isbn, setIsbn] = useState('');

    const enviar = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },


            body: JSON.stringify({
                title: title, 
                year: year, 
                isbn: isbn
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            alert('Success:', data);

            setTitle('');
            setYear('');
            setIsbn('');
        })
        .catch((error) => {
            alert('Error:', error);
        });
    
    }


  return (
    <div>
        <h1>Corriendo</h1>
        <form onSubmit={enviar}>
            <label htmlFor="title">Title:</label>
            <input 
                type="text"
                name='title'
                id='title'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <label htmlFor="year">Año:</label>
            <input 
                type="text"
                name='year'
                id='year'
                value={year}
                onChange={e => setYear(e.target.value)} 
            />

            <label htmlFor="isbn">Isbn:</label>
            <input 
                type="text"
                name='isbn'
                id='isbn'
                value={isbn}
                onChange={e => setIsbn(e.target.value)} 
            />
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}
