export const Foot = () =>{
    return `
        <footer class="masai-footer">
        <div class="footer-container">
            
            <div class="footer-section footer-social">
                <div class="footer-logo">
                    <img src="https://cdn.masaischool.com/masai-website/masai_dark_853075d7cd.png" alt="Masai Logo" class="logo-image">
                    <!-- <span class="logo-text">masai.</span> -->
                </div>
                <p class="follow-us">Follow us</p>
                <div class="social-icons">
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>

            <div class="footer-main-content">
                <div class="footer-nav-columns">
                    <div class="nav-column">
                        <h4 class="nav-heading">Institute Partners</h4>
                        <ul class="nav-list">
                            <li><a href="#">Daksh Gurukul, IIT Guwahati</a></li>
                            <li><a href="#">CCE, IIT Mandi</a></li>
                            <li><a href="#">IIM Mumbai</a></li>
                            <li><a href="#">Vishlesan I-Hub, IIT Patna</a></li>
                            <li><a href="#">IIM Sirmur</a></li>
                            <li><a href="#">TIHAN - IIT Hyderabad</a></li>
                            <li><a href="#">BITSOM</a></li>
                            <li><a href="#">IIM Trichy</a></li>
                            <li><a href="#">XLRI</a></li>
                            <li><a href="#">iHUB DivyaSampark, IIT Roorkee</a></li>
                        </ul>
                    </div>

                    <div class="nav-column">
                        <h4 class="nav-heading">Masai</h4>
                        <ul class="nav-list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Our Investors</a></li>
                            <li><a href="#">Newsroom</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div class="nav-column">
                        <h4 class="nav-heading">Community</h4>
                        <ul class="nav-list">
                            <li><a href="#">Success Stories</a></li>
                            <li><a href="#">Hire From Us</a></li>
                            <li><a href="#">Talent Circle</a></li>
                            <li><a href="#">Industry Mentors</a></li>
                            <li><a href="#">Become Coach</a></li>
                        </ul>
                    </div>

                    <div class="nav-column">
                        <h4 class="nav-heading">Resources</h4>
                        <ul class="nav-list">
                            <li><a href="#">Masai Blog</a></li>
                            <li><a href="#">MisogAI</a></li>
                            <li><a href="#">Placed</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-cta">
                    <p class="cta-text">Connect with a growing community of learners</p>
                    <a href="#" class="telegram-button">
                        Join our Telegram 
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div class="footer-copyright">
                <p>&copy; 2025 by Masai School | A Nolan Edutech Pvt Ltd Venture</p>
            </div>
        </div>
    </footer>`
}



export const FootStyle = () =>{
    return`
    body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    }
    /* Footer Css  */
    .masai-footer {
        background-color: #000;
        width: 100%;
        color: #fff;
        padding: 50px 0 20px 0;
    }

    .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    /*
    * Social Media Section (Left Column)
    */
    .footer-social {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 40px;
    }

    .footer-logo {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .logo-text {
        font-size: 24px;
        font-weight: 700;
        color: #fff;
    }

    .follow-us {
        font-size: 14px;
        color: #fff;
        margin-bottom: 15px;
    }

    .social-icons {
        display: flex;
        gap: 15px;
    }

    .social-icons a {
        color: #a0a0a0;
        font-size: 18px;
        transition: color 0.3s;
    }

    .social-icons a:hover {
        color: #fff;
    }

    /*
    * Main Content: Link Columns and CTA Button (Flex layout)
    */
    .footer-main-content {
        display: flex;
        justify-content: space-between;
        padding-bottom: 40px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    /*
    * Navigation Columns (Grid layout for responsive columns)
    */
    .footer-nav-columns {
        display: grid;
        grid-template-columns: repeat(4, 1fr); 
        gap: 40px;
    }

    .nav-heading {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 20px;
        letter-spacing: 0.5px;
    }

    .nav-list {
        list-style: none;
        padding: 0;
    }

    .nav-list li {
        margin-bottom: 15px;
    }

    .nav-list a {
        text-decoration: none;
        color: #a0a0a0;
        font-size: 14px;
        transition: color 0.3s;
    }

    .nav-list a:hover {
        color: #fff;
    }

    /*
    * CTA Section (Right Column)
    */
    .footer-cta {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 40px;
    }

    .cta-text {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        line-height: 1.4;
        max-width: 250px;
        margin-bottom: 25px;
    }

    .telegram-button {
        display: inline-flex;
        align-items: center;
        padding: 12px 25px;
        background-color: #ea2945;
        color: #fff;
        text-decoration: none;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        transition: background-color 0.3s;
    }

    .telegram-button i {
        margin-left: 10px;
        font-size: 14px;
    }

    /* Button Hover Effect */
    .telegram-button:hover {
        background-color: #c71e35;
    }

    /*
    * Copyright Section (Bottom Row)
    */
    .footer-copyright {
        padding-top: 20px;
        text-align: left;
    }

    .footer-copyright p {
        font-size: 12px;
        color: #a0a0a0;
    }
    `
}
