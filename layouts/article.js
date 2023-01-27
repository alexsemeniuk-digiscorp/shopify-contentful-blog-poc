const RenderModules = require('../components/RenderModules')

const MapModules = (modules) => {
  if (!modules) return;

  return modules.map((module) => {
    const type = module.sys.contentType ? module.sys.contentType.sys.id : false
    return RenderModules(module, type)
  })
}

module.exports = (data) => {
  return `
<div class='single'>
  <div className='article__hero rel'>
    <div class='obj-fit abs fill js-obj-fit-image lazy-img'>
      <img class='fill-h fill-v abs fill' src={data.featuredImage.fields.file.url}  />
    </div>
  </div>
  <section className='bgw z0 rel'>
    <div className='rel pt2'>
      <div className='outer container--c container--a'>
        <h4 className='mb0 serif'>${data.passportTitle}</h4>
      </div>
    </div>
  </section>
  <div className='z0 bgw px2'>
    ${MapModules(data.contentModules) }
  </div>
</div>
  `
}
