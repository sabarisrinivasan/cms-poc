
export async function load({ params, fetch }) {
  const { slug } = params;
  try {
    const response = await fetch(`http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
    
    if (!response.ok) {
      throw new Error('blog not found');
    }
    
    const data = await response.json();
    console.log(data)
    return {
      article: data.data
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
}