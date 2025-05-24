// // FormPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function FormPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     image: null,
//     dropdown: '',
//     age: 25,
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === 'image' ? files[0] : value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name required';
//     if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Valid email required';
//     if (!formData.image) newErrors.image = 'Image required';
//     if (!formData.dropdown) newErrors.dropdown = 'Select an option';
//     return newErrors;
//   };

//   const handleSubmit = () => {
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       navigate('/result', { state: formData });
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>React App - Demo</h2>
//       <div className="field">
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         {errors.name && <small>{errors.name}</small>}
//       </div>
//       <div className="field">
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         {errors.email && <small>{errors.email}</small>}
//       </div>
//       <div className="field">
//         <label>Image:</label>
//         <input type="file" name="image" accept="image/*" onChange={handleChange} />
//         {errors.image && <small>{errors.image}</small>}
//       </div>
//       <div className="field">
//         <label>Dropdown:</label>
//         <select name="dropdown" value={formData.dropdown} onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="React">React</option>
//           <option value="Vue">Vue</option>
//           <option value="Angular">Angular</option>
//         </select>
//         {errors.dropdown && <small>{errors.dropdown}</small>}
//       </div>
//       <div className="field">
//         <label>Age: {formData.age}</label>
//         <input type="range" name="age" min="10" max="100" value={formData.age} onChange={handleChange} />
//       </div>
//       <button onClick={handleSubmit}>Next</button>
//     </div>
//   );
// }

// export default FormPage;
import React from 'react';

const FormPage = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="form-container fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Professional Information Form
          </h1>
          <p className="text-lg text-gray-600">
            Please fill out all the fields to create your professional profile
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          {/* Personal Information Section */}
          <div className="form-section">
            <h2>👤 Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div>
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              
              <div className="md:col-span-2 lg:col-span-1">
                <label className="form-label">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., American, Canadian"
                />
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <div className="form-section">
            <h2>🏠 Address Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="form-label">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="123 Main Street, Apt 4B"
                />
              </div>
              
              <div>
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="New York"
                />
              </div>
              
              <div>
                <label className="form-label">State/Province</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="NY"
                />
              </div>
              
              <div>
                <label className="form-label">ZIP/Postal Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="10001"
                />
              </div>
              
              <div>
                <label className="form-label">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Professional Information Section */}
          <div className="form-section">
            <h2>💼 Professional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="form-label">Current Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Software Developer"
                />
              </div>
              
              <div>
                <label className="form-label">Company/Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Tech Corp Inc."
                />
              </div>
              
              <div>
                <label className="form-label">Years of Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="15+">15+ years</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Expected Annual Salary ($)</label>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="75000"
                  min="0"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="form-label">Key Skills (comma-separated)</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="JavaScript, React, Node.js, Python, SQL"
                />
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="form-section">
            <h2>🎓 Education Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="form-label">Highest Education Level</label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select Education Level</option>
                  <option value="High School">High School Diploma</option>
                  <option value="Associate">Associate Degree</option>
                  <option value="Bachelor">Bachelor's Degree</option>
                  <option value="Master">Master's Degree</option>
                  <option value="PhD">PhD/Doctorate</option>
                  <option value="Professional">Professional Certification</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">University/Institution</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="University of Technology"
                />
              </div>
              
              <div>
                <label className="form-label">Graduation Year</label>
                <input
                  type="number"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="2020"
                  min="1950"
                  max="2030"
                />
              </div>
            </div>
          </div>

          {/* Work Preferences Section */}
          <div className="form-section">
            <h2>⚙️ Work Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="form-label">Preferred Work Type</label>
                <select
                  name="workType"
                  value={formData.workType}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select Work Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Availability</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select Availability</option>
                  <option value="Immediate">Immediate</option>
                  <option value="2 weeks">2 weeks notice</option>
                  <option value="1 month">1 month notice</option>
                  <option value="2 months">2 months notice</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Willing to Relocate?</label>
                <select
                  name="relocation"
                  value={formData.relocation}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe</option>
                  <option value="For right opportunity">For the right opportunity</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="form-section">
            <h2>📝 Additional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Hobbies & Interests</label>
                <textarea
                  name="hobbies"
                  value={formData.hobbies}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="3"
                  placeholder="Reading, Photography, Traveling, Sports..."
                />
              </div>
              
              <div>
                <label className="form-label">Languages Spoken</label>
                <textarea
                  name="languages"
                  value={formData.languages}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="3"
                  placeholder="English (Native), Spanish (Fluent), French (Basic)..."
                />
              </div>
              
              <div>
                <label className="form-label">Professional References</label>
                <textarea
                  name="references"
                  value={formData.references}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="3"
                  placeholder="Available upon request or provide contact details..."
                />
              </div>
              
              <div>
                <label className="form-label">Additional Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="3"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary text-lg px-12 py-4"
            >
              Next: View Summary & Analysis →
            </button>
            <p className="text-sm text-gray-500 mt-4">
              * Required fields must be filled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;