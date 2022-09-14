

class XrHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="l_header" id="header">
        <!-- nav -->
            <nav class="nav container">
                <!-- nav logo -->
                <div class="logo">
                    <a href="#" class="nav-logo"><img src="./img/logo_NoBG-removebg-preview 1.png" alt="" srcset=""></a>
                </div>
                <!-- nav menu -->
                <div class="nav-menu" id="nav-menu">

                    <!-- nav close -->
                    <div class="nav_close" id="nav_close">
                        <img src="./icons/icons8-close (1).svg" alt="">
                    </div>

                    <!-- nav list -->
                    <ul class="nav_list">
                        <li class="nav_item"><a href="./index.html" class="nav_link active" >Home</a></li>
                        <li class="nav_item"><a href="./about.html" class="nav_link">About</a></li>
                        <li class="nav_item"><a href="./blog.html" class="nav_link">Blog</a></li>
                        <li class="nav_item"><a href="./event.html" class="nav_link">Events</a></li>
                        <li class="nav_item"><a href="#shop" class="nav_link">Shop</a></li>
                    </ul>
                </div>

                <div class="nav-menu-other" id="nav-menu-other">
                    <!-- nav list -->
                    <ul class="nav_list">
                        <li class="nav_item"><a href="#" class="nav_link"><img src="./icons/Search.png" alt="" srcset=""></a></li>
                        <li class="nav_item"><a href="#" class="nav_link"><img src="./icons/profile.png" alt="" srcset=""></a></li>
                        <li class="nav_item"><a href="#" class="nav_link"><img src="./icons/cart.png" alt="" srcset=""></a></li>
                    </ul>
                </div>

                <!-- toggle btn -->
                <div class="nav_toggle" id="nav_toggle">
                    <!-- <i class="fa-light fa-bars"></i>
                    <i class="fa fa-bars"></i> -->
                    <img class="menu" src="./icons/Menu2.svg" alt="">
                </div>
            </nav>
        </header>
        `
    }
}

customElements.define('xr-header', XrHeader)

class XrFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">
            <div class="logo_teams">
                <div class="logo">
                    <img src="./img/logo_NoBG-removebg-preview 1.png" alt="" srcset="">
                    <p>...experience</p>
                </div>

                <p class="objective">Our primary objective is to provide the best XR opportunities in Africa</p>
                <div class="details">
                    <p><span>Phone: </span>+234.903.7333.323</p>
                    <p><span>Address</span><br>
                        Victoria Island, LAGOS Nigeria
                    </p>
                    <p><span>Working Hours</span><br>
                         Mn-Fr: 9am-10pm, St-Sn: 10am-9pm
                    </p>
                </div>
            </div>

            <div class="quicklinks">
                <h3>Quicklinks</h3>

                <ul class="list">
                    <li><a href="./about.html">About us</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="./event.html">Events</a></li>
                </ul>
            </div>

            <div class="resources">
                <h3>Resources</h3>

                <ul class="list">
                    <li><a href="#">FAQ's</a></li>
                    <li><a href="../contact.html">Contact Us</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>

            <div class="social_links">
                <h3>Socials</h3>

                <ul class="list">
                    <li><a href="#"><img src="./icons/Twitter.png" alt="" srcset=""><span>Twitter</span></a></li>
                    <li><a href="#"><img src="./icons/LinkedIn 2.png" alt="" srcset=""><span>LinkedIn</span></a></li>
                    <li><a href="#"><img src="./icons/Instagram.png" alt="" srcset=""><span>Instagram</span></a></li>
                    <li><a href="#"><img src="./icons/Facebook F.png" alt="" srcset=""><span>Facebook</span></a></li>
                    <li><a href="#"><img src="./icons/YouTube.png" alt="" srcset=""><span>YouTube</span></a></li>
                </ul>
            </div>
            
        </div>
        <p class="last">LEADXR. TECH 2022. &copy; All rights reserved</p>
    </footer>
        `
    }
}

customElements.define('xr-footer', XrFooter)


class XrHeader_item extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="l_header" id="header">
        <!-- nav -->
            <nav class="nav container">
                <!-- nav logo -->
                <div class="logo">
                    <a href="#" class="nav-logo"><img src="./img/logo_NoBG-removebg-preview 1.png" alt="" srcset=""></a>
                </div>
                <!-- nav menu -->
                <div class="nav-menu" id="nav-menu">

                    <!-- nav close -->
                    <div class="nav_close" id="nav_close">
                        <img src="./icons/icons8-close (1).svg" alt="">
                    </div>

                    <!-- nav list -->
                    <ul class="nav_list">
                        <li class="nav_item"><a href="./index.html" class="nav_link active" >Home</a></li>
                        <li class="nav_item"><a href="./about.html" class="nav_link">About</a></li>
                        <li class="nav_item"><a href="./blog.html" class="nav_link">Blog</a></li>
                        <li class="nav_item"><a href="./event.html" class="nav_link">Events</a></li>
                        <li class="nav_item"><a href="#shop" class="nav_link">Shop</a></li>
                    </ul>
                </div>

                <div class="nav-menu-other" id="nav-menu-other" style="opacity: 0;">
                    <!-- nav list -->
                    <ul class="nav_list">
                        <li class="nav_item"><a href="#" class="nav_link"><img src="./icons/Search.png" alt="" srcset=""></a></li>
                        <li class="nav_item"><a href="#" class="nav_link"><img src="./icons/profile.png" alt="" srcset=""></a></li>
                        <li class="nav_item"><a href="#" class="nav_link"><img src="./icons/cart.png" alt="" srcset=""></a></li>
                    </ul>
                </div>

                <!-- toggle btn -->
                <div class="nav_toggle" id="nav_toggle">
                    <!-- <i class="fa-light fa-bars"></i>
                    <i class="fa fa-bars"></i> -->
                    <img class="menu" src="./icons/Menu2.svg" alt="">
                </div>
            </nav>
        </header>
        `
    }
}

customElements.define('xr-header_item', XrHeader_item)

class XrFooter_item extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p class="last">LEADXR. TECH 2022. &copy; All rights reserved</p>
        </footer>
        `
    }
}

customElements.define('xr-footer_item', XrFooter_item)