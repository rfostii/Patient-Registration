<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="modal"></div>
<img alt="Loading..." width="50" class="navbar-right display-none loading-indicator" src="<c:url value="/static/img/loading-indicator.gif"/>">
<form class="navbar-form navbar-left" role="search" id="search-form">
    <div class="form-group">
        <input type="text" class="form-control search-field" placeholder="Search" value="">
    </div>
    <table class="search-result table"></table>
</form>
<div class="clear"></div>
<div class="display-none" id="new-patient">
    <div class="alert alert-info">
        <p>Can't find any patient! You can create new right now <a href="#addPatient">Add New Patient</a></p>
    </div>
</div>