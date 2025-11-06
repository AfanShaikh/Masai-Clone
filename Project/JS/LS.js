function showOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function hideOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function toggleForms(event, currentOverlayId, targetOverlayId) {
    event.preventDefault();
    hideOverlay(currentOverlayId);
    showOverlay(targetOverlayId);
}

document.addEventListener('DOMContentLoaded', () => {
    
    const SIGN_UP_ID = 'sign-up-overlay';
    const SIGN_IN_ID = 'sign-in-overlay';

    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const overlay = event.target.closest('.signup-overlay');
            if (overlay) {
                hideOverlay(overlay.id);
            }
        });
    });

    const signInLink = document.querySelector(`#${SIGN_UP_ID} a[href="../html/sign.html"]`);
    if (signInLink && signInLink.textContent.trim().toLowerCase().includes('sign in')) {
        signInLink.addEventListener('click', (e) => toggleForms(e, SIGN_UP_ID, SIGN_IN_ID));
    }

    const signUpLink = document.querySelector(`#${SIGN_IN_ID} a[href="../html/login.html"]`);
    if (signUpLink && signUpLink.textContent.trim().toLowerCase().includes('sign up')) {
        signUpLink.addEventListener('click', (e) => toggleForms(e, SIGN_IN_ID, SIGN_UP_ID));
    }
    
    const mainLoginButton = document.getElementById('main-login-btn'); 
    if (mainLoginButton) {
        mainLoginButton.addEventListener('click', () => showOverlay(SIGN_IN_ID));
    }
});