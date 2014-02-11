<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<ul class="list-group">
    <li class="list-group-item bg-info">
        <p class="left">Patient Data</p>
        <a href="#editPatient/{{>id}}" class="edit navbar-right">
            <img alt="edit" src="<c:url value="/static/img/edit.png"/>">
        </a>
        <div class="clear"></div>
    </li>
    <li class="list-group-item"><strong>First Name:</strong> {{>firstName}}</li>
    <li class="list-group-item"><strong>Last Name:</strong> {{>lastName}}</li>
    <li class="list-group-item"><strong>SSN:</strong> {{>ssn}}</li>
    <li class="list-group-item"><strong>Date:</strong> Birth {{>dateBirth}}</li>
    <li class="list-group-item"><strong>Gender:</strong> {{>gender}}</li>
    <li class="list-group-item"><strong>Marital:</strong> Status {{>maritalStatus}}</li>
    <li class="list-group-item"><strong>Race:</strong> {{>race}}</li>
    <li class="list-group-item"><strong>Religion:</strong> {{>religion}}</li>
    <li class="list-group-item"><strong>Language:</strong> {{>language}}</li>
    <li class="list-group-item bg-info"><p>Contact</p></li>
    <li class="list-group-item"><strong>Address:</strong> {{>address}}</li>
    <li class="list-group-item"><strong>City:</strong> {{>city}}</li>
    <li class="list-group-item"><strong>State:</strong> {{>state}}</li>
    <li class="list-group-item"><strong>Zip:</strong> {{>zip}}</li>
    <li class="list-group-item"><strong>Phone Number:</strong> {{>phoneNumber}}</li>
    <li class="list-group-item bg-info"><p>Employer</p></li>
    <li class="list-group-item"><strong>Name:</strong> {{>employer.name}}</li>
</ul>

