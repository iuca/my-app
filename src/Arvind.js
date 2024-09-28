import React, { Component, useState } from 'react';

const Arvind = () => {
//   const [formValues, setFormValues] = useState([{name: "", email: ""}])
//   const handleChange = (i, e) => {
//     let newFormValues = [...formValues];
//     newFormValues[i][e.target.name] = e.target.value;
//     setFormValues(newFormValues);
//  }
    
//   const addFormFields = () => {
//     setFormValues([...formValues, { name: "", email: "" }])
//  }

//   const removeFormFields = (i) => {
//     let newFormValues = [...formValues];
//     newFormValues.splice(i, 1);
//     setFormValues(newFormValues)
//   }
//   const handleSubmit = (event) => {
//   event.preventDefault();
//   alert(JSON.stringify(formValues));
//   }
    
    return (
    //   <form  onSubmit={handleSubmit}>
    //     {formValues.map((element, index) => (
    //       <div className="form-inline" key={index}>
    //         <label>Name</label>
    //         <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
    //         <label>Email</label>
    //         <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
    //         {
    //           index ? 
    //             <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
    //           : null
    //         }
    //       </div>
    //     ))}
    //     <div className="button-section">
    //         <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
    //         <button className="button submit" type="submit">Submit</button>
    //     </div>
    // </form>
  

    <div class="container">
        <header>
            <h1>Arvind Kumar Gupta</h1>
            <img src='https://media.licdn.com/dms/image/v2/C5603AQFKU4BhYFhUMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1640344293754?e=1732752000&v=beta&t=EQlbeoQf3ieb0tC6nfeguT-Okpa5DnAITHInoz5REyI' 
            style={{width : "150px" ,float: "right",position: "absolute" ,top: "0" ,right: "21%"}}/>
            <p>Email: kumararvind213@gmail.com | Phone: 7411601025</p>
            <p>Location: Bangalore, India</p>
        </header>

        <section class="summary">
            <h2>Professional Summary</h2>
            <p>A brief summary of your skills, experience, and career goals. This section should highlight your strengths and what you bring to a potential employer.</p>
        </section>

        <section class="experience">
            <h2>Work Experience</h2>
            <div class="job">
                <h3>Senior Developer</h3>
                <p>Accenture pvt ltd, Bangalore <span>( 2024 - Current)</span></p>
                <ul>
                    <li>Responsibility/achievement 1</li>
                    <li>Responsibility/achievement 2</li>
                    <li>Responsibility/achievement 3</li>
                </ul>
            </div>
            <div class="job">
                <h3>Senior Developer</h3>
                <p>HCL Technology, Bangalore <span>(2021- 2024)</span></p>
                <ul>
                    <li>Responsibility/achievement 1</li>
                    <li>Responsibility/achievement 2</li>
                    <li>Responsibility/achievement 3</li>
                </ul>
            </div>
        </section>

        <section class="education">
            <h2>Education</h2>
            <div class="degree">
                <h3>MCA</h3>
                <p>Integral University, Lucknow <span>(2011 - 2014)</span></p>
            </div>
            <div class="degree">
                <h3>BCA</h3>
                <p>IISE, Lucknow <span>2010</span></p>
            </div>
        </section>

        <section class="skills">
            <h2>Skills</h2>
            <ul>
                <li>React js </li>
                <li>Angular</li>
                <li>Javascript</li>
                <li>jquery</li>
                <li>Typescript</li>
            </ul>
        </section>
    </div>



  )
  
}
export default Arvind