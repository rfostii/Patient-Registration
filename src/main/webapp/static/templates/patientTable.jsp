<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="modal"></div>
<div id="detail">
    <span class="glyphicon glyphicon-remove close-detail pointer"></span>
    <div class="header"></div>
    <div class="content"></div>
</div>
<img alt="Loading..." width="50" class="navbar-right display-none loading-indicator" src="<c:url value="/static/img/loading-indicator.gif"/>">
<div class="panel panel-default" id="users">
    <div class="panel-heading">
        <a href="#addPatient"><button class="btn btn-primary">Add New Patient</button></a>
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>SSN</th>
                <th>Date Birth</th>
                <th>Gender</th>
                <th>Marital status</th>
                <th>Race</th>
                <th>Religion</th>
                <th>Language</th>
                <th>Address</th>
                <th>City</th>
                <th>Stage</th>
                <th>Zip</th>
                <th>Phone Number</th>
                <th>Employer</th>
                <th>
                    <img alt="Home logo" src="<c:url value="/static/img/edit.png"/>">
                    <img alt="Home logo" src="<c:url value="/static/img/remove.png"/>">
                </th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</div>