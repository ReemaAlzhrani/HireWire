// Handle Freelancer Registration
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
  
    // Capture form inputs
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const skills = document.getElementById("skills").value;
  
    // Display a success message
    alert(`Thank you, ${fullName}! Your registration was successful.\n\nDetails:\nEmail: ${email}\nSkills: ${skills}`);
  
    // Redirect to the job application page
    window.location.href = "job_application.html";
  });
  
  // Handle Job Application Submission
  document.getElementById("jobForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
  
    // Redirect to Thank You page
    window.location.href = "thank_you.html";
  });
  
