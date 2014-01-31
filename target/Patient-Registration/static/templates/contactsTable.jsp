<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="panel panel-default" id="contacts">
    <div class="panel-heading">Contacts List</div>
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
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