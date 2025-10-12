export async function load({ fetch }) {
	try {
		const response = await fetch('http://localhost:1337/api/blogs?populate=*&sort=publishedAt:desc');

		if (!response.ok) {
			throw new Error('Failed to fetch articles');
		}

		const data = await response.json();
       console.log(data.data)
		return {
			articles: data.data
		};
	} catch (error) {
		console.error('Error fetching articles:', error);
		return {
			articles: []
		};
	}
}
