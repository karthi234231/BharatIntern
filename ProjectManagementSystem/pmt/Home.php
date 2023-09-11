<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PMS/Home</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <link rel=”stylesheet” href=”https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css” />
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>

<body>

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <img src="img\logo1.png" class="logo"> <a class="navbar-brand" href="OpeningPage.php"
                    style="font-size:2.4rem;">
                </a>
            </div>
            <div class="navs">
                <ul class="nav navbar-nav " style="font-size: 1.8rem;">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="skeleton/OpeningPage.php">Track</a></li>
                    <li><a href="main.php">Tools</a></li>
                    <li><a href="#">Teambox</a></li>
                    <li><a href="#">Project Status</a></li>
                    <div class="dropdown">
                        <li> <img src="img/user.png" onclick="myFunction()" class="dropbtn" class="user-icon"></li>
                        <div id="myDropdown" class="dropdown-content">
                            <a href="skeleton/Login.php">Login</a>
                            <a href="#">Profile</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </ul>
            </div>
            <form class="navbar-form navbar-left">
                <div class=" input-group">
                    <input type="text" class="form-control" placeholder="Search" name="search">
                    <div class="input-group-btn">
                        <button class="btn btn-default" type="submit">
                            <i class="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </nav>
    <div class="Home-main">
        <div class="offers-nav">
            <p>
                Your’s Presence is now completely virtual.
                <b>Save Time <img src="./img/arrow-icon-1162.png" class="arrow-btn" style="height: 30px;"></b>
            </p>
        </div>
    </div>
    <div class="main-home-head">
        <div class="home-header" style="width: 70%;">
            Project Management System Built for Improved Collaboration
        </div>
        <a href="index.php">
            <button class="home-btn">Get Started</button></a>
        <div class="offer">Free trail. No credit card required.</div>
    </div>


    <!--    Features Section    -->
    <section class="features" id="features" style="scroll-behavior:smooth;">
        <div class="feature-head">
            One platform,<br>infinite possibilities.
        </div>
        <div class="feature-all-lists">
            <div class="feature-list">
                <hr class="hr" style="width: 200px; ">
                <h3>Team Project Status report
                </h3>
                <p>Create an outline of your project. Using the outline make a structure for your status report.</p>
            </div>
            <div class="feature-list">
                <hr class="hr" style="width: 200px; ">
                <h3>Task Progress
                </h3>
                <p>A process is an upper level description of a series of major steps required to accomplish an
                    objective.</p>
            </div>
            <div class="feature-list">
                <hr class="hr" style="width: 200px; ">
                <h3>Task review
                </h3>
                <p>Review the tasks given as on progress and completed.In the PMS portal.</p>
            </div>
        </div>
        <button class="home-btn feature-btn">Get Started</button>

    </section>
    <script>
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }


    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    </script>

</body>

</html>