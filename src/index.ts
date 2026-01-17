export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
		<body>
		  <h1>Coming Soon: Suffolk Weather dot com</h1>
		  <p>Good things come to those who bookmark.</p>
		</body>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
