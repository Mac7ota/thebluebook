
import './App.css';
import IconPrimary from './assets/BlueBook.svg';
import ProView from './assets/ProView.png';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Email from 'emailjs-com';
import { BrowserRouter as Router } from 'react-router-dom';


const validationSchema = Yup.object({
  firstname: Yup.string()
    .required('Required')
    .matches(/^[A-Za-z]+$/, "Must be only letters"),
  lastname: Yup.string()
    .required('Required')
    .matches(/^[A-Za-z]+$/, "Must be only letters"),
  companyname: Yup.string()
    .required('Required'),
  companyemail: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  companyphone: Yup.string()
    .matches(/^(?:\+1)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Invalid phone number")
    .required('Required'),
  zipcode: Yup.string()
    .matches(/^\d{5}(?:[-\s]\d{4})?$/, "Invalid ZIP code")
    .required('Required'),
  ssnorien: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN")
    .required('Required'),
});

function App() {
  const basename = window.location.hostname === 'mac7ota.github.io' ? '/thebluebook' : '/';
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      companyname: '',
      companyemail: '',
      companyphone: '',
      zipcode: '',
      ssnorien: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        To: 'recipient@example.com',
        From: "sender@example.com",
        Subject: "New form submission",
        Body: JSON.stringify(values, null, 2),
      }).then(
        message => alert(message)
      );
    },
  });

  return (
    <Router basename={basename}>    
    <div className="App">
      <nav className='containerNav'>
        <img src={IconPrimary} alt='Primary icon' />
      </nav>

      <div className='containerText'>
        <h2>Subcontractor Jobs</h2>
        <p className='weight'>Showcase Your Services. Get Leads. Grow Your Business.</p>

        <p >Grow your company awareness and showcase your services todecision makers in the largets commercial construction network</p>

        <p className='weight'>Leverage the unique reach of The Blue Book Network with your own powerful ProView®.</p>

        <p><strong>What is ProView®?</strong> Your company’s powerful digital profile positioned clearly for buyers to find you. You decide what to showcase for construction pros to find and engage with you.</p>

        <ul>
          <li><strong>Direct Invitations to Bid</strong> from buyers looking for your service</li>
          <li><strong>Access to Project</strong> Leads through BidScope; The Blue Book Network’s project search engine</li>
          <li><strong>Premier Positioning </strong>within your selected Classifications</li>
        </ul>

        <p><strong>With ProView</strong>® your company is positioned in front of buyers to generate greater demand and grow pipeline. This means that your information will be shared among key contacts when their project needs you.</p>


        <u>Get started today. </u>

        <p>The Blue Book’s local Business Development Consultant will work directly with you to capture your story and share it across the network!</p>


      </div>


      <form className='containerForm' onSubmit={formik.handleSubmit}>
        <div className='containerItems'>
          <img src={ProView} alt='ProView' />
        </div>

        <label htmlFor='firstname'>First Name *</label>
        <input
          type='text'
          id='firstname'
          name='firstname'
          onChange={formik.handleChange}
          value={formik.values.firstname}
          required
        />
        <label htmlFor='lastname'>Last Name *</label>
        <input
          type='text'
          id='lastname'
          name='lastname'
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
        <label htmlFor='companyname'>Company Name *</label>
        <input
          type='text'
          id='companyname'
          name='companyname'
          onChange={formik.handleChange}
          value={formik.values.companyname}
          required
        />
        <label htmlFor='companyemail'>Company Email *</label>
        <input
          type='email'
          id='companyemail'
          name='companyemail'
          onChange={formik.handleChange}
          value={formik.values.companyemail}
          required
        />
        <label htmlFor='companyphone'>Company Phone *</label>
        <input
          type='tel'
          id='companyphone'
          name='companyphone'
          onChange={formik.handleChange}
          value={formik.values.companyphone}
          required
        />
        <label htmlFor='zipcode'>Zip Code *</label>
        <input
          type='text'
          id='zipcode'
          name='zipcode'
          onChange={formik.handleChange}
          value={formik.values.zipcode}
          required
        />
        <label htmlFor='ssnorien'>SSN or EIN *</label>
        <input
          type='text'
          id='ssnorien'
          name='ssnorien'
          onChange={formik.handleChange}
          value={formik.values.ssnorien}
          required
        />

        <select id="business_type" name="business_type" className="ub-input-item single form_elem_business_type" required><option value="">Business Type</option><option value="Advertising">Advertising</option><option value="Architect">Architect</option><option value="Building or Project Owner/Developer">Building or Project Owner/Developer</option><option value="Building Product Manufacturer">Building Product Manufacturer</option><option value="Construction Management">Construction Management</option><option value="Consultant">Consultant</option><option value="Distributor">Distributor</option><option value="Education">Education</option><option value="Engineering">Engineering</option><option value="Equipment/Tools">Equipment/Tools</option><option value="Facilities">Facilities</option><option value="Financial/Insurance/Legal">Financial/Insurance/Legal</option><option value="Fire Protection/Pipefitting">Fire Protection/Pipefitting</option><option value="General Contractor">General Contractor</option><option value="Government">Government</option><option value="Highway and Heavy Construction">Highway and Heavy Construction</option><option value="Real Estate">Real Estate</option><option value="Rental Management">Rental Management</option><option value="Safety and Security">Safety and Security</option><option value="Software/Technology">Software/Technology</option><option value="Subcontractor">Subcontractor</option><option value="Subcontractor - Metal Work">Subcontractor - Metal Work</option><option value="Trade Association/Union">Trade Association/Union</option><option value="Transportation">Transportation</option><option value="Utility">Utility</option></select>



        <p>We specialize in commercial construction only We dont offer a service for Residential Construction or job-seeking opportunities</p>

        <span className='noterms'>Must be licensed and insured.</span>

        <div><button type='submit'>CONNECT WITH US</button>
        </div>

        <a href='https://www.thebluebook.com/company/privacy-policy.html'>Terms of Use & Privacy Policy</a>

      </form>


      <div className='containerFooter'>
        <img src={IconPrimary} alt='Primary icon' />
        <p>We are present in all states across the United States. Our headquarters is located at 34 Crosby Drive Suite 202, Bedford, MA 01730.</p>

        <p>Call Us:  <strong>888.720.1710</strong></p>

        <a href="mailto:info@thebluebook.com">info@thebluebook.com</a>
      </div>

    </div>
    </Router>
  );
}

export default App;
