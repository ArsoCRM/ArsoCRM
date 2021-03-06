/* {[The file is published on the basis of YetiForce Public License 3.0 that can be found in the following directory: licenses/LicenseEN.txt or yetiforce.com]} */
$.Class('Settings_Mail_Config_Js', {}, {
	registerChangeConfig() {
		const thisInstance = this;
		const container = $('.configContainer');
		container.on('change', '.configCheckbox', function () {
			const progressIndicator = $.progressIndicator();
			const params = {};
			params['module'] = app.getModuleName();
			params['parent'] = app.getParentModuleName();
			params['action'] = 'SaveAjax';
			params['mode'] = 'updateConfig';
			params['type'] = $(this).data('type');
			params['name'] = $(this).attr('name');
			params['val'] = this.checked;
			AppConnector.request(params).then(
				function (data) {
					progressIndicator.progressIndicator({'mode': 'hide'});
					var params = {};
					params['text'] = data.result.message;
					Settings_Vtiger_Index_Js.showMessage(params);
				},
				function (error) {
					progressIndicator.progressIndicator({'mode': 'hide'});
				}
			);
		});
	},
	registerSignature() {
		const container = $('#signature');
		new App.Fields.Text.Editor(container.find('.js-editor'), {
			height: '20em',
		});
		container.find('button').on('click', function () {
			const progressIndicator = $.progressIndicator();
			const editor = CKEDITOR.instances.signatureEditor;
			const params = {};
			params['module'] = app.getModuleName();
			params['parent'] = app.getParentModuleName();
			params['action'] = 'SaveAjax';
			params['mode'] = 'updateSignature';
			params['val'] = editor.getData();
			AppConnector.request(params).then(
				function (data) {
					progressIndicator.progressIndicator({'mode': 'hide'});
					Settings_Vtiger_Index_Js.showMessage({
						text: data.result.message
					});
				},
				function (error) {
					progressIndicator.progressIndicator({'mode': 'hide'});
				}
			);
		});
	},
	registerEvents() {
		const thisInstance = this;
		thisInstance.registerChangeConfig();
		thisInstance.registerSignature();
	},
});
