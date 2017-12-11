<!doctype html>
<html class="no-js" lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Ministry of Foreign Affairs</title>
<meta name="description" content="">
<meta name="keywords" content="">

<link rel="stylesheet" href="css/foundation.css" />
<link rel="stylesheet" href="slick/slick.css"/>
<link rel="stylesheet" href="slick/slick-theme.css"/>
<link rel="stylesheet" href="fancybox/source/jquery.fancybox.css?v=2.1.5" />
<link rel="stylesheet" href="tinyscrollbar/simple/tinyscrollbar.css" type="text/css" media="screen"/>
<link rel="stylesheet" href="fontawesome/css/font-awesome.css">
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/responsive.css" />
<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
<link rel="icon" href="img/favicon.ico" type="image/x-icon">

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/jquery-ui.min.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="slick/slick.min.js"></script>
<script src="js/app.js"></script>
<script src="fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>
<script src="fancybox/source/helpers/jquery.fancybox-media.js"></script>

<script src="tinyscrollbar/simple/jquery.tinyscrollbar.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $('#scrollbar1').tinyscrollbar({ thumbSize: 150 });
    });
</script>
</head>
<?php
$bodyclass= explode('/', $_SERVER['REQUEST_URI']);
 ?>
<body class="<?php echo strstr(end($bodyclass), '.', true) ?: end($bodyclass); ?>">

<div class="off-canvas-wrapper">
  <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
    <div class="off-canvas position-left" id="offCanvas" data-off-canvas>

      <!-- Close button -->
      <button class="close-button" aria-label="Close menu" type="button" data-close>
        <span aria-hidden="true">&times;</span>
      </button>

      <!-- Menu -->
      <ul class="vertical menu off-canvas-menu">

        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About MFA</a></li>

        <li class="submenu">
          <a href="#">International Relations <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
          <ul class="subcontent">
            <!-- <li><a class="pagelink" href="#">International Relations</a></li> -->
            <li><a href="#">Country Relations</a></li>
            <li><a href="#">International Organisation</a></li>
            <li class="submenu">
              <a class="subparent" href="#">International Issues <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
              <ul class="subcontent level2">
                <li><a href="#">Counter Terrorism</a></li>
                <li><a href="#">Disarmament</a></li>
                <li><a href="#">International Peacekeeping</a></li>
                <li><a href="#">Small States</a></li>
                <li><a href="#">Sustainable Development</a></li>
                <li><a href="#">Climate Change</a></li>
              </ul>
            </li>

            <li class="submenu">
              <a class="subparent" href="#">Special Events <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
              <ul class="subcontent level2">
                <li><a href="#">Pedra Blanca</a></li>
                <li><a href="#">Water Agreements</a></li>
                <li><a href="#">Haze</a></li>
              </ul>
            </li>

          </ul>
        </li>

        <li class="submenu">
          <a href="embassies.html">Embassies <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
          <ul class="subcontent">
            <li><a class="pagelink" href="#">Embassies</a></li>
            <li><a href="#">Find A Singapore Embassy</a></li>
            <li><a href="#">Foreign Representatives to Singapore</a></li>
          </ul>
        </li>

        <li class="submenu">
          <a href="#">Services <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
          <ul class="subcontent">
            <li><a class="pagelink" href="#">Services</a></li>

            <li class="submenu">
              <a class="subparent" href="#">Singapore Citizens <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
              <ul class="subcontent level2">
                <li><a href="eregister.html">eRegister your trip</a></li>
                <li><a href="#">Legalise Documents</a></li>
                <li><a href="#">Travel Notices</a></li>
                <li><a href="#">Visa Information</a></li>
                <li><a href="#">Passport matters</a></li>
                <li><a href="help.html">I Need Help Overseas</a></li>
              </ul>
            </li>

            <li class="submenu">
              <a class="subparent" href="#">Visitors <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
              <ul class="subcontent level2">
                <li><a href="#">Visa Information</a></li>
                <li><a href="#">Passport matters</a></li>
              </ul>
            </li>

          </ul>
        </li>

        <li class="submenu">
          <a href="#">Newsroom <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
          <ul class="subcontent">
            <li><a class="pagelink" href="#">Newsroom</a></li>
            <li class="submenu">
              <a class="subparent" href="#">Updates <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
              <ul class="subcontent level2">
                <li><a href="press-release.html">Press Releases</a></li>
                <li><a href="#">Press Statements</a></li>
                <li><a href="event-listings.html">Events Listing</a></li>
                <li><a href="#">News Alerts</a></li>
                <li><a href="#">News Updates</a></li>
              </ul>
            </li>
            <li class="submenu">
              <a class="subparent" href="#">Resources <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
              <ul class="subcontent level2">
                <li><a href="">Publications</a></li>
                <li><a href="#">Photo Gallery</a></li>
              </ul>
            </li>
          </ul>
        </li>

        <li><a href="#">Careers</a></li>

   <!-- <li class="submenu"> -->
          <!-- <a href="#">More</a> -->
          <li>
          <ul style="display:block;" class="subcontent">
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </li>
        <!-- </li> -->


        <?php if (strlen($overseas)): ?>
            <h6>Overseas Misson</h6>
            <li><a href="#">Overview</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Country Relations</a></li>
            <li><a href="#">Visa Information</a></li>
            <li><a href="#">News & Events</a></li>
            <li><a href="#">Press Statements</a></li>
        <?php endif; ?>

      </ul>
    </div><!-- end class off-canvas -->

    <div class="off-canvas-content" data-off-canvas-content>
      <p class="float-left site-menu-button">
        <a class="" href="#" data-toggle="offCanvas"><i class="fa fa-bars" aria-hidden="true"></i></a>
      </p>
    	<p class="float-right search-button">
        <span class="mobile-search"><i class="fa fa-search" aria-hidden="true"></i></span>
      </p>

      <div class="searchshow">
        <div class="content">
          <div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
          <!-- <form lpformnum="1"> -->
            <form>
            <input type="text" placeholder="Search">

            <button type="submit" name="search">
              <i class="fa fa-search searchbuttona" aria-hidden="true"></i>
            </button>

          </form>
        </div>
      </div>

      <div class="searchshow" style="display: block;">
        <div class="content">
          <div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
          <!-- <form lpformnum="1"> -->
            <form>
            <input type="text" placeholder="Search">

            <button type="submit" name="search">
              <i class="fa fa-search searchbuttona" aria-hidden="true"></i>
            </button>

          </form>
        </div>
      </div>

		<header class="main-header">
			<div class="wrapper clearfix">
        <div class="row content">
  				<div class="site-logo float-left">
            <a class="desktop-logo" href="index.html">
              <img src="img/logo.png" alt="Ministry of Foreign Affairs Singapore">
            </a>
          </div>
          <div class="site-logo">
            <a class="mobile-logo" href="index.html">
              <img src="img/logo-mobile.png" alt="Ministry of Foreign Affairs Singapore">
            </a>
          </div>
          <div class="header-side float-right">
            <a href="#"><img class="lioncrest" src="img/sg-gov.png" alt="Singapore Government"></a>
            <ul class="small-menu">
              <li><a href="#">Feedback</a></li>
               <li><a href="#">Sitemap</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="links.html">Links</a></li>
            </ul>
            <div class="search-form">
              <div class="font-size">
                <span>Font size</span>
                <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a>
              </div>
              <form action="index.html" method="post">
                <input type="search" name="search" placeholder="Search..." id="expanding-search">
                <button type="submit" name="search_btn"><i class="fa fa-search" aria-hidden="true"></i></button>
              </form>
            </div>

            <!-- <span class="mobile-search float-right"><i class="fa fa-search" aria-hidden="true"></i></span> -->
          </div>
        </div>
				<nav class="site-menu-wrapper">
          <div class="row content">

            <ul class="site-menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About MFA</a></li>
              <li class="dropdown">
                <a href="#">International Relations <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                <div class="dropdown-content international-dropdown">
                  <div class="row">
                    <div class="columns large-3">
                      <h3>Country Relations</h3>
                      <p>Singapore has diplomatic ties with over 150 countries. Read more about the relationships and highlights between Singapore and other countries here.</p>
                      <a class="find-out-more" href="#">Find out more</a>
                    </div>
                    <div class="columns large-3">
                      <h3>International Organisation</h3>
                      <p>Singapore plays an active role in the regional and global communities such as UN, WTO, APEC, ASEAN. Read more about the different organisations, engagements and initiatives that Singapore is involved in.</p>
                      <a class="find-out-more" href="#">Find out more</a>
                    </div>
                    <div class="columns large-3">
                      <h3>International Issues</h3>
                      <ul>
                        <li><a href="#">Counter Terrorism</a></li>
                        <li><a href="#">Disarmament</a></li>
                        <li><a href="#">International Peacekeeping</a></li>
                        <li><a href="#">Small States</a></li>
                        <li><a href="#">Sustainable Development</a></li>
                        <li><a href="#">Climate Change</a></li>
                      </ul>
                    </div>
                    <div class="columns large-3">
                      <h3>Special Events</h3>
                      <ul>
                        <li><a href="#">Pedra Blanca</a></li>
                        <li><a href="#">Water Agreements</a></li>
                        <li><a href="#">Haze</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="dropdown">
                <a href="embassies.html">Embassies <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                <div class="dropdown-content embassies-dropdown">
                  <div class="row">
                    <div class="columns large-6">
                      <h3>Find A Singapore Embassy</h3>
                      <p>There are over 50 Singapore overseas missions world-wide. Locate your nearest embassy, high commission. Honorary Consulate-General/Consuls now.</p>
                      <a class="find-out-more" href="#">Locate Now</a>
                    </div>
                    <div class="columns large-6">
                      <h3>Foreign Representatives to Singapore</h3>
                      <p>There are 70 resident foreign HIgh Commissions and Embassies, 43 foreign Consular posts, and 11 International Organisations in Singapore.</p>
                      <a class="find-out-more" href="#">Locate Now</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="dropdown">
                <a href="#">Services <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                <div class="dropdown-content embassies-dropdown">
                  <div class="row">
                    <div class="columns large-6">
                      <h3>Singapore Citizens</h3>
                      <ul>
                        <li><a href="eregister.html">eRegister your trip</a></li>
                        <li><a href="#">Legalise Documents</a></li>
                        <li><a href="#">Travel Notices</a></li>
                        <li><a href="#">Visa Information</a></li>
                        <li><a href="#">Passport matters</a></li>
                        <li><a href="help.html">I Need Help Overseas</a></li>
                      </ul>
                    </div>
                    <div class="columns large-6">
                      <h3>Visitors</h3>
                      <ul>
                        <li><a href="#">Visa Information</a></li>
                        <li><a href="#">Passport matters</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="dropdown">
                <a href="#">Newsroom <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                <div class="dropdown-content embassies-dropdown">
                  <div class="row">
                    <div class="columns large-6">
                      <h3>Updates</h3>
                      <ul>
                        <li><a href="press-release.html">Press Releases</a></li>
                        <li><a href="#">Press Statements</a></li>
                        <li><a href="event-listings.html">Events Listing</a></li>
                        <li><a href="#">News Alerts</a></li>
                        <li><a href="#">News Updates</a></li>
                      </ul>
                    </div>
                    <div class="columns large-6">
                      <h3>Resources</h3>
                      <ul>
                        <li><a href="#">Publications</a></li>
                        <li><a href="#">Photo Gallery</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li><a href="#">Careers</a></li>
              <li class="soc-media-li">
                <ul class="social-media">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </li>
            </ul>
          </div>
				</nav>

			</div>
		</header>
<!-- End of Header -->
