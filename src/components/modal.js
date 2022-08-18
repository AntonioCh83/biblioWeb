import React, { Component } from 'react';

export class Modal extends Component {
   
  render() {
    return (
        <>
        { this.props.open &&(

        <section className={`modal-section ${this.props.open?'show-modal':''} `}>
        <div className='container modal-content'>
            <h3>
                {this.props.title}
            </h3>
            <p>{this.props.info?this.props.info.slice(0,300)+'...' :'descrizione non presente'}</p>
            <div className='container divbutton'>

             <button type='button' onClick={this.props.close}  className='btn btn-danger col-4 offset-4'>chiudi</button>
            </div>

        </div>
      
    </section>

    
        )

        }
        
      </>
    );
  }
}

export default Modal;



