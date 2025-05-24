// // ResultPage.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function ResultPage() {
//   const { state } = useLocation();

//   if (!state) return <h2>No data to display</h2>;

//   const imageURL = state.image ? URL.createObjectURL(state.image) : '';

//   return (
//     <div className="result-card">
//       <h2>Submitted Data</h2>
//       <p><strong>Name:</strong> {state.name}</p>
//       <p><strong>Email:</strong> {state.email}</p>
//       <p><strong>Selected Option:</strong> {state.dropdown}</p>
//       <p><strong>Age:</strong> {state.age}</p>
//       {imageURL && <img src={imageURL} alt="Uploaded" width="150" />}
//     </div>
//   );
// }

// export default ResultPage;
import React from 'react';

const ResultsPage = ({ formData, handleBack, resetForm }) => {
  // Calculate form completion and analytics
  const calculateAnalytics = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(value => 
      value && value.toString().trim() !== ''
    ).length;
    const completionPercentage = Math.round((filledFields / totalFields) * 100);
    
    // Calculate age from date of birth
    const calculateAge = (birthDate) => {
      if (!birthDate) return null;
      const today = new Date();
      const birth = new Date(birthDate);
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      return age;
    };

    // Generate salary insights
    const getSalaryInsight = (salary) => {
      if (!salary) return 'Not specified';
      const salaryNum = parseInt(salary);
      if (salaryNum < 30000) return 'Entry Level Range';
      if (salaryNum < 60000) return 'Mid-Entry Level Range';
      if (salaryNum < 100000) return 'Mid-Level Range';
      if (salaryNum < 150000) return 'Senior Level Range';
      return 'Executive Level Range';
    };

    // Generate experience insight
    const getExperienceInsight = (experience) => {
      switch(experience) {
        case '0-1': return 'Entry Level Professional';
        case '2-3': return 'Junior Professional';
        case '4-5': return 'Mid-Level Professional';
        case '6-10': return 'Senior Professional';
        case '11-15': return 'Expert Professional';
        case '15+': return 'Industry Veteran';
        default: return 'Experience not specified';
      }
    };

    return {
      totalFields,
      filledFields,
      completionPercentage,
      age: calculateAge(formData.dateOfBirth),
      salaryInsight: getSalaryInsight(formData.salary),
      experienceInsight: getExperienceInsight(formData.experience),
      skillsCount: formData.skills ? formData.skills.split(',').filter(skill => skill.trim()).length : 0
    };
  };

  const analytics = calculateAnalytics();

  // Format currency
  const formatCurrency = (amount) => {
    if (!amount) return 'Not specified';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get completion color
  const getCompletionColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600 bg-green-100';
    if (percentage >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-8">
      <div className="results-container fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Profile Summary & Analysis
          </h1>
          <p className="text-lg text-gray-600">
            Complete overview of your professional profile
          </p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="summary-card text-center">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getCompletionColor(analytics.completionPercentage)}`}>
              {analytics.completionPercentage}% Complete
            </div>
            <h3 className="text-lg font-semibold mt-3 text-gray-700">Form Completion</h3>
            <p className="text-sm text-gray-500">{analytics.filledFields} of {analytics.totalFields} fields</p>
          </div>

          <div className="summary-card text-center">
            <div className="text-3xl font-bold text-blue-600">
              {analytics.age || 'N/A'}
            </div>
            <h3 className="text-lg font-semibold mt-2 text-gray-700">Age</h3>
            <p className="text-sm text-gray-500">Years old</p>
          </div>

          <div className="summary-card text-center">
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(formData.salary)}
            </div>
            <h3 className="text-lg font-semibold mt-2 text-gray-700">Expected Salary</h3>
            <p className="text-sm text-gray-500">{analytics.salaryInsight}</p>
          </div>

          <div className="summary-card text-center">
            <div className="text-3xl font-bold text-purple-600">
              {analytics.skillsCount}
            </div>
            <h3 className="text-lg font-semibold mt-2 text-gray-700">Skills Listed</h3>
            <p className="text-sm text-gray-500">{analytics.experienceInsight}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="info-grid">
            {/* Personal Information */}
            <div className="info-section">
              <h3>👤 Personal Information</h3>
              <div className="space-y-3">
                <div className="info-row">
                  <span className="info-label">Full Name:</span>
                  <span className="info-value">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{formData.email || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Phone:</span>
                  <span className="info-value">{formData.phone || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Date of Birth:</span>
                  <span className="info-value">{formData.dateOfBirth || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Gender:</span>
                  <span className="info-value">{formData.gender || 'Not specified'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Nationality:</span>
                  <span className="info-value">{formData.nationality || 'Not provided'}</span>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="info-section">
              <h3>🏠 Address Information</h3>
              <div className="space-y-3">
                <div className="info-row">
                  <span className="info-label">Street Address:</span>
                  <span className="info-value">{formData.address || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">City:</span>
                  <span className="info-value">{formData.city || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">State/Province:</span>
                  <span className="info-value">{formData.state || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">ZIP Code:</span>
                  <span className="info-value">{formData.zipCode || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Country:</span>
                  <span className="info-value">{formData.country || 'Not provided'}</span>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="info-section">
              <h3>💼 Professional Information</h3>
              <div className="space-y-3">
                <div className="info-row">
                  <span className="info-label">Occupation:</span>
                  <span className="info-value">{formData.occupation || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Company:</span>
                  <span className="info-value">{formData.company || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Experience:</span>
                  <span className="info-value">{formData.experience ? `${formData.experience} years` : 'Not specified'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Expected Salary:</span>
                  <span className="info-value">{formatCurrency(formData.salary)}</span>
                </div>
              </div>
            </div>

            {/* Education Information */}
            <div className="info-section">
              <h3>🎓 Education Information</h3>
              <div className="space-y-3">
                <div className="info-row">
                  <span className="info-label">Education Level:</span>
                  <span className="info-value">{formData.education || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">University:</span>
                  <span className="info-value">{formData.university || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Graduation Year:</span>
                  <span className="info-value">{formData.graduationYear || 'Not provided'}</span>
                </div>
              </div>
            </div>

            {/* Work Preferences */}
            <div className="info-section">
              <h3>⚙️ Work Preferences</h3>
              <div className="space-y-3">
                <div className="info-row">
                  <span className="info-label">Work Type:</span>
                  <span className="info-value">{formData.workType || 'Not specified'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Availability:</span>
                  <span className="info-value">{formData.availability || 'Not specified'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Willing to Relocate:</span>
                  <span className="info-value">{formData.relocation || 'Not specified'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          {formData.skills && (
            <div className="mt-8">
              <div className="info-section">
                <h3>🛠️ Skills & Expertise</h3>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.split(',').map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Additional Information Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {formData.hobbies && (
              <div className="info-section">
                <h3>🎯 Hobbies & Interests</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">{formData.hobbies}</p>
              </div>
            )}

            {formData.languages && (
              <div className="info-section">
                <h3>🗣️ Languages</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">{formData.languages}</p>
              </div>
            )}

            {formData.references && (
              <div className="info-section">
                <h3>📞 References</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">{formData.references}</p>
              </div>
            )}

            {formData.comments && (
              <div className="info-section">
                <h3>💭 Additional Comments</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">{formData.comments}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={handleBack}
              className="btn-secondary px-8 py-3"
            >
              ← Back to Form
            </button>
            <button
              onClick={resetForm}
              className="btn-primary px-8 py-3"
            >
              🔄 Start New Form
            </button>
            <button
              onClick={() => window.print()}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              🖨️ Print Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;