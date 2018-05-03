$(() => {
	$("#updateForm").on("submit", function(e){
		e.preventDefault();
		let id = $(this).data("id");

		$.ajax(`/${id}/update`, {
				type: "PUT",
				data: {
					name: $("#nameInput").val().trim(),
					eaten: parseInt($("[name=eatenRadio]:checked").val())
				}
			})
			.then(data => window.location.replace("/"))
	})
})