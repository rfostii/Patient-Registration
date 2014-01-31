<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<td>{{:#index+1}}:</td>
<td>{{>name}}:</td>
<td>{{>contact.address}}</td>
<td>{{>contact.city}}</td>
<td>{{>contact.phoneNumber}}</td>
<td>{{>contact.stage}}</td>
<td>{{>contact.zip}}</td>
<td>
    <a href="#editContact/{{>id}}" class="edit">
        <img alt="edit" src="<c:url value="/static/img/edit.png"/>">
    </a>
    <a href="#removeContact/{{>id}}" class="remove">
        <img alt="remove" src="<c:url value="/static/img/remove.png"/>">
    </a>
</td>