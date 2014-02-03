<form class="form-horizontal" role="form">
    <div class="form-group">
        <label for="name" id="name" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-10">
            <input type="text" name="name" class="form-control" placeholder="Name" value="{{if data.name}}{{>data.name}}{{/if}}">
        </div>
    </div>
    <div class="form-group">
        <label for="contact" id="contact" class="col-sm-2 control-label">Address</label>
        <div class="col-sm-10">
            <select class="form-control" name="contact" placeholder="Select Address">
                {{for contacts}}
                    <option value="{{>id}}">{{>address}}, {{>city}}, {{>stage}}, {{>zip}}, {{>phoneNumber}}</option>
                {{/for}}
            </select>
        </div>
    </div>
    <div class="modal-footer">
        <button type="reset" class="btn btn-default" data-dismiss="modal">Reset</button>
        <button type="submit" class="btn btn-primary save-model">Save</button>
    </div>
</form>
