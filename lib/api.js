
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
    console.log({id});
    const categories = getCategories();
    console.log({categories});
    const category = categories.find(category => category.id === id);
    console.log({category});
    return category.name;
}

export function getCreatives() {
    const creatives = [
        {
            title: "The Creative",
            slug: "the-creative",
            categories: [
                1, 2
            ]
        },
        {
            title: "The Creative 2",
            slug: "the-creative-2",
            categories: [
                2
            ]
        },
        {
            title: "The Creative 3",
            slug: "the-creative-3",
            categories: [
                3
            ]
        },
        {
            title: "The Creative 4",
            slug: "the-creative-4",
            categories: [
                1, 4
            ]
        },
    ];
    return creatives;
}