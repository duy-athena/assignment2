export const mapVolumes = (volumes) => {
  return volumes.map(({ id, volumeInfo }) => ({
    id,
    title: volumeInfo.title,
    authors: volumeInfo.authors?.join(", "),
    publishedDate: volumeInfo.publishedDate,
    genre: volumeInfo.categories?.join(", "),
    pageCount: volumeInfo.pageCount,
    thumbnail: volumeInfo.imageLinks?.thumbnail,
    url: volumeInfo.url,
  }));
};
