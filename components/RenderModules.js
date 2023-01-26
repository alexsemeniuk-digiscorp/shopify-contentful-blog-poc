const TextModule = require('./TextModule.js')
const FullImageModule = require('./FullImageModule.js')

module.exports = (module, type) => {
  console.log(type)
  switch (type) {
    case 'longText':
      return TextModule(module)
    case 'image':
      return FullImageModule(module)
  }
}