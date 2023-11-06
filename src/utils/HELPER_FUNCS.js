export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const articlePreview = (article) => {
    const maxLength = 120;
    const previewText = article.length > maxLength
      ? article.slice(0, maxLength) + '...'
      : article;  
    return previewText;
}

export const formatDate = (date) => {
  const isoDate = date;
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const formattedDate = new Date(isoDate).toLocaleDateString('en-US', options);
  return formattedDate;
}