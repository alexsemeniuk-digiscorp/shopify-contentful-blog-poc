const contentfulAPI = require('./contentful')
const shopifyAPI = require('./shopify')

const buildBlogPost = require('../layouts/article')

module.exports = (data) => {
  const slug = data.fields.slug['en-US']

  contentfulAPI.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    include: 10
  }).then(({ items }) => {
    const { fields } = items[0]

    const createBlogPost = buildBlogPost(fields)

    shopifyAPI.article.update(process.env.SHOPIFY_BLOG_ID, fields.articleId, {
      title: fields.passportTitle,
      body_html: createBlogPost,
      author: fields.author
    })
        .then(res => console.log(`Pushed data to shopify!`))
        .catch(err => console.error(err))
  })
}