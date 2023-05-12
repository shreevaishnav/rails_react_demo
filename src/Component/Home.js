import React from 'react'
import axios from 'axios';


import { useEffect } from 'react'

function Home() {
  
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <><h1>Home</h1>
    <main>
  <div className="intro">
    <h1>A Web Developer</h1>
    <p>I am a web developer and I love to create websites.</p>
    <button>Learn More</button>
  </div>
  <br></br>
  <div className="row">
    <div className="col-4">
      <div className="work">
        <i className="fas fa-atom"></i>
        <p className="work-heading"><h3>Projects</h3></p>
        <p className="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
        <img src="https://images.unsplash.com/photo-1580894896813-652ff5aa8146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwY29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="me" />
      </div>
    </div>
    <div className="col-4">
      <div className="work">
        <i className="fas fa-skiing"></i>
        <p className="work-heading"><h3>Skills</h3></p>
        <p className="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.</p>
        <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXB1dGVyJTIwY29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="me" />
      </div>
    </div>
    <div className="col-4">
      <div className="work">
        <i className="fas fa-ethernet"></i>
        <p className="work-heading"><h3>Network</h3></p>
        <p className="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
        <img src="https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyJTIwY29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="me" />
      </div>
    </div>
  </div>

  
</main>
    </>

  )
}
export default Home
