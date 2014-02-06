<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="modal"></div>
<div id="detail">
    <span class="glyphicon glyphicon-remove close-detail pointer"></span>
    <div class="header"></div>
    <div class="content"></div>
</div>
<form class="navbar-form navbar-left" role="search" id="search-form">
    <div class="form-group">
        <input type="text" class="form-control search-field" placeholder="Search" value="">
    </div>
    <table class="search-result table"></table>
</form>
<div class="panel panel-default" id="employers">
    <div class="panel-heading">
        <a href="#addEmployer"><button class="btn btn-primary">Add New Employer</button></a>
    </div>
    <table class="table table-striped table-hover">
        <thead>
        <tr>
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