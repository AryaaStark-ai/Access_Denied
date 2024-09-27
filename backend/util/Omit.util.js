const omit = (obj, keysToOmit) => {
  const newObj = { ...obj };

  keysToOmit.forEach(key => {
    delete newObj[key];
  });

  return newObj;
};

export default omit;
