<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">User form</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="address" id="address" class="col-sm-2 control-label">Address</label>
                        <div class="col-sm-10">
                            <input type="text" name="address" class="form-control" placeholder="Address" value="{{if address}}{{>address}}{{/if}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="city" id="city" class="col-sm-2 control-label">City</label>
                        <div class="col-sm-10">
                            <input type="text" name="city" class="form-control" placeholder="City" value="{{if city}}{{>city}}{{/if}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="stage" id="stage" class="col-sm-2 control-label">Stage</label>
                        <div class="col-sm-10">
                            <input type="text" name="stage" class="form-control" placeholder="Stage" value="{{if stage}}{{>stage}}{{/if}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="zip" id="zip" class="col-sm-2 control-label">Zip</label>
                        <div class="col-sm-10">
                            <input type="text" name="zip" class="form-control" placeholder="Zip" value="{{if zip}}{{>zip}}{{/if}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="phone-number" id="phone-number" class="col-sm-2 control-label">Phone Number</label>
                        <div class="col-sm-10">
                            <input type="text" name="phoneNumber" class="form-control" placeholder="Phone Number" value="{{if phoneNumber}}{{>phoneNumber}}{{/if}}">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary save-model">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>