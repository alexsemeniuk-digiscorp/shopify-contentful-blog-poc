const { json } = require('micro')
const post = require('micro-post')

const updateBlog = require('./api/blog')

module.exports = post(async (req, res) => {
    const parsed = await json(req)
    switch (parsed.sys.contentType.sys.id) {
        case 'blogPost':
            updateBlog(parsed)
            break
    }
})