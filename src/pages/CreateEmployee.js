import "./pages.css";
import { states, department } from "../data/data";
import Headline from "../components/Headline";
import Modal from "../components/Modal";
import { addEmployee } from "../lib/redux/mySlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function CreateEmployee(props) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [selectedOptionState, setSelectedOptionState] = useState('Alabama');
  const [selectedOptionDepartment, setSelectedOptionDepartment] = useState('Sales');

  const handleSelectState = (option) => {
    setSelectedOptionState(option.value);
  };
  const handleSelectDepartment = (option) => {
    setSelectedOptionDepartment(option.value);
  };

  let form = [{}];

  const handleSubmit = (event) => {
    event.preventDefault();
    form = {...form,"state": selectedOptionState};
    form = {...form,"department": selectedOptionDepartment};
    dispatch(addEmployee(form));
  };

  let typingForm;
  const handleChange = (event) => {
    //Récupérations des données tapés dans le formulaire
    typingForm = { ...typingForm, [event.target.name]: event.target.value };
    form = typingForm;
  };



  const values = states.map((item) => item[Object.keys(item)[0]]);

  return (
    <>
      <main>
        <Headline title="Create Employee" />
        <form id="create-employee" onSubmit={handleSubmit}>
          <div className="all_employee">
            <div className="left_employee">
              <div className="title_left">
                <p className="Civility">Civility</p>
              </div>
              <div className="field_left">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="Enter first name"
                  onChange={handleChange}
                  required
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Enter last name"
                  onChange={handleChange}
                  required
                />

                <label htmlFor="dateBirth">Date of Birth</label>
                <input
                  id="date-of-birth"
                  type="date"
                  name="dateBirth"
                  placeholder="Enter date of birth"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="right_employee">
              <div className="title_right">
                <p className="Adress">Adress</p>
              </div>
              <div className="field_right">
                <label htmlFor="street">Street</label>
                <input
                  id="street"
                  type="text"
                  name="street"
                  placeholder="Enter the street"
                  required
                  onChange={handleChange}
                />

                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Enter the city"
                  required
                  onChange={handleChange}
                />

                <label htmlFor="state">State</label>
                <Dropdown options={values} onChange={handleSelectState} value={"Alabama"} placeholder="Select an option" name="state" required/>

                <label htmlFor="zipCode">Zip Code</label>
                <input
                  id="zip-code"
                  type="number"
                  name="zipCode"
                  placeholder="Enter the zip-code"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="All_assignment">
            <div className="card_assignment">
              <div className="title_assignment">
                <p className="Assignment">Assignment</p>
              </div>
              <div className="form_assignment">
                <label className="startDate" htmlFor="start-date">
                  Start Date
                </label>
                <input
                  id="start-date"
                  type="date"
                  name="startDate"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="department">Department</label>
                <Dropdown options={department} onChange={handleSelectDepartment} value={"Sales"} placeholder="Select an option" name="state" required/>;
                <button className="save-button">Save</button>
              </div>
            </div>
          </div>
        </form>
        <Modal />
        
      </main>
    </>
  );
}

export default CreateEmployee;
