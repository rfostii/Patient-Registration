<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<td>{{:firstName}}</td>
<td>{{:lastName}}</td>
<td>{{:ssn}}</td>
<td>{{:dateBirth}}</td>
<td>{{:gender}}</td>
<td>{{:maritalStatus}}</td>
<td>{{:race}}</td>
<td>{{:religion}}</td>
<td>{{:language}}</td>
<td>{{:address}}</td>
<td>{{:city}}</td>
<td>{{:stage}}</td>
<td>{{:zip}}</td>
<td>{{:phoneNumber}}</td>
<td>{{:employer.name}}</td>
<td>
    <a href="#editPatient/{{>id}}" class="edit">
        <img alt="edit" src="<c:url value="/static/img/edit.png"/>">
    </a>
    <a href="#patient/{{>id}}" class="edit">
        <img alt="edit" width="20" src="<c:url value="/static/img/detail.png"/>">
    </a>
</td>
