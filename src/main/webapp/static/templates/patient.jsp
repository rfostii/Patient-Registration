<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<a href="#patient/{{>id}}">
    <div class="left">{{:firstName}}</div>
    <div class="left">{{:lastName}}</div>
    <div class="left">{{:ssn}}</div>
    <div class="left">{{:dateBirth}}</div>
    <div class="left">{{:gender}}</div>
    <div class="left">{{:maritalStatus}}</div>
    <div class="left">{{:race}}</div>
    <div class="left">{{:religion}}</div>
    <div class="left">{{:language}}</div>
    <div class="left">{{:contact.address}}</div>
    <div class="left">{{:contact.city}}</div>
    <div class="left">{{:contact.stage}}</div>
    <div class="left">{{:contact.zip}}</div>
    <div class="left">{{:contact.phoneNumber}}</div>
    <div class="left">{{:employer.name}}</div>
</a>
