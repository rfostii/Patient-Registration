<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<form class="form-horizontal" role="form">
    <div class="form-group firstName">
        <label for="firstName" id="firstName" class="col-sm-2 control-label">First Name</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="firstName" class="form-control" placeholder="First Name" value="{{if data.firstName}}{{>data.firstName}}{{/if}}">
        </div>
    </div>
    <div class="form-group lastName">
        <label for="lastName" id="lastName" class="col-sm-2 control-label">Last Name</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="lastName" class="form-control" placeholder="Last Name" value="{{if data.lastName}}{{>data.lastName}}{{/if}}">
        </div>
    </div>
    <div class="form-group ssn">
        <label for="ssn" id="ssn" class="col-sm-2 control-label">SSN</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="ssn" class="form-control" placeholder="SSN" value="{{if data.ssn}}{{>data.ssn}}{{/if}}">
        </div>
    </div>
    <div class="form-group dateBirth">
        <label for="dateBirth" id="dateBirth" class="col-sm-2 control-label">Date Birth</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="date" name="dateBirth" class="form-control" placeholder="Date Birth" value="{{if data.dateBirth}}{{>data.dateBirth}}{{/if}}">
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
            <input type="text" name="language" class="form-control" placeholder="Language" value="{{if data.language}}{{>data.language}}{{/if}}">
        </div>
    </div>
    <div class="modal-footer col-sm-10">
        <button type="submit" class="btn btn-primary save-model">Save</button>
    </div>
</form>
<div class="clear"></div>
<div>
    <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
            <input type="text" class="form-control search-field" placeholder="Search" value="">
        </div>
        <div class="search-result"></div>
        <div class="bad-search-result display-none">
            <div>Nothing found</div>
            <a href="#addNew" class="left">Add New</a>
        </div>
    </form>
    <img alt="Loading..." width="50" class="navbar-right display-none loading-indicator" src="<c:url value="/static/img/loading-indicator.gif"/>">
</div>
<form class="form-horizontal display-none" role="form">
    <div class="form-group address">
        <label for="address" id="address" class="col-sm-2 control-label">Address</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="address" class="form-control" placeholder="Address" value="{{if data.contact.address}}{{>address}}{{/if}}">
        </div>
    </div>
    <div class="form-group city">
        <label for="city" id="city" class="col-sm-2 control-label">City</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="city" class="form-control" placeholder="City" value="{{if data.contact.city}}{{>data.contact.city}}{{/if}}">
        </div>
    </div>
    <div class="form-group stage">
        <label for="stage" id="stage" class="col-sm-2 control-label">Stage</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="stage" class="form-control" placeholder="Stage" value="{{if data.contact.stage}}{{>data.contact.stage}}{{/if}}">
        </div>
    </div>
    <div class="form-group zip">
        <label for="zip" id="zip" class="col-sm-2 control-label">Zip</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="zip" class="form-control" placeholder="Zip" value="{{if data.contact.zip}}{{>data.contact.zip}}{{/if}}">
        </div>
    </div>
    <div class="form-group phoneNumber">
        <label for="phone-number" id="phone-number" class="col-sm-2 control-label">Phone Number</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="phoneNumber" class="form-control" placeholder="Phone Number" value="{{if data.contact.phoneNumber}}{{>data.contact.phoneNumber}}{{/if}}">
        </div>
    </div>
    <div class="modal-footer col-md-10">
        <button type="submit" class="btn btn-primary save-model">Save</button>
    </div>
</form>
<div class="clear"></div>
<div>
    <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
            <input type="text" class="form-control search-field" placeholder="Search" value="">
        </div>
        <div class="search-result"></div>
        <div class="bad-search-result display-none">
            <div>Nothing found</div>
            <a href="#addNew" class="left">Add New</a>
        </div>
    </form>
    <img alt="Loading..." width="50" class="navbar-right display-none loading-indicator" src="<c:url value="/static/img/loading-indicator.gif"/>">
</div>
<form class="form-horizontal display-none" role="form">
    <div class="form-group name">
        <label for="name" id="name" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-8">
            <div class="help-block error"></div>
            <input type="text" name="name" class="form-control" placeholder="Name" value="{{if data.employer.name}}{{>data.employer.name}}{{/if}}">
        </div>
    </div>
    <div class="modal-footer col-md-10">
        <button type="submit" class="btn btn-primary save-model">Save</button>
    </div>
</form>

