
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
            ]
        },
        {
            title: "The Creative 2",
            slug: "the-creative-2",
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
            ]
        },
        {
            title: "The Creative 3",
            slug: "the-creative-3",
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
            ]
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
            slug: "the-creative-4",
            categories: [
                1, 4
            ]
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
            title: "Space 2",
            size: "2000 sq ft",
        },
        {
            title: "Space 3",
            size: "3000 sq ft",
        },
        {
            title: "Space 4",
            size: "4000 sq ft",
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
            featuredImage: {
                node: {
                    sourceUrl: "https://picsum.photos/id/100/600/400",
                    altText: "The News",
                    width: 600,
                    height: 400
                }
            },
        },
        {
            title: "Rent",
            slug: "rent",
            featuredImage: {
                node: {
                    sourceUrl: "https://picsum.photos/id/101/600/400",
                    altText: "The News",
                    width: 600,
                    height: 400
                }
            },
        },
        {
            title: "News",
            slug: "news",
            featuredImage: {
                node: {
                    sourceUrl: "https://picsum.photos/id/102/600/400",
                    altText: "The News",
                    width: 600,
                    height: 400
                }
            },
        },
    ]
    return homeCards;
}