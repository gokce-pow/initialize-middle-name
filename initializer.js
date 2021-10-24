function initializeNames(name) {
  const words = name.trim().split(" ");
  if (words.length <= 2) {
    return words.join(" ");
  } else {
    let result = "";
    words.forEach((element, index) => {
      if (index == 0) {
        result += element + " ";
      } else if (index == words.length - 1) {
        result += element;
      } else {
        result += `${element.charAt(0).toUpperCase()}. `;
      }
    });
    return result;
  }
}

module.exports = initializeNames;
