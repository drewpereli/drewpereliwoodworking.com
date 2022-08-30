const { VITE_CONTENTFUL_ACCESS_KEY, VITE_CONTENTFUL_SPACE_ID } = import.meta.env;

export default async function loadProjectImages(): Promise<ProjectImage[]> {
  const query = `
	{
		projectImageCollection{
			items {
				sys {id}
				image {url}
			}
		}
	}
`;

  const response = await window.fetch(`https://graphql.contentful.com/content/v1/spaces/${VITE_CONTENTFUL_SPACE_ID}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${VITE_CONTENTFUL_ACCESS_KEY}`,
    },
    body: JSON.stringify({ query }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    throw errors;
  }

  return data.projectImageCollection.items;
}
