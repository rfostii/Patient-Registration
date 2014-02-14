<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<td>
    <div class="panel panel-default">
        <div class="panel-heading">{{:firstName}}  {{:lastName}}</div>
        <div class="panel-body">
            <table class="table">
                <tr>
                    <td><strong class="gray">SSN</strong><p>{{:ssn}}</p></td>
                    <td><strong class="gray">Date Birth</strong><p>{{:dateBirth}}</p></td>
                    <td><strong class="gray">Gender</strong><p>{{:gender}}</p></td>
                    <td><strong class="gray">Marital Status</strong><p>{{:maritalStatus}}</p></td>
                    <td><strong class="gray">Religion</strong><p>{{:religion}}</p></td>
                    <td><strong class="gray">Language</strong><p>{{:language}}</p></td>
                </tr>
                <tr>
                    <td><strong class="gray">Address</strong><p>{{:address}}</p></td>
                    <td><strong class="gray">City</strong><p>{{:city}}</p></td>
                    <td><strong class="gray">State</strong><p>{{:state}}</p></td>
                    <td><strong class="gray">Phone Number</strong><p>{{:phoneNumber}}</p></td>
                    <td><strong class="gray">Employer</strong><p>{{:employer.name}}</p></td>
                </tr>
            </table>
        </div>
    </div>
</td>


