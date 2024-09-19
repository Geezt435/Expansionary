const similerItems = (currentItem: any, allItems: any, slug: string) => {
  let categories: string[] = [];
  let tags: string[] = [];

  // set categories
  if (currentItem.data?.categories?.length > 0) {
    categories = currentItem.data.categories;
  }

  // set tags
  if (currentItem.data?.tags?.length > 0) {
    tags = currentItem.data.tags;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) =>
    categories.find((category) => item.data.categories.includes(category)),
  );
  
  // filter by tags
  const filterByTags = allItems.filter((item: any) =>
    tags.find((tag) => item.data.tags.includes(tag)),
  );

  // merged after filter
  const mergedItems = [...filterByCategories, ...filterByTags];

  // Remove self from list
  const filterBySlug = mergedItems.filter((item) => item.slug !== slug);

  // count instances of each item
  const itemCount = filterBySlug.reduce((accumulator: any, currentItem: any) => {
    accumulator[currentItem.slug] = (accumulator[currentItem.slug] || 0) + 1;
    return accumulator;
  }, {});

  // sort items by number of instances
  const sortedItems = filterBySlug.sort((a: any, b: any) => itemCount[b.slug] - itemCount[a.slug]);

  // remove items with fewer than 2 instances
  const filteredItems = sortedItems.filter((item: any) => itemCount[item.slug] > 1);

  // remove duplicates
  const uniqueItems = [...new Set(filteredItems.map((item: any) => item.slug))].map((slug: string) => {
    return filteredItems.find((item: any) => item.slug === slug);
  });

  return uniqueItems;
};

export default similerItems;