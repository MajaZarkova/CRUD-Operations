sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.kpmg.crudapp.controller.View1", {
		onInit: function () {},

		oDataCall: function (oEvent) {
			var myModel = this.getView().getModel();
			if ("Create" == oEvent.oSource.mProperties.text) {
				var obj = {};
				obj.Id = this.getView().byId("uniqueid").getValue();
				obj.Name = this.getView().byId("nameid").getValue();
				obj.Email = this.getView().byId("emailid").getValue();
				obj.Mobile = this.getView().byId("mobid").getValue();
				myModel.create("/userdataSet", obj, {
					success: function (oData, oResponse) {
						alert("Record Created Successfully...");
					},
					error: function (err, oResponse) {
						alert("Error while creating record - "
							.concat(err.response.statusText));
					}
				});
			}
			if ("Update" == oEvent.oSource.mProperties.text) {
				var updateobj = {};
				updateobj.Id = this.getView().byId("uniqueid").getValue();
				updateobj.Name = this.getView().byId("nameid").getValue();
				updateobj.Email = this.getView().byId("emailid").getValue();
				updateobj.Mobile = this.getView().byId("mobid").getValue();
				var updateurl = "/userdataSet('" + this.getView().byId("uniqueid").getValue() + "')";

				myModel.update(updateurl, updateobj, {
					success: function (oData, oResponse) {
						alert("Record Updated Successfully...");
					},
					error: function (err, oResponse) {
						alert("Error while updating record - "
							.concat(err.response.statusText));
					}
				});
			}
			if ("Delete" == oEvent.oSource.mProperties.text) {
				var delurl = "/userdataSet('" + this.getView().byId("uniqueid").getValue() + "')";
				myModel.remove(delurl, {
					success: function (oData, oResponse) {
						alert("Record Removed Successfully...");
					},
					error: function (err, oResponse) {
						alert("Error while removing record - "
							.concat(err.response.statusText));
					}
				});
			}
		}
	});
});