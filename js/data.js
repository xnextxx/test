// KhurjaX Data File
// This file can be used for additional JavaScript functionality if needed

// The main functionality is now integrated into each HTML file
// This file can be used for:
// - Additional data processing
// - Common utility functions
// - Analytics or tracking code
// - Additional features not included in the main HTML

// Example of a potential utility function:
function formatPhoneNumber(phone) {
    // Format phone number for display
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}

// Example of a potential data validation function:
function validateFormData(data) {
    // Validate form data before submission
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push("Name must be at least 2 characters");
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push("Valid email is required");
    }
    
    return errors;
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatPhoneNumber,
        validateFormData,
        isValidEmail
    };
}