import React, { Component } from 'react';
import './bookList.css';
import axios from 'axios';
import Modal from '../components/modal';

class ListaBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: "a",
      books: [],
      iconvisible:true,
      open:0
    };
  }

  fetchBooks = async (e) => {
    console.log(this.state.strSearch)
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.strSearch}`
      );
      const books = response.data.items;
      this.setState({iconvisible:false})
      this.setState({ books: books });
      
    } catch (error) {
      console.log(error);
    }
  };
  search = (e) => {
    this.setState({ strSearch: e.target.value });
   
  };
  openModal=(id)=>{
    this.setState({open:id})
    console.log(this.state.open)
  }
  closeModal=()=>{
    this.setState({open:0})
  }


  render() {
    return (
      <>
        <div className="container-fluid codrops-header">
          <section className="text-center">
            <h2>Cerca i tuoi libri</h2>
            <form className="form-inline">
              <div className="form-group" style={{ margin: " 30px auto" }}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="book title..."
                  onChange={this.search}
                />
                <button
                  style={{ padding: "8px 15px", borderRadius: "5px" }}
                  className="btn btn-warning"
                  type="submit"
                  onClick={this.fetchBooks}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </section>
        </div>
        <div className="main" style={{ marginTop: "10px" }}>
          <div className="bookshelf" id="bookshelf">
            <div className={this.state.iconvisible?"search-icon":"search-icon d-none" }data-reactid=".0.1.0.0">
              <i className="fas fa-search"></i>
            </div>
            {this.state.books.map((book, i) => {
                const url=`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
                console.log(url)
              return (
                <>
                <figure key={i} className="details-open">
                
                {console.log(this.state.open)}
                  <div className="perspective">
                    <div className="book">
                      <div className="cover">
                        <div className="front" style={{background:`url(${url}) 0% 0% /100% 100% no-repeat`,width:'170px',height:'220px'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="buttons acquista">
                    <button className='btn btn-outline-warning btn-lg'><a target="_blank" href={book.volumeInfo.infoLink}>acquista</a></button>
                  </div>
                  <figcaption>
                    <h2>{book.volumeInfo.title}</h2>
                    <h4>{book.volumeInfo.authors}</h4>
                    <span>{book.volumeInfo.publishedDate}</span>
                  </figcaption>
                  <Modal open={this.state.open === book.id} title={book.volumeInfo.title}
                     close={()=>this.closeModal(book.id)} info={book.volumeInfo.description}/>
                  <div className="buttons">
                    <button onClick={()=>this.openModal(book.id)} className='btn btn-outline-info'>info</button>
                  </div>
                </figure>
                
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ListaBooks;
