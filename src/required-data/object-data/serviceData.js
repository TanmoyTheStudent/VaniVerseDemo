import Service1 from "../assests/image/service1.jpg"
import Service2 from "../assests/image/service2.jpeg"
import Service3 from "../assests/image/service3.jpeg"


export const servicesData=[
    {
        id:1,
        title:(
            <>
                <span>Speech</span>
                <br />
                <span>to</span>
                <br />
                <span>Text</span>
            </>
        ),
        description:"Transcription of audio into accurate, readable text. ",
        image: Service1,
        link:"/our-services/speech-to-text"
    },
    {
        id:2,
        title:(
            <>
                <span>Text</span>
                <br />
                <span>to</span>
                <br />
                <span>Speech</span>
            </>
        ),
        description:"Audio recording of the written text based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.",
        image:Service2,
        link:"/our-services/text-to-speech"
    },
    {
        id:3,
        title:(
            <>
                <span>Text</span>
                <br />
                <span>to</span>
                <br />
                <span>Text</span>
            </>
        ),
        description:"Comprehensive text curation and enhancing and translating text for various applications.",
        image:Service3,
        link:"/our-services/text-to-text"
    },
    {
        id:4,
        title:(
            <>
                <span>Providing</span>
                <br />
                <span>Platform</span>
                
            </>
        ),
        description:"Comprehensive text curation and enhancing and translating text for various applications.",
        image:Service3,
        link:"/our-services/text-to-text"
    }
]
