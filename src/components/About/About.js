import React from 'react'
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { AboutWrapper, AboutImage } from "./About.styles"



const About = () => {
    const { wpPage: data } = useAboutQuery()
    const imageData = data.featuredImage.node.localFile.publicURL
    console.log("🚀 ~ file: About.js:9 ~ About ~ data:", data)

    return (
        <AboutWrapper>
            <AboutImage image={imageData} />
            <div className='about-text'>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        </AboutWrapper>
    )
}

export default About