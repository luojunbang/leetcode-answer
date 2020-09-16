const isArrayEqual = (source, target) => {
  const isBaseType = (val) => ['Number', 'String', 'Boolean'].indexOf(Object.prototype.toString.call(val).replace(/\[object ([\w+]+)\]/g, '$1')) > -1
  if (!Array.isArray(source) || !Array.isArray(target) || source.length !== target.length) return false
  for (let i = 0; i < source.length; i++) {
    const sourceItem = source[i], targetItem = target[i]
    if (Array.isArray(sourceItem) && Array.isArray(sourceItem)) {
      if (!isArrayEqual(sourceItem, targetItem)) return false
    } else if (isBaseType(sourceItem) && isBaseType(targetItem)) {
      if (sourceItem !== targetItem) return false
    } else {
      return false
    }
  }
  return true
}

module.exports = { isArrayEqual }