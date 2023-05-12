import React, { useEffect, useState } from 'react';
import axios from 'axios';


function About() {
  

    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/contact_infos')
        .then((response)=> setPosts(response.data));
        
    }, []);


    const handleDelete = (id)=> {
      console.log(id);
      axios.delete(`http://localhost:3000/contact_infos/${id}`)
      .then((response) => {
        console.log("hello")
          if (response.status === 204) {
            this.setState({
              data: this.state.data.filter((element) => element.id !== id),
            });
            alert('Contact deleted successfully')                 
          }
        })
        .catch((error) => {
          console.error(error);
        });
        window.location.reload(false);
    }
  


  return (
    
    <><h1>About</h1>
    <div class="about-me">
      <div class="about-me-text">
        <h2 class='text-warning'>I Love to Code.</h2>
        <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for new projects. I am a very good developer and I am always looking for new projects.</p>
      </div>
      <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="me" />
    </div>

    <table class="table">
      <thead>
        <tr>
          
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          {/* <th scope="col">Gender</th> */}
          <th scope="col">Address</th>
          <th scope="col">City</th>
          <th scope="col">Country</th>
          <th scope="col">Zip</th>
          <th scope="col">contact No</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
      {posts.map(element => (
      <tr key={element.id}>
          <td>{element.fname}</td>
          <td>{element.lname}</td>
          <td>{element.email}</td>
          {/* <td>{element.gender}</td> */}
          <td>{element.address}</td>
          <td>{element.city}</td>
          <td>{element.country}</td>
          <td>{element.zip}</td>
          <td>{element.contact_no}</td>
          <td>{element.description}</td>
          <td>
            <button type='button' className='btn btn-danger' onClick={ () => handleDelete(element.id) }>Delete</button>
          </td>
          
      </tr>
    ))}
       
      </tbody>
    </table>
    </>
  )
}

export default About
