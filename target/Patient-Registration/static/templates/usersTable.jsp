<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="panel panel-default" id="users">
    <div class="panel-heading">Users List</div>
    <table class="table">
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