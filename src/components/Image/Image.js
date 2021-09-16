const Image = ({ url, alt }) => {
    return (
        <img
            src={`http://localhost:1337${url}`}
            alt={alt}
        />
    )
}

export { Image }
