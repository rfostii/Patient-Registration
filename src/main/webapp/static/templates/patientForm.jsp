<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<form class="form-horizontal" role="form">
    <div class="form-group firstName">
        <label for="firstName" id="firstName" class="col-sm-2 control-label">First Name</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="firstName" class="form-control"
                   placeholder="First Name" value="{{if firstName}}{{>firstName}}{{/if}}">
        </div>
    </div>
    <div class="form-group lastName">
        <label for="lastName" id="lastName" class="col-sm-2 control-label">Last Name</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="lastName" class="form-control"
                   placeholder="Last Name" value="{{if lastName}}{{>lastName}}{{/if}}">
        </div>
    </div>
    <div class="form-group ssn">
        <label for="ssn" id="ssn" class="col-sm-2 control-label">SSN</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="ssn" class="form-control" placeholder="SSN" value="{{if ssn}}{{>ssn}}{{/if}}">
        </div>
    </div>
    <div class="form-group dateBirth">
        <label for="dateBirth" id="dateBirth" class="col-sm-2 control-label">Date Birth</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="dateBirth" data-date-format="yyyy-mm-dd" class="form-control"
                   placeholder="Date Birth" value="{{if dateBirth}}{{>dateBirth}}{{/if}}">
        </div>
    </div>
    <div class="form-group gender">
        <label for="gender" id="gender" class="col-sm-2 control-label">Gender</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <select class="form-control" name="gender">
                <option value="male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
    </div>
    <div class="form-group maritalStatus">
        <label for="martial-status" id="martial-status" class="col-sm-2 control-label">Marital status</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <select class="form-control" name="maritalStatus">
                <option value="Married">Married</option>
                <option value="Living">Living</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
                <option value="Divorced">Divorced</option>
                <option value="Single">Single</option>
            </select>
        </div>
    </div>
    <div class="form-group race">
        <label for="race" id="race" class="col-sm-2 control-label">Race</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <select class="form-control" name="race">
                <option value="European">European</option>
                <option value="African">African</option>
                <option value="Amerindian">Amerindian</option>
            </select>
        </div>
    </div>
    <div class="form-group religion">
        <label for="religion" id="religion" class="col-sm-2 control-label">Religion</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <select class="form-control" name="religion">
                <option value="Christianity">Christianity</option>
                <option value="Islam">Islam</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Buddhism">Buddhism</option>
            </select>
        </div>
    </div>
    <div class="form-group language">
        <label for="language" id="language" class="col-sm-2 control-label">Language</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="language" class="form-control"
                   placeholder="Language" value="{{if language}}{{>language}}{{/if}}">
        </div>
    </div>
    <div class="form-group address">
        <label for="address" id="address" class="col-sm-2 control-label">Address</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="address" class="form-control"
                   placeholder="Address" value="{{if address}}{{>address}}{{/if}}">
        </div>
    </div>
    <div class="form-group city">
        <label for="city" id="city" class="col-sm-2 control-label">City</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="city" class="form-control" placeholder="City" value="{{if city}}{{>city}}{{/if}}">
        </div>
    </div>
    <div class="form-group state">
        <label for="state" id="state" class="col-sm-2 control-label">State</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="state" class="form-control" placeholder="State" value="{{if state}}{{>state}}{{/if}}">
        </div>
    </div>
    <div class="form-group zip">
        <label for="zip" id="zip" class="col-sm-2 control-label">Zip</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="zip" class="form-control" placeholder="Zip" value="{{if zip}}{{>zip}}{{/if}}">
        </div>
    </div>
    <div class="form-group phoneNumber">
        <label for="phone-number" id="phone-number" class="col-sm-2 control-label">Phone Number</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="phoneNumber" class="form-control"
                   placeholder="Phone Number" value="{{if phoneNumber}}{{>phoneNumber}}{{/if}}">
        </div>
    </div>
    <div class="form-group employer">
        <label for="employer" id="employer" class="col-sm-2 control-label">Employer</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="hidden" name="employer" value="{{if employer}}{{>employer.id}}{{/if}}">
            <img alt="Loading..." width="50"
                 class="navbar-right display-none loading-indicator" src="<c:url value="/static/img/loading-indicator.gif"/>">
            <input type="text" class="form-control search-field"
                   placeholder="Type Employer Name" value="{{if employer}}{{>employer.name}}{{/if}}">
            <table class="search-result table"></table>
            <div class="clear"></div>
            <div class="display-none" id="new-employer">
                <div class="alert alert-info">
                    <p>Can't find any employer! You can create new right now <a href="#addEmployer">Add New Employer</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer col-sm-10">
        <button type="submit" class="btn btn-primary save-model">Save</button>
    </div>
</form>
