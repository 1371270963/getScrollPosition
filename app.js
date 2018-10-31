const getScrollPosition = () => {
  let rootElement = document.documentElement;
  let offset = rootElement.scrollTop + window.innerHeight;
  let height = rootElement.offsetHeight;
  if (offset >= height) {
    console.log("At the bottom");
  } else if (rootElement.scrollTop === 0) {
    console.log("At the top");
  }
};
