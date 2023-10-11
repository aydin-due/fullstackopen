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

const mostLikes = (blogs) => {
    const authorLikes = blogs.reduce((likes, blog) => {
        likes[blog.author] = (likes[blog.author] || 0) + blog.likes
        return likes
    }, {})
    const authorLikesArray = Object.entries(authorLikes)
    const mostLikesAuthor = authorLikesArray.reduce((max, author) => max[1] > author[1] ? max : author)
    return { author: mostLikesAuthor[0], likes: mostLikesAuthor[1] }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}