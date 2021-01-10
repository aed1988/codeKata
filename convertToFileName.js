const convertTitleToFileName = (title) => {
  const fileName = title.split(' ').map(elem => elem.replace(elem[0], elem[0].toUpperCase())).join('') + '.js'

  console.log(fileName);
};

convertTitleToFileName("Simple Fun #136: Missing Values");