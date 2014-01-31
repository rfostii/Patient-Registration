<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <title>Patient Registration</title>
        <link rel="stylesheet" href="<c:url value="/static/frameworks/bootstrap/dist/css/bootstrap.min.css"/>">
        <link rel="stylesheet" href="<c:url value="/static/frameworks/bootstrap/dist/css/bootstrap-theme.min.css"/>">
    </head>
    <body>
        <div id="wrapper" style="position: relative; width: 1400px; margin: auto">
            <nav class="navbar navbar-default" role="navigation">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Patient Registration</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="top-panel">
                    <ul class="nav navbar-nav">
                        <li><a href="#users" data-modal-form="modalUser">Users</a></li>
                        <li><a href="#employers"  data-modal-form="modalEmployer">Employers</a></li>
                        <li><a href="#contacts"  data-modal-form="modalContact">Contacts</a></li>
                    </ul>
                    <form class="navbar-form navbar-right" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control search-field" placeholder="Search">
                        </div>
                    </form>
                </div>
            </nav>
            <div id="popup-content" style="display: none;">
                <button class="btn btn-primary btn-lg open-form" data-toggle="modal" data-target="#myModal"></button>
                <div id="popup-form">

                </div>
            </div>
            <div id="content"></div>
        </div>
        <script type="text/javascript" data-main="<c:url value="/static/js/main.js"/>" src="<c:url value="/static/frameworks/requirejs.js"/>"></script>
    </body>
</html>