module.exports = (data) => {
  return `
<div className='mha container--mm pv1 rel'>
  <img src=${data.fields.image.fields.file.url} />
</div>
  `
}
