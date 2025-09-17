import { useState } from 'react';


const Bookshelf = () => {
    const [title, setTitle] = useState('will appear here')

    const [books, setBooks] = useState([
        {title: "Educated", author: "Tara Westover", pages: 334, read: true},
        {title: "The Souls of Black Folk", author: "W.E.B. Du Bois", pages: 281, read: false},
        {title: "1984", author: "George Orwell", pages: 328, read: true},
        {title: "Slavery by Another Name", author: "Douglas A. Blackmon", pages: 279, read: false}
    ])

    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        read: false
    })
        

    const handleInputChange = (e) => {
        console.log(e.target.name, e.target.value)
        // Logic for handling input changes will go here
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }
    
    const handleFormSubmit = (e) => {
        console.log("form submitted", newBook)
        e.preventDefault();
        // Logic for handling form submission will go here
       setTitle(newBook.title)
        // Clear the form inputs after submission
        setNewBook({title: "", author: "", read: false})
        setBooks([...books, newBook])
    }
    

    return(
        <>
    <div className="bookCardsDiv">{books.map(book => (
    <div className="bookCard" key={book.title}>
      <h4>{book.title}</h4>
      <p>by {book.author}</p>
      <p>{book.pages} pages</p>
      <p>{book.read ? "Read" : "Not Read"}</p>
    </div>
  ))}</div>

<div className="bookshelfDiv">

  <div className="formDiv">
        <h3>Add a Book</h3>

    <form onSubmit={handleFormSubmit}>
        <label htmlFor='title'>Title:</label>
        <input 
            type="text" 
            id="title" 
            name="title" 
            value={newBook.title} 
            onChange={handleInputChange} 
            required 
        />
        
        <label htmlFor='author'>Author:</label>
        <input 
            type="text" 
            id="author" 
            name="author" 
            value={newBook.author} 
            onChange={handleInputChange} 
            required 
        />
      
        <label htmlFor='read'>Read:</label>
        <input 
            type="checkbox" 
            id="read" 
            name="read" 
            checked={newBook.read} 
            onChange={handleInputChange} 
        />
        
        <button type="submit">Add Book</button>


    {/* Form will go here */}

    </form>
  </div>



</div>
</>

    )
}


export default Bookshelf;