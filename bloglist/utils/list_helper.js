const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    return blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)
}

const mostBlogs = (blogs) => {
    const authors = blogs.map(blog => blog.author)
    const authorCounts = authors.reduce((counts, author) => {
        counts[author] = (counts[author] || 0) + 1
        return counts
    }, {})
    const authorCountsArray = Object.entries(authorCounts)
    const mostBlogsAuthor = authorCountsArray.reduce((max, author) => max[1] > author[1] ? max : author)
    return { author: mostBlogsAuthor[0], blogs: mostBlogsAuthor[1] }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}