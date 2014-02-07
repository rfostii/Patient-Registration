<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<ul class="list-group">
    <li class="list-group-item active"><a href="#editPatient/{{>id}}"><p>User Data</p></a></li>
    <li class="list-group-item"><strong>First Name:</strong> {{>firstName}}</li>
    <li class="list-group-item"><strong>Last Name:</strong> {{>lastName}}</li>
    <li class="list-group-item"><strong>SSN:</strong> {{>ssn}}</li>
    <li class="list-group-item"><strong>Date:</strong> Birth {{>dateBirth}}</li>
    <li class="list-group-item"><strong>Gender:</strong> {{>gender}}</li>
    <li class="list-group-item"><strong>Marital:</strong> Status {{>maritalStatus}}</li>
    <li class="list-group-item"><strong>Race:</strong> {{>race}}</li>
    <li class="list-group-item"><strong>Religion:</strong> {{>religion}}</li>
    <li class="list-group-item"><strong>Language:</strong> {{>language}}</li>
    <li class="list-group-item active"><p>Contact</p></li>
    <li class="list-group-item"><strong>Address:</strong> {{>contact.address}}</li>
    <li class="list-group-item"><strong>City:</strong> {{>contact.city}}</li>
    <li class="list-group-item"><strong>Stage:</strong> {{>contact.stage}}</li>
    <li class="list-group-item"><strong>Zip:</strong> {{>contact.zip}}</li>
    <li class="list-group-item"><strong>Phone Number:</strong> {{>contact.phoneNumber}}</li>
    <li class="list-group-item active"><p>Employer</p></li>
    <li class="list-group-item"><strong>Name:</strong> {{>employer.name}}</li>
</ul>

