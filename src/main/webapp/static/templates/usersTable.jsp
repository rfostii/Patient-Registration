<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="modal"></div>
<form class="navbar-form navbar-left" role="search" id="search-form">
    <div class="form-group">
        <input type="text" class="form-control search-field" placeholder="Search">
    </div>
    <table class="search-result table"></table>
</form>
<div class="panel panel-default" id="users">
    <div class="panel-heading">
        <a href="#addUser"><button class="btn btn-primary">Add New User</button></a>
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>#</th>
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