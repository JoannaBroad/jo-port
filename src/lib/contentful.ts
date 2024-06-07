const SPACE = import.meta.env.CONTENTFUL_SPACE_ID
const TOKEN = import.meta.env.CONTENTFUL_DELIVERY_TOKEN

// async function apiCall(query, variables) {
//   const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${TOKEN}`,
//     },
//     body: JSON.stringify({ query, variables }),
//   }
//   return await fetch(fetchUrl, options)
// }
async function apiCall({ query, variables }: { query: string, variables?: Record<string, any> }): Promise<any> {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  }
  const response = await fetch(fetchUrl, options);
  const data = await response.json();
  console.log(data); // Add this line
  return data;
}


async function getAllProjects() {

  const query = `
    {
        joannaProjectCollection {
          items {
            sys {
                id
            }
            title
            description
            skill{
              url
              description
            }
            skill2{
              url
              description
            }
            skill3{
              url
              description
            }
            skill4{
              url
              description
            }
            coverImage {
              url
              description
            }
            gitLink
            siteLink
          }
        }
      }`;
      const data = await apiCall({ query });
      console.log(data)
      return data.data.joannaProjectCollection.items;
}


export const client = { getAllProjects }