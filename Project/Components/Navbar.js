export const Nav = () => {
  return `
    <section class="navbar">

        <div class="masai_img">

            <img src="https://cdn.masaischool.com/masai-website/masai_dark_853075d7cd.png" alt="masai-icon">

        </div>

        <div>

            <button class="btn-1">

                Our Courses

            </button>

            <h1>Misogi AI</h1>

            <h1>Placed</h1>

            <h1>Hire From US</h1>

            <h1>Success Stories</h1>

            <button class="btn-2" >
        
                Login/Sign up

            </button>

        </div>

    </section>
    `;
};

export const NavStyle = () => {
  return `
        body {
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    /* Navbar Part CSS */
    .navbar {
        background-color: #000000;
        border-radius: 50px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        margin: 20px auto;
        max-width: 1150px; 
        height: 70px; 
        padding: 0 30px; 
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .masai_img {
        margin-right: 40px; 
    }

    .masai_img img {
        height: auto;
        width: 114px;
        display: block;
    }

    .navbar > div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 30px; 
        flex-grow: 1;
        justify-content: center; 
        margin-left: 0;
    }

    .navbar h1 {
        color: #ffffff; 
        font-size: larger;
        font-weight: 500; 
        margin: 0;
        padding: 10px 0;
        cursor: pointer;
        background: none;
        border: none;
        transition: color 0.3s ease; 
        white-space: nowrap;
    }

    .navbar h1:hover {
        color: #e50000;
    }

    .navbar .btn-1 {
        background-color: #ffffff;
        color: #000000;
        border: none;
        border-radius: 50px;
        padding: 6px 15px; 
        font-size: large;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
        display: flex;
        align-items: center;
        white-space: nowrap;
        position: static;
        margin-right: 20px; 
    }

    .navbar .btn-1:hover {
        background-color: #f0f0f0;
    }

    .navbar .btn-1::after {
        content: '⌵';
        font-size: 0.75em; 
        margin-left: 5px;
        transform: translateY(1px);
        position: static;
    }

    .navbar .btn-2 {
        background-color: #ff0000;
        color: #ffffff;
        border: none;
        border-radius: 50px;
        padding: 8px 20px; 
        font-size: large;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        white-space: nowrap;
        margin-left: auto; 
    }

    .navbar .btn-2:hover {
        background-color: #ff3333;
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.5); 
        transform: scale(1.03);
    }
    `;
};
