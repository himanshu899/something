import sanityClient from '@sanity/client'

//creating bridge betweeen sanity and react

export default sanityClient({
    projectId:"zegdy50i",
    dataset:"production"
})