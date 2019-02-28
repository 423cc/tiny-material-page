
function _ajaxGetClassificaton(instanceId)
{
	var defer = $.Deferred();
	$.ajax({
		method: 'GET',
		url: '/hwe/services/epm/rest/process/instance/tasks/' + instanceId,
		data: "withFutureTasks=true",
		dataType: "json",
		contentType: "application/json",
		xhrFields: {
			withCredentials: true // 携带跨域cookie
		},
		crossDomain: true,
	}).done(function (data, textStatus, request) {
		if (data != null) {
			defer.resolve(data);
			console.log(data)
		}
	}).fail(function (response) {
		defer.reject({error: true, msg: response.responseText});
	});
	return defer.promise();
}


