import { useState } from 'react';


const Bookshelf = () => {
    const [title, setTitle] = useState('will appear here')

    const [books, setBooks] = useState([
        {title: "Educated", author: "Tara Westover", pages: 334, read: true},
        {title: "The Souls of Black Folk", author: "W.E.B. Du Bois", pages: 281, read: false},
        {title: "1984", author: "George Orwell", pages: 328, read: true},
        {title: "Slavery by Another Name", author: "Douglas A. Blackmon", pages: 279, read: false}
    ])

    
    const handleInputChange = (e) => {
        // Logic for handling input changes will go here
        setBooks({...formData, [e.target.name]: e.target.value})
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Logic for handling form submission will go here
        setTitle([...books, formData])

        setBooks({
            title: "",
            author: "",
            pages: "",
            read: false
        })
    
    }


    return(
        <>
        <h1>{title}</h1>

<div className="bookshelfDiv">

  <div className="formDiv">

    <h3>Add a Book</h3>

    <form onSubmit={handleFormSubmit}>

    {/* Form will go here */}

    </form>
  </div>

  <div className="bookCardsDiv">{/* Book cards will display here */}</div>

</div>
</>

    )
}


export default Bookshelf;