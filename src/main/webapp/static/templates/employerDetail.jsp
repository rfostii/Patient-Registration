<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<ul class="list-group">
    <li class="list-group-item active"><p>Employer Data</p></li>
    <li class="list-group-item"><strong>Name:</strong> {{>name}}</li>
    <li class="list-group-item"><strong>Address:</strong> {{>contact.address}}</li>
    <li class="list-group-item"><strong>City:</strong> {{>contact.city}}</li>
    <li class="list-group-item"><strong>Phone Number:</strong> {{>contact.phoneNumber}}</li>
    <li class="list-group-item"><strong>Stage:</strong> {{>contact.stage}}</li>
    <li class="list-group-item"><strong>Zip:</strong> {{>contact.zip}}</li>
</ul>
