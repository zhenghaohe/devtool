const applyStyleSheet = (url) => {
  const linkElement = document.createElement('link');

  linkElement.rel = 'stylesheet';
  linkElement.href = url;

  document.head.appendChild(linkElement);
};

export default applyStyleSheet;