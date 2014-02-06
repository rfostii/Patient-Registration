<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<td>{{>address}}</td>
<td>{{>city}}</td>
<td>{{>stage}}</td>
<td>{{>zip}}</td>
<td>{{>phoneNumber}}</td>
<td>
    <a href="#editContact/{{>id}}">
        <img alt="edit" src="<c:url value="/static/img/edit.png"/>">
    </a>
    <a href="#removeContact/{{>id}}" class="remove">
        <img alt="remove" src="<c:url value="/static/img/remove.png"/>">
    </a>
</td>


