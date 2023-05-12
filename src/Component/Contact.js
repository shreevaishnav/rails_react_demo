import React, { useState } from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Contact() {
  const[fname, setfname ] = useState()
  const[lname, setlname ] = useState()
  const[gender, setgender ] = useState()
  const[email, setmail ] = useState()
  const[address, setAddress] = useState()
  const[contact_no, setctno] = useState()
  const[description, setdesc] = useState()
  const[city, setcity] = useState()
  const[zip, setzip] = useState()
  const[country, setcountry] = useState()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (d) => {
    axios.post('http://localhost:3000/contact_infos', d )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
      navigate("/About");
  }

  
    const displaygender = () => {
      if(document.getElementById('radioMale').checked) { 
        setgender({gender:'Male'}) 
      }
      if(document.getElementById('radioFemale').checked) { 
        setgender({gender:'Female'})
      }
      console.log(gender)
    }

  return (
    <>
    <h1>Contact</h1>
    <div className="container">
  <div className="text-align:center">
    <h2>Let's Catchup</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    <div class="col-6">
      <img src="https://www.w3schools.com/w3images/map.jpg" alt='map' height="500px" width='500px' />
    </div>
    <div class="col-6">

    <form onSubmit={handleSubmit(onSubmit)}>

      <div class="mb-3">
        <label className="form-label" for="inputfname">First Name</label>
        <input type="text" class="form-control" id="inputfname" placeholder="First Name" value={fname} onChange={(e) => setfname(e.target.value)}  {...register("fname", { required: true, maxLength: 40 })}/>
        <b className='text-danger'>{errors.fname && <p>Please check the First Name</p>}</b>
      </div>
      <div class="mb-3">
        <label className='form-label' for="inputlname">Last Name</label>
        <input type="text" class="form-control" id="inputlname" placeholder="Last Name" value={lname} onChange={(e) => setlname(e.target.value)} {...register("lname", { required: true, maxLength: 40 })}/>
        <b className='text-danger'>{errors.lname && <p>Please check the Last Name</p>}</b>
      </div> 

      <div class="mb-3">
        <input type="radio" class="form-check-input" name="gender" id="radioMale" onClick={displaygender} />
        <label className="form-check-label" for="radioMale">Male</label>
      </div>
      <div class="mb-3 ms-3">
        <input type="radio" class="form-check-input" name="gender" id="radioFemale"  onClick={displaygender}/>
        <label className="form-check-label" for="radioFemale">Female</label>
      </div><br></br>
      <div class="mb-3">
        <label className="form-label" for="inputEmail">Email</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={email} onChange={(e) => setmail(e.target.value)} {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
        <b className='text-danger'>{errors.email && <p>Please enter Valid Email</p>}</b>
      </div>
      <div class="mb-3">
        <label class="form-label" for="inputAddress">Street Address</label>
        <input type="address" class="form-control" id="inputAddress" placeholder="House No., Apartment, suite" value={address} onChange={(e) => setAddress(e.target.value)} {...register("address", { required: true, maxLength: 60 })}/>
        <b className='text-danger'>{errors.address && <p>Please fill the valid Address</p>}</b>
      </div><br></br>
      <div class="row g-3">
        <div class="col-6">
          <input type="text" class="form-control" placeholder="City" value={city} onChange={(e) => setcity(e.target.value)} {...register("city", { required: true, maxLength: 50 })} />
          <b className='text-danger'>{errors.city && <p>Please enter valid city name</p>}</b>
        </div>
        <div class="col-4">
          <select class="form-select" value={country} onChange={(e) => setcountry(e.target.value)} {...register("country", { required: true, maxLength: 40 })} >
            <option>Country</option>
            <option>India</option>
            <option>Australia</option>
            <option >Canada</option>
            <option >USA</option>
          </select>
          <b className='text-danger'>{errors.country && <p>Select any country</p>}</b>
        </div>
        <div class="col-2">
          <input type="text" class="form-control" placeholder="Zip" value={zip} onChange={(e) => setzip(e.target.value)} {...register("zip", { required: true, maxLength: 6, pattern: /^[0-9\b]+$/ })} />
          <b className='text-danger'>{errors.zip && <p>Zip no is not valid</p>}</b>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="inputno">Contact No.</label>
        <input type="text" class="form-control" placeholder="Number" value={contact_no} onChange={(e) => setctno(e.target.value)} {...register("contact_no", { required: true, maxLength: 10, pattern: /^[0-9\b]+$/ })} />
        <b className='text-danger'>{errors.contact_no && <p>Please enter valid Contact No.</p>}</b>
      </div>
      <div>
      <label class="form-label" for="inputdesc">Description</label>
      <textarea type="text" class="form-control"  id="inputdesc"  placeholder="Write something.." height="500px" width='500px' value={description} onChange={(e) => setdesc(e.target.value)} ></textarea>
      </div><br></br>
      <button  type="submit" class="btn btn-primary" >Submit</button>  
    </form>
    </div>
  </div>
</div>
    </>
  )
}
export default Contact
