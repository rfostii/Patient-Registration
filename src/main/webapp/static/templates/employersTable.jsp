<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<a href="#addEmployer"><button class="btn btn-primary btn-lg">Add New Employer</button></a>
<form class="navbar-form navbar-right" role="search">
    <div class="form-group">
        <input type="text" class="form-control search-field" placeholder="Search">
    </div>
</form>
<div class="panel panel-default" id="employers">
    <div class="panel-heading">Employers List</div>
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Stage</th>
            <th>Zip</th>
            <th>Phone Number</th>
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