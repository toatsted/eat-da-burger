$(() => {
	$("#addBurger").on("submit", (e) => {
		e.preventDefault();

		$.ajax("/", {
			type: "POST",
			data: {
				name: $("#burgerInput").val().trim()
			},
			success: data => location.reload()
		})
	})
});