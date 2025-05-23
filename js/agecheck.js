// Replace the age verification check in your js/agecheck.js with this:

console.log('Age check script started');

// DEPLOYMENT TIMESTAMP - Set this to when you deployed the age verification
const AGE_CHECK_DEPLOYMENT_DATE = '2025-01-23'; // CHANGE THIS TO TODAY'S DATE

// Enhanced verification check that handles existing users
function needsAgeVerification() {
    const ageVerified = localStorage.getItem('ageVerified');
    const verificationDate = localStorage.getItem('ageVerificationDate');
    
    // If never verified at all, definitely need verification
    if (!ageVerified || ageVerified !== 'true') {
        console.log('User never verified - showing age check');
        return true;
    }
    
    // If verified but no date recorded, this is an OLD verification from before deployment
    // OR if verification date is before deployment, force re-verification
    if (!verificationDate || verificationDate < AGE_CHECK_DEPLOYMENT_DATE) {
        console.log('User verified before age check deployment - forcing re-verification');
        // Clear old verification
        localStorage.removeItem('ageVerified');
        localStorage.removeItem('ageVerificationDate');
        return true;
    }
    
    console.log('User properly verified after deployment - skipping age check');
    return false;
}

// Check if user needs age verification
if (needsAgeVerification()) {
    console.log('Showing age verification modal');
    
    // Get configuration values (with defaults)
    const siteConfig = window.siteConfig || {};
    const advanced = siteConfig.advanced || {};
    const minimumAge = advanced.ageCheckMinimum || 21;
    const redirectUrl = advanced.ageRedirectUrl || 'https://www.google.com';
    
    // Create modal immediately
    createAgeModal(minimumAge, redirectUrl);
} else {
    console.log('Age verification not needed');
}

function createAgeModal(minimumAge, redirectUrl) {
    // Remove any existing modal first
    const existingModal = document.getElementById('ageModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.id = 'ageModal';
    modal.className = 'age-verification-modal';
    
    modal.innerHTML = `
        <div class="age-modal-content">
            <div class="age-header">
                <h2>Age Verification Required</h2>
            </div>
            <div class="age-body">
                <p>You must be ${minimumAge} years or older to enter this site.</p>
                <p>Please read carefully and select the appropriate option:</p>
                <div class="age-buttons">
                    <button onclick="window.verifyAge(false)" class="age-no-disguised">
                        <span class="btn-text">I am NOT ${minimumAge}+ years old</span>
                    </button>
                    <button onclick="window.verifyAge(true)" class="age-yes-disguised">
                        <span class="btn-text">I am ${minimumAge}+ years old</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add styles (same as before - abbreviated for space)
    if (!document.getElementById('age-verification-styles')) {
        const style = document.createElement('style');
        style.id = 'age-verification-styles';
        style.textContent = `
            .age-verification-modal {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background-color: rgba(0,0,0,0.95); z-index: 99999;
                display: flex; justify-content: center; align-items: center;
            }
            .age-modal-content {
                background: linear-gradient(135deg, #1e2b20, #2a3f2c);
                border: 2px solid #3a7d44; border-radius: 12px;
                max-width: 500px; width: 90%; padding: 30px; text-align: center;
                color: #f2f7f3; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            }
            .age-header h2 { color: #f9c74f; font-size: 1.8rem; margin-top: 0; }
            .age-buttons { margin: 25px 0; display: flex; gap: 15px; flex-direction: column; }
            .age-buttons button {
                padding: 15px 20px; border: none; border-radius: 8px;
                font-weight: bold; cursor: pointer; font-size: 1.1rem;
            }
            .age-no-disguised { background: linear-gradient(135deg, #4CAF50, #2E7D32); color: white; }
            .age-yes-disguised { background: linear-gradient(135deg, #F44336, #B71C1C); color: white; }
            .btn-text { text-transform: uppercase; letter-spacing: 1px; }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Updated verification function that records the date
window.verifyAge = function(isOver21) {
    const siteConfig = window.siteConfig || {};
    const advanced = siteConfig.advanced || {};
    const redirectUrl = advanced.ageRedirectUrl || 'https://www.google.com';
    
    if (isOver21) {
        // Store verification with current date
        localStorage.setItem('ageVerified', 'true');
        localStorage.setItem('ageVerificationDate', new Date().toISOString().split('T')[0]); // YYYY-MM-DD
        
        const modal = document.getElementById('ageModal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
        
        console.log('Age verification passed and recorded');
    } else {
        console.log('Redirecting to:', redirectUrl);
        window.location.href = redirectUrl;
    }
};