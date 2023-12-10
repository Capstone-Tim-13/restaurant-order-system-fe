async function urlToBlob(url) {
  // Fetch the image as a blob
  const response = await fetch(url);
  const blobData = await response.blob();

  // Create a File object from the blob
  const fileName = url.substring(url.lastIndexOf('/') + 1);
  const file = new File([blobData], fileName, { type: blobData.type });

  return file;
}

export default urlToBlob;
