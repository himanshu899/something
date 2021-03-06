import React,{useEffect,useState} from 'react'
import sanityClient from "../client.js"
import p5 from "../p5.jpg"
import BlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

function About() {

    const [author,setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch( `*[type == "author"]{
            name,
            bio,
            "authorImage" : image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    },[]);

    if (!author) return <div>
        <img src={p5} className="absolute w-full" alt ="pra"/>            
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1  
                    className="text-6xl text-center text-green-100 
                    font-bolde curvise leading-none 
                    lg:leading-snug home-name ">Hey there ! I am Vasuli Bhai urff Praggu singh</h1>
            </section>
    </div>
    return (
        <main className ="relative">
            <img src={p5} alt="you"  className="absolute w-full"/>
            <div className = "p-10 lg:pt-48 container mx-auto relative">
                <section className ="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img 
                        src={urlFor(author.authorImage).url()}  
                        className="rounded w-32 h-32  lg:w-64 lg:h-64 mr-8" alt ={author.name}/>
                    <div className ="text-lg flex flex-col justify-center">
                        <h1 className ="cursive text-6xl text-green-300 mb-4">
                            Hey ! I am{" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent 
                                blocks={author.bio}
                                projectId="zegdy50i"
                                dataset = "production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
