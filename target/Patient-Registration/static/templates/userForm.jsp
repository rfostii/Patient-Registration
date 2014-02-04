<form class="form-horizontal" role="form">
    <div class="form-group">
        <label for="firstName" id="firstName" class="col-sm-2 control-label">First Name</label>
        <div class="col-sm-10">
            <input type="text" name="firstName" class="form-control" placeholder="First Name" value="{{if data.firstName}}{{>data.firstName}}{{/if}}">
        </div>
    </div>
    <div class="form-group">
        <label for="lastName" id="lastName" class="col-sm-2 control-label">Last Name</label>
        <div class="col-sm-10">
            <input type="text" name="lastName" class="form-control" placeholder="Last Name" value="{{if data.lastName}}{{>data.lastName}}{{/if}}">
        </div>
    </div>
    <div class="form-group has-success">
        <label for="ssn" id="ssn" class="col-sm-2 control-label">SSN</label>
        <div class="col-sm-10">
            <input type="text" name="ssn" class="form-control" placeholder="SSN" value="{{if data.ssn}}{{>data.ssn}}{{/if}}">
        </div>
    </div>
    <div class="form-group has-error">
        <label for="dateBirth" id="dateBirth" class="col-sm-2 control-label">Date Birth</label>
        <div class="col-sm-10">
            <input type="date" name="dateBirth" class="form-control" placeholder="Date Birth" value="{{if data.dateBirth}}{{>data.dateBirth}}{{/if}}">
        </div>
    </div>
    <div class="form-group">
        <label for="gender" id="gender" class="col-sm-2 control-label">Gender</label>
        <div class="col-sm-10">
            <input type="text" name="gender" class="form-control" placeholder="Gender" value="{{if data.gender}}{{>data.gender}}{{/if}}">
        </div>
    </div>
    <div class="form-group">
        <label for="martial-status" id="martial-status" class="col-sm-2 control-label">Marital status</label>
        <div class="col-sm-10">
            <input type="text" name="maritalStatus" class="form-control" placeholder="Marital status" value="{{if data.maritalStatus}}{{>data.maritalStatus}}{{/if}}">
        </div>
    </div>
    <div class="form-group">
        <label for="race" id="race" class="col-sm-2 control-label">Race</label>
        <div class="col-sm-10">
            <input type="text" name="race" class="form-control" placeholder="Race" value="{{if data.race}}{{>data.race}}{{/if}}">
        </div>
    </div>
    <div class="form-group">
        <label for="religion" id="religion" class="col-sm-2 control-label">Religion</label>
        <div class="col-sm-10">
            <input type="text" name="religion" class="form-control" placeholder="Religion" value="{{if data.religion}}{{>data.religion}}{{/if}}">
        </div>
    </div>
    <div class="form-group">
        <label for="language" id="language" class="col-sm-2 control-label">Language</label>
        <div class="col-sm-10">
            <input type="text" name="language" class="form-control" placeholder="Language" value="{{if data.language}}{{>data.language}}{{/if}}">
        </div>
    </div>
    <div class="form-group">
        <label for="contact" id="contact" class="col-sm-2 control-label">Address</label>
        <div class="col-sm-10">
            <select class="form-control" name="contact" placeholder="Select Address">
                {{for contacts}}
                <option value="{{>id}}">{{>city}}, {{>address}},
                    {{>stage}}, {{>zip}}, {{>phoneNumber}}
                </option>
                {{/for}}
            </select>
        </div>
    </div>
    <div class="form-group">
        <label for="employer" id="employer" class="col-sm-2 control-label">Employer</label>
        <div class="col-sm-10">
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
