const removeStyleSheet = (id) => {
  const existingLinkElement = document.getElementById(id);

  if (existingLinkElement) {
    existingLinkElement.parentNode.removeChild(existingLinkElement);
  }
};

export default removeStyleSheet;