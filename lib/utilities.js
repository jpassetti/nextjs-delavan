export function convertTaxonomyToSelectOptions(taxonomy) {
    let options = [];
    taxonomy.forEach((item) => {
        const {name, slug} = item.node;
        options.push({label: name, value: slug});
    });
    return options;
}

export function filterPostsByCategory(posts, targetCategory) {
    const filteredPosts = posts.filter((post) => {
        const { creativeTypes } = post.node;
        if (targetCategory.node.slug === "all") {
            return true;
        } else {
            return creativeTypes.edges?.length && creativeTypes.edges.some(creativeType => creativeType.node.slug === targetCategory.node.slug);
        }
    });
    return filteredPosts;
}

export function filterPostsByTags(posts, targetTags) {
    const filteredPosts = posts.filter(post => {
        const { tags } = post.node;
        if (targetTags[0].node.slug === "all") {
            // if the first tag is "all", return all posts
            return true;
        } else {
            // otherwise, return posts that have at least one of the selected tags
            return tags.edges?.length && tags.edges.some(tag => targetTags.some(targetTag => targetTag.node.slug === tag.node.slug));
        }
    });
    return filteredPosts;
}

export function alphabetizePosts(posts) {
    const filteredPosts = posts.sort((a, b) => {
        // if the creative has a business name, use that, otherwise use the last name
        const aTitle = a.node.creativeInformation.name.businessName ? a.node.creativeInformation.name.businessName : a.node.creativeInformation.name.lastName;
        const bTitle = b.node.creativeInformation.name.businessName ? b.node.creativeInformation.name.businessName : b.node.creativeInformation.name.lastName;
        if (aTitle < bTitle) {
          return -1;
        }
        if (aTitle > bTitle) {
          return 1;
        }
        return 0;
      });
    return filteredPosts;
}

export function sortPosts(posts) {
    const sortedPosts = [...posts].sort((a, b) => {
        if (a.node.featuredImage && !b.node.featuredImage) {
          // Place posts with featured images first
          return -1;
        } else if (!a.node.featuredImage && b.node.featuredImage) {
          // Place posts with no featured images last
          return 1;
        } else {
          // Preserve the original order for posts with the same featured image status
          return 0;
        }
    });
    return sortedPosts;
}

export function reduceDuplicateTags(tags) {
    const uniqueTags = tags.reduce((result, tag) => {
      const { name } = tag.node;
      const existingTag = result.find(t => t.node.name === name);
      if (!existingTag) {
        result.push(tag);
      }
      return result;
    }, []);
    
    return uniqueTags;
  }

export function getPreparedTags(creatives) {
  // 1. prepopulate tags array with "All" tag
  let tagsArray = [{ node: { name: "All", slug: "all" }}];

  // 2. loop through all creatives and add tags to array
  creatives.forEach(creative => {
      creative.node.tags.edges.forEach(tag => {
          tagsArray.push(tag);
      });
  });

  //console.log({tagsArray});

  // 3. remove duplicates
  let uniqueTags = reduceDuplicateTags(tagsArray);

  return uniqueTags;
}