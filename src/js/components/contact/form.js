import validator from "validator";

export const useForm = () => {
  // Efficiently select form fields using CSS selectors
  const form = document.querySelector("#myForm"); // Assuming form has this ID

  // Get all input elements within the form
  const inputs = form.querySelectorAll(
    "input[type='text'], input[type='email']",
  );

  const validateForm = () => {
    let isValid = true; // Use a flag to track overall validity

    for (const input of inputs) {
      const { value, name } = input;

      // Enhanced validation with specific checks for each field:
      switch (name) {
        case "firstName":
        case "lastName":
          if (validator.isEmpty(value)) {
            isValid = false;
            setError(input, "This field is required."); // Example error handling
          } else {
            // Consider adding additional validation for name format (optional)
          }
          break;
        case "email":
          if (!validator.isEmail(value)) {
            isValid = false;
            setError(input, "Please enter a valid email address.");
          }
          break;
        case "phone": // Assuming phone number validation
          // Add phone number validation logic (e.g., regular expressions)
          break;
        default:
          // Handle unexpected input names (optional)
          break;
      }
    }

    return isValid; // Return the overall validity flag
  };

  // Add event listener to the entire form for validation on submit
  form.addEventListener("submit", (event) => {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if invalid
    }
  });

  return {
    validateForm,
  };
};

// Example error handling function (replace with your error handling mechanism)
function setError(input, message) {
  // Implement error display logic (e.g., add CSS class, show error message)
  console.error(`Error in ${input.name}: ${message}`);
}
