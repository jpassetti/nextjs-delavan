import CreativeFragment from '../queries/fragments/creative';

const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
   // console.log("fetchAPI");
	const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})
	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}
export async function getAllCreativeTypes() {
    const data = await fetchAPI(`
    query NewQuery {
        creativeTypes {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `)
    return data?.creativeTypes.edges
}
export async function getAllCreatives() {
const data = await fetchAPI(`
query NewQuery($first: Int) {
    creatives(first: $first) {
      edges {
        node {
          title
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          creativeTypes {
            edges {
              node {
                name
                slug
              }
            }
          }
          creativeInformation {
            name {
              businessName
              firstname
              lastName
            }
          }
        }
      }
    }
  }`, {
    variables: {
        "first": 100
    }
  })
	return data?.creatives.edges
}
export async function getAllCreativesByType() {
    const data = await fetchAPI(`
    query NewQuery($first: Int) {
        creativeTypes {
          edges {
            node {
              id
              name
              slug
              creatives(first: $first) {
                edges {
                  node {
                    title
                    slug
                    excerpt
                    featuredImage {
                      node {
                        sourceUrl
                        altText
                        mediaDetails {
                          width
                          height
                        }
                      }
                    }
                    creativeTypes {
                      edges {
                        node {
                          name
                          slug
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `, {
        variables: {
            "first": 100
        }
      })
    return data?.creativeTypes.edges
}
export async function getCreativesSearchResults(first, after, query) {
    const data = await fetchAPI(`
    query GET_CREATIVES_SEARCH_RESULTS($first: Int, $after: String, $query: String) {
        creatives(first: $first, after: $after, where: {search: $query}) {
            edges {
                node {
                    ...CreativeFragment
                }
                cursor
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
    ${CreativeFragment}`, {
		variables: {
            "first": first,
            "after": after,
			"query": query
		}
	})
        return data?.creatives.edges
}
export async function getCreativesSearchResultsWithTotalPages(first, after, query) {
const data = await fetchAPI(`
query GET_CREATIVES_SEARCH_RESULTS($first: Int, $after: String, $query: String) {
    creatives(first: $first, after: $after, where: {search: $query}) {
        edges {
            node {
                ...CreativeFragment
            }
            cursor
        }
        pageInfo {
            hasNextPage
            endCursor
        }
    }
}
${CreativeFragment}
`, {
    variables: {
        "first": first,
        "after": after,
        "query": query
    }
})
    return data?.creatives.edges
} 
export async function getAllCreativesSlugs() {
	const data = await fetchAPI(`
query NewQuery($first: Int) {
    creatives(first: $first) {
    edges {
      node {
        id
        slug
      }
    }
  }
}`, {
    variables: {
        "first": 100
    }
  })
	return data?.creatives.edges
}
export async function getCreativeBySlug(id) {
	const data = await fetchAPI(`
query MyQuery($id: ID!) {
  creative(idType: URI, id: $id) {
    id
    title
	slug
    excerpt
    content
    featuredImage {
        node {
        id
        altText
        sourceUrl
        mediaDetails {
            height
            width
        }
        }
    }
    creativeInformation {
        etsyUrl
        facebookUrl
        instagramUrl
        linkedinUrl
        pinterestUrl
        twitterUrl
        websiteUrl
        youtubeUrl
        links
        name {
            businessName
            firstname
            lastName
        }
    }
}
}
`, {
		variables: {
			"id": id
		}
	})
	return data?.creative
}

/* ------- POSTS ------- */

export async function getAllPosts() {
    const data = await fetchAPI(`
    query NewQuery {
        posts {
          edges {
            node {
              id
              title
              slug
              excerpt
              content
              categories {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
              featuredImage {
                node {
                  id
                  altText
                  sourceUrl(size: MEDIUM)
                  mediaDetails {
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
      `)
    return data?.posts.edges
}
export async function getAllCategories() {
    const data = await fetchAPI(`
    query NewQuery {
        categories {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    `)
    return data?.categories.edges
}
export async function getPostBySlug(id) {
    const data = await fetchAPI(`
    query MyQuery($id: ID!) {
        post(idType: URI, id: $id) {
            id
            title
            slug
            content
            excerpt
            featuredImage {
                node {
                    id
                    altText
                    sourceUrl(size: LARGE)
                    mediaDetails {
                        height
                        width
                    }
                }
            }
            categories {
                edges {
                    node {
                        id
                        name
                        slug
                    }
                }
            }
        }
    }
    `, {
		variables: {
			"id": id
		}
	})
    return data?.post
}
export async function getAllPostSlugs() {
    const data = await fetchAPI(`
    query MyQuery {
        posts {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)
    return data?.posts.edges
}
export async function getPageBySlug(id) {
    const data = await fetchAPI(`
    query MyQuery($id: ID!) {
        page(idType: URI, id: $id) {
            title
            slug
            content
            excerpt
            featuredImage {
                node {
                    altText
                    sourceUrl
                    mediaDetails {
                        height
                        width
                    }
                }
            }
        }
    }
    `, {
		variables: {
			"id": id
		}
	})
    return data?.page
}

export async function getFeaturedImageByPageSlug(id) {
    const data = await fetchAPI(`
    query MyQuery($id: ID!) {
        page(idType: URI, id: $id) {
            id
            title
            slug
            featuredImage {
                node {
                    id
                    altText
                    sourceUrl
                    mediaDetails {
                        height
                        width
                    }
                }
            }
        }
    }
    `, {
		variables: {
			"id": id
		}
	})
    return data?.page
}


export function getCategories() {
    const categories = [
        {
            name: "Featured",
            slug: "featured",
            id: 1
        },
        {
            name: "Painting",
            slug: "painting",
            id: 2
        },
        {
            name: "Ceramics",
            slug: "ceramics",
            id: 3
        },
        {
            name: "Photography",
            slug: "photography",
            id: 4
        },
    ];
    return categories;
}
export function getCategoryNameById(id) {
    //console.log({id});
    const categories = getCategories();
    //console.log({categories});
    const category = categories.find(category => category.id === id);
   // console.log({category});
    return category.name;
}

export function getCreatives() {
    const creatives = [
        {
            title: "The Creative",
            slug: "the-creative",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit nunc orci, sit amet vulputate arcu elementum consectetur. Pellentesque a sem ut velit finibus aliquam at et quam. Morbi gravida ultrices nunc vitae egestas.Vivamus pulvinar nibh eget quam pharetra mollis. Etiam nibh ex, ullamcorper quis suscipit non, laoreet ac dui. Praesent urna ex, molestie at urna eget, laoreet facilisis erat. Duis faucibus metus ut convallis aliquet. Ut dignissim, odio a vehicula feugiat, leo libero iaculis diam, id aliquam diam arcu ut arcu. Vestibulum porttitor eros ac felis placerat, quis condimentum erat semper. Etiam condimentum dui ut porttitor volutpat. Nulla non neque felis. Sed blandit metus mauris, vitae congue purus hendrerit ut. Proin vel sagittis neque. Praesent malesuada mattis mi, ut cursus tortor hendrerit eu. Ut nec orci in augue porttitor rutrum in imperdiet erat. Cras consequat semper rutrum. Ut porttitor faucibus tristique. Sed tempus dapibus nisl, ullamcorper blandit velit tincidunt quis. Integer at volutpat quam. In sit amet ex justo. Aenean vel pharetra lorem. Nam justo justo, lacinia sed bibendum eu, auctor a lorem.",
            featuredImage: {
                node: {
                    sourceUrl: "https://picsum.photos/id/50/600/400",
                    altText: "Creative",
                    width: 600,
                    height: 400
                }
            },
            categories: [
                1, 2
            ],
            links: {
                website: "https://www.google.com",
                socialLinks: [
                    {
                        label: "Facebook",
                        url: "https://www.facebook.com",
                        icon: "facebook",
                    },
                    {
                        label: "Instagram",
                        url: "https://www.instagram.com",
                        icon: "instagram",
                    },
                    {
                        label: "Twitter",
                        url: "https://www.twitter.com",
                        icon: "twitter",
                    },
                    {
                        label: "LinkedIn",
                        url: "https://www.linkedin.com",
                        icon: "linkedin",
                    },
                    {
                        label: "YouTube",
                        url: "https://www.youtube.com",
                        icon: "youtube",
                    },
                    {
                        label: "Pinterest",
                        url: "https://www.pinterest.com",
                        icon: "pinterest",
                    },
                    {
                        label: "Etsy",
                        url: "https://www.etsy.com",
                        icon: "etsy",
                    },
                ]
            },
            tags: [
                {
                    name: "Tag 1",
                    slug: "tag-1",
                },
                {
                    name: "Tag 2",
                    slug: "tag-2",
                },
                {
                    name: "Tag 3",
                    slug: "tag-3",
                },
                {
                    name: "Tag 4",
                    slug: "tag-4",
                },
            ],
        },
        {
            title: "The Creative 2",
            slug: "the-creative-2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit nunc orci, sit amet vulputate arcu elementum consectetur. Pellentesque a sem ut velit finibus aliquam at et quam. Morbi gravida ultrices nunc vitae egestas.Vivamus pulvinar nibh eget quam pharetra mollis. Etiam nibh ex, ullamcorper quis suscipit non, laoreet ac dui. Praesent urna ex, molestie at urna eget, laoreet facilisis erat. Duis faucibus metus ut convallis aliquet. Ut dignissim, odio a vehicula feugiat, leo libero iaculis diam, id aliquam diam arcu ut arcu. Vestibulum porttitor eros ac felis placerat, quis condimentum erat semper. Etiam condimentum dui ut porttitor volutpat. Nulla non neque felis. Sed blandit metus mauris, vitae congue purus hendrerit ut. Proin vel sagittis neque. Praesent malesuada mattis mi, ut cursus tortor hendrerit eu. Ut nec orci in augue porttitor rutrum in imperdiet erat. Cras consequat semper rutrum. Ut porttitor faucibus tristique. Sed tempus dapibus nisl, ullamcorper blandit velit tincidunt quis. Integer at volutpat quam. In sit amet ex justo. Aenean vel pharetra lorem. Nam justo justo, lacinia sed bibendum eu, auctor a lorem.",
            featuredImage: {
                node: {
                    sourceUrl: "https://picsum.photos/id/51/600/400",
                    altText: "Creative",
                    width: 600,
                    height: 400
                }
            },
            categories: [
                2
            ],
            links: {
                website: "https://www.google.com",
                socialLinks: [
                    {
                        label: "Facebook",
                        url: "https://www.facebook.com",
                        icon: "facebook",
                    },
                    {
                        label: "Instagram",
                        url: "https://www.instagram.com",
                        icon: "instagram",
                    },
                    {
                        label: "Twitter",
                        url: "https://www.twitter.com",
                        icon: "twitter",
                    },
                    {
                        label: "LinkedIn",
                        url: "https://www.linkedin.com",
                        icon: "linkedin",
                    },
                    {
                        label: "YouTube",
                        url: "https://www.youtube.com",
                        icon: "youtube",
                    },
                    {
                        label: "Pinterest",
                        url: "https://www.pinterest.com",
                        icon: "pinterest",
                    },
                    {
                        label: "Etsy",
                        url: "https://www.etsy.com",
                        icon: "etsy",
                    },
                ]
            },
            tags: [
                {
                    name: "Tag 1",
                    slug: "tag-1",
                },
                {
                    name: "Tag 2",
                    slug: "tag-2",
                },
                {
                    name: "Tag 3",
                    slug: "tag-3",
                },
                {
                    name: "Tag 4",
                    slug: "tag-4",
                },
            ],
        },
        {
            title: "The Creative 3",
            slug: "the-creative-3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit nunc orci, sit amet vulputate arcu elementum consectetur. Pellentesque a sem ut velit finibus aliquam at et quam. Morbi gravida ultrices nunc vitae egestas.Vivamus pulvinar nibh eget quam pharetra mollis. Etiam nibh ex, ullamcorper quis suscipit non, laoreet ac dui. Praesent urna ex, molestie at urna eget, laoreet facilisis erat. Duis faucibus metus ut convallis aliquet. Ut dignissim, odio a vehicula feugiat, leo libero iaculis diam, id aliquam diam arcu ut arcu. Vestibulum porttitor eros ac felis placerat, quis condimentum erat semper. Etiam condimentum dui ut porttitor volutpat. Nulla non neque felis. Sed blandit metus mauris, vitae congue purus hendrerit ut. Proin vel sagittis neque. Praesent malesuada mattis mi, ut cursus tortor hendrerit eu. Ut nec orci in augue porttitor rutrum in imperdiet erat. Cras consequat semper rutrum. Ut porttitor faucibus tristique. Sed tempus dapibus nisl, ullamcorper blandit velit tincidunt quis. Integer at volutpat quam. In sit amet ex justo. Aenean vel pharetra lorem. Nam justo justo, lacinia sed bibendum eu, auctor a lorem.",
            featuredImage: {
                node: {
                    sourceUrl: "https://picsum.photos/id/52/600/400",
                    altText: "Creative",
                    width: 600,
                    height: 400
                }
            },
            categories: [
                3
            ],
            links: {
                website: "https://www.google.com",
                socialLinks: [
                    {
                        label: "Facebook",
                        url: "https://www.facebook.com",
                        icon: "facebook",
                    },
                    {
                        label: "Instagram",
                        url: "https://www.instagram.com",
                        icon: "instagram",
                    },
                    {
                        label: "Twitter",
                        url: "https://www.twitter.com",
                        icon: "twitter",
                    },
                    {
                        label: "LinkedIn",
                        url: "https://www.linkedin.com",
                        icon: "linkedin",
                    },
                    {
                        label: "YouTube",
                        url: "https://www.youtube.com",
                        icon: "youtube",
                    },
                    {
                        label: "Pinterest",
                        url: "https://www.pinterest.com",
                        icon: "pinterest",
                    },
                    {
                        label: "Etsy",
                        url: "https://www.etsy.com",
                        icon: "etsy",
                    },
                ]
            },
            tags: [
                {
                    name: "Tag 1",
                    slug: "tag-1",
                },
                {
                    name: "Tag 2",
                    slug: "tag-2",
                },
                {
                    name: "Tag 3",
                    slug: "tag-3",
                },
                {
                    name: "Tag 4",
                    slug: "tag-4",
                },
            ],
        },
        {
            title: "The Creative 4",
            featuredImage: {
                node: {
                    sourceUrl: "https://picsum.photos/id/53/600/400",
                    altText: "Creative",
                    width: 600,
                    height: 400
                }
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit nunc orci, sit amet vulputate arcu elementum consectetur. Pellentesque a sem ut velit finibus aliquam at et quam. Morbi gravida ultrices nunc vitae egestas.Vivamus pulvinar nibh eget quam pharetra mollis. Etiam nibh ex, ullamcorper quis suscipit non, laoreet ac dui. Praesent urna ex, molestie at urna eget, laoreet facilisis erat. Duis faucibus metus ut convallis aliquet. Ut dignissim, odio a vehicula feugiat, leo libero iaculis diam, id aliquam diam arcu ut arcu. Vestibulum porttitor eros ac felis placerat, quis condimentum erat semper. Etiam condimentum dui ut porttitor volutpat. Nulla non neque felis. Sed blandit metus mauris, vitae congue purus hendrerit ut. Proin vel sagittis neque. Praesent malesuada mattis mi, ut cursus tortor hendrerit eu. Ut nec orci in augue porttitor rutrum in imperdiet erat. Cras consequat semper rutrum. Ut porttitor faucibus tristique. Sed tempus dapibus nisl, ullamcorper blandit velit tincidunt quis. Integer at volutpat quam. In sit amet ex justo. Aenean vel pharetra lorem. Nam justo justo, lacinia sed bibendum eu, auctor a lorem.",
            slug: "the-creative-4",
            categories: [
                1, 4
            ],
            links: {
                website: "https://www.google.com",
                socialLinks: [
                    {
                        label: "Facebook",
                        url: "https://www.facebook.com",
                        icon: "facebook",
                    },
                    {
                        label: "Instagram",
                        url: "https://www.instagram.com",
                        icon: "instagram",
                    },
                    {
                        label: "Twitter",
                        url: "https://www.twitter.com",
                        icon: "twitter",
                    },
                    {
                        label: "LinkedIn",
                        url: "https://www.linkedin.com",
                        icon: "linkedin",
                    },
                    {
                        label: "YouTube",
                        url: "https://www.youtube.com",
                        icon: "youtube",
                    },
                    {
                        label: "Pinterest",
                        url: "https://www.pinterest.com",
                        icon: "pinterest",
                    },
                    {
                        label: "Etsy",
                        url: "https://www.etsy.com",
                        icon: "etsy",
                    },
                ]
            },
            tags: [
                {
                    name: "Tag 1",
                    slug: "tag-1",
                },
                {
                    name: "Tag 2",
                    slug: "tag-2",
                },
                {
                    name: "Tag 3",
                    slug: "tag-3",
                },
                {
                    name: "Tag 4",
                    slug: "tag-4",
                },
            ],
        },
    ];
    return creatives;
}
export function getSingleCreativeBySlug(slug) {
    const creatives = getCreatives();
    const creative = creatives.find(creative => creative.slug === slug);
    return creative;
}
export function getNews() {
    const news = [
        {
            node: {
                title: "The News",
                slug: "the-news",
                excerpt: "This is the excerpt for the news",
                featuredImage: {
                    node: {
                        sourceUrl: "https://picsum.photos/id/234/600/400",
                        altText: "The News",
                        width: 600,
                        height: 400
                    }
                },
                categories: [
                    1, 2
                ]
            }
        },
        {
            node: {
                title: "The News 2",
            slug: "the-news-2",
            excerpt: "This is the excerpt for the news",
            featuredImage: {
                node: {
                    sourceUrl: "https://picsum.photos/id/235/600/400",
                    altText: "The News",
                    width: 600,
                    height: 400
                }
            },
            categories: [
                2
            ]
            }
            
        },
        {
            node: {
                title: "The News 3",
                slug: "the-news-3",
                excerpt: "This is the excerpt for the news",
                featuredImage: {
                    node: {
                        sourceUrl: "https://picsum.photos/id/236/600/400",
                        altText: "The News",
                        width: 600,
                        height: 400
                    }
                },
                categories: [
                    3
                ]
            }
           
        },
        {
            node: {
                title: "The News 4",
            slug: "the-news-4",
            excerpt: "This is the excerpt for the news",
            featuredImage: {
                node: {
                    sourceUrl: "https://picsum.photos/id/237/600/400",
                    altText: "The News",
                    width: 600,
                    height: 400
                }
            },
            categories: [
                1, 4
            ]
            }
            
        },
    ];
    return news;
}
export function getNewsSlugs() {
    const news = getNews();
    const slugs = news.map(newsItem => newsItem.slug);
    return slugs;
}
export function getSingleNewsBySlug(slug) {
    const news = getNews();
    const singleNews = news.find(newsItem => newsItem.slug === slug);
    return singleNews;
}
export function getSpaces() {
    const spaces = [
        {
            title: "Space 1",
            size: "1000 sq ft",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a tortor in ligula porttitor consectetur suscipit sed eros. Quisque fringilla imperdiet nisl, vel bibendum nisl scelerisque a.",
            featuredImage: {
                node: {
                    sourceUrl: "/images/building.jpg",
                    altText: "Space",
                    mediaDetails: {
                        width: 1980,
                        height: 1320
                    }
                }
            },
        },
        {
            title: "Space 2",
            size: "2000 sq ft",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a tortor in ligula porttitor consectetur suscipit sed eros. Quisque fringilla imperdiet nisl, vel bibendum nisl scelerisque a.",
            featuredImage: {
                node: {
                    sourceUrl: "/images/building.jpg",
                    altText: "Space",
                    mediaDetails: {
                        width: 1980,
                        height: 1320
                    }
                }
            },
        },
        {
            title: "Space 3",
            size: "3000 sq ft",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a tortor in ligula porttitor consectetur suscipit sed eros. Quisque fringilla imperdiet nisl, vel bibendum nisl scelerisque a.",
            featuredImage: {
                node: {
                    sourceUrl: "/images/building.jpg",
                    altText: "Space",
                    mediaDetails: {
                        width: 1980,
                        height: 1320
                    }
                }
            },
        },
        {
            title: "Space 4",
            size: "4000 sq ft",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a tortor in ligula porttitor consectetur suscipit sed eros. Quisque fringilla imperdiet nisl, vel bibendum nisl scelerisque a.",
            featuredImage: {
                node: {
                    sourceUrl: "/images/building.jpg",
                    altText: "Space",
                    mediaDetails: {
                        width: 1980,
                        height: 1320
                    }
                }
            },
        }
    ];
    return spaces;
}
export function getNewsCategories() {
    const categories = [
        {
            name: "Featured",
            slug: "featured",
            id: 1
        },
        {
            name: "News",
            slug: "news",
            id: 2
        },
        {
            name: "Events",
            slug: "events",
            id: 3
        },
        {
            name: "Exhibitions",
            slug: "exhibitions",
            id: 4
        },
    ];
    return categories;
}
export function getTimelineItems() {
    const timelineItems = [
        {
            title: "Timeline item title goes here",
            year: 2000,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt."
        },
        {
            title: "Timeline item title goes here",
            year: 2000,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt."
        },
        {
            title: "Timeline item title goes here",
            year: 2000,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt."
        },
        {
            title: "Timeline item title goes here",
            year: 2000,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt."
        },
    ];
    return timelineItems;
}
export const getPages = () => {
    const pages = [
        {
            title: "Home",
            slug: ""
        },
        {
            title: "Creatives",
            slug: "creatives"
        },
        {
            title: "Rent",
            slug: "rent"
        },
        {
            title: "News",
            slug: "news"
        },
        {
            title: "History",   
            slug: "history"
        },
        {
            title: "Contact",   
            slug: "contact"
        },
    ];
    return pages;
}
export const getHomeCards = () => {
    const homeCards = [
        {
            title: "Creatives",
            slug: "creatives",
            categorySlug: "design",
            featuredImage: {
                node: {
                    sourceUrl: "https://delavan-studios-dev.com/wp-content/uploads/2022/12/small-building.jpeg",
                    altText: "The News",
                    width: 600,
                    height: 400
                }
            },
        },
        {
            title: "Rent",
            slug: "rent",
            categorySlug: "photography",
            featuredImage: {
                node: {
                    sourceUrl: "https://delavan-studios-dev.com/wp-content/uploads/2022/12/small-building.jpeg",
                    altText: "The News",
                    width: 600,
                    height: 400
                }
            },
        },
        {
            title: "News",
            slug: "news",
            categorySlug: "printmaking",
            featuredImage: {
                node: {
                    sourceUrl: "https://delavan-studios-dev.com/wp-content/uploads/2022/12/small-building.jpeg",
                    altText: "The News",
                    width: 600,
                    height: 400
                }
            },
        },
    ]
    return homeCards;
}
export function getSocialMediaLinks() {
    const socialMediaLinks = [
        {
            name: "facebook",
            url: "https://www.facebook.com/delavanstudios",
        },
        {
            name: "instagram",
            url: "https://www.instagram.com/delavanstudios",
        },
    ];
    return socialMediaLinks; 
}
