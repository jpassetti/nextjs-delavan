export function convertTaxonomyToSelectOptions(taxonomy) {
    let options = [];
    taxonomy.forEach((item) => {
        const {name, slug} = item.node;
        options.push({label: name, value: slug});
    });
    return options;
}