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
                <h3>Job Title 1</h3>
                <p>Company Name, Location <span>(Month Year - Month Year)</span></p>
                <ul>
                    <li>Responsibility/achievement 1</li>
                    <li>Responsibility/achievement 2</li>
                    <li>Responsibility/achievement 3</li>
                </ul>
            </div>
            <div class="job">
                <h3>Job Title 2</h3>
                <p>Company Name, Location <span>(Month Year - Month Year)</span></p>
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
                <h3>Degree Title</h3>
                <p>University Name, Location <span>(Month Year - Month Year)</span></p>
            </div>
            <div class="degree">
                <h3>Additional Certifications</h3>
                <p>Certification Name, Issuing Organization <span>(Month Year)</span></p>
            </div>
        </section>

        <section class="skills">
            <h2>Skills</h2>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
                <li>Skill 5</li>
            </ul>
        </section>
    </div>



  )
  
}
export default Arvind