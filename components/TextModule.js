const { documentToHtmlString  } = require('@contentful/rich-text-html-renderer')

module.exports = (data) => {
  return `
<section className='z1 rel'>
  <div className='rel f aic jcc'>
    <div className='container rel fill-h'>
      <div className='outer container--c container--a'>
        ${documentToHtmlString(data.fields.textContent)}
      </div>
    </div>
  </div>
</section>
  `
}
