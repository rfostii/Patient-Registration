<form class="form-horizontal" role="form">
    <div class="form-group firstName">
        <label for="firstName" id="firstName" class="col-sm-2 control-label">First Name</label>
        <div class="col-sm-10">
            <div class="help-block error"></div>
            <input type="text" name="firstName" class="form-control" placeholder="First Name" value="{{if data.firstName}}{{>data.firstName}}{{/if}}">
        </div>
    </div>
    <div class="form-group lastName">
        <label for="lastName" id="lastName" class="col-sm-2 control-label">Last Name</label>
        <div class="col-sm-10">
            <div class="help-block error"></div>
            <input type="text" name="lastName" class="form-control" placeholder="Last Name" value="{{if data.lastName}}{{>data.lastName}}{{/if}}">
        </div>
    </div>
    <div class="form-group ssn">
        <label for="ssn" id="ssn" class="col-sm-2 control-label">SSN</label>
        <div class="col-sm-10">
            <div class="help-block error"></div>
            <input type="text" name="ssn" class="form-control" placeholder="SSN" value="{{if data.ssn}}{{>data.ssn}}{{/if}}">
        </div>
    </div>
    <div class="form-group dateBirth">
        <label for="dateBirth" id="dateBirth" class="col-sm-2 control-label">Date Birth</label>
        <div class="col-sm-10">
            <div class="help-block error"></div>
            <input type="date" name="dateBirth" class="form-control" placeholder="Date Birth" value="{{if data.dateBirth}}{{>data.dateBirth}}{{/if}}">
        </div>
    </div>
    <div class="form-group gender">
        <label for="gender" id="gender" class="col-sm-2 control-label">Gender</label>
        <div class="col-sm-10">
            <div class="help-block error"></div>
            <select class="form-control" name="gender">
                <option value="male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
    </div>
    <div class="form-group maritalStatus">
        <label for="martial-status" id="martial-status" class="col-sm-2 control-label">Marital status</label>
        <div class="col-sm-10">
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
        <div class="col-sm-10">
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
        <div class="col-sm-10">
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
        <div class="col-sm-10">
            <div class="help-block error"></div>
            <input type="text" name="language" class="form-control" placeholder="Language" value="{{if data.language}}{{>data.language}}{{/if}}">
        </div>
    </div>
    <div class="form-group contact">
        <label for="contact" id="contact" class="col-sm-2 control-label">Address</label>
        <div class="col-sm-10">
            <div class="help-block error"></div>
            <select class="form-control" name="contact" placeholder="Select Address">
                {{for contacts}}
                <option value="{{>id}}">{{>city}}, {{>address}},
                    {{>stage}}, {{>zip}}, {{>phoneNumber}}
                </option>
                {{/for}}
            </select>
        </div>
    </div>
    <div class="form-group employer">
        <label for="employer" id="employer" class="col-sm-2 control-label">Employer</label>
        <div class="col-sm-10">
            <div class="help-block error"></div>
            <select class="form-control" name="employer" placeholder="Select Address">
                {{for employers}}
                <option value="{{>id}}">{{>name}}, {{>contact.city}}, {{>contact.address}},
                    {{>contact.stage}}, {{>contact.zip}}, {{>contact.phoneNumber}}
                </option>
                {{/for}}
            </select>
        </div>
    </div>
    <div class="modal-footer">
        <button type="reset" class="btn btn-default" data-dismiss="modal">Reset</button>
        <button type="submit" class="btn btn-primary save-model">Save</button>
    </div>
</form>
