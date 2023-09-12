const Error = ({ error }) => {
    if (error === null) {
        return null
    }
    return (
        <div className='notification error'>
        {error}
        </div>
    )
}
export default Error