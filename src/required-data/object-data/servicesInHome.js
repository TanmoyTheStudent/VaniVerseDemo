import Image1 from "../assests/image/earn 3.jpeg"
import Image2 from "../assests/image/stt.jpeg"
import Image3 from "../assests/image/ttt.jpeg"
import Image4 from "../assests/image/providing-platform.jpg"



export const servicesInHomePage=[
    {
        id:1,
        title:"Speech to Text",
        description:"We have collected a large amount of audio data of native people spoken in various Indian languages and dialects. Then we transcript the audio into accurate, readable text, and prepare a dataset that is essential for NLP.",
        image:Image2,
        link:"/our-services/speech-to-text"
    },
    {
        id:2,
        title:"Text to Speech",
        description:"We have prepared an inclusive dataset where various Indian language's text is converted into speech. Audio recording of the written text is based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.",
        image:Image1,
        link:"/our-services/text-to-speech"
    },
    {
        id:3,
        title:"Text To Text",
        description:"We provide a rich dataset of Various Indian Languages' (including dialects) translation to English, done and re-verified by expert.",
        image: Image3,
        link:"/our-services/text-to-text"
    },
    {
        id:4,
        title:"Providing Platform",
        description:" We offer a robust platform where you can host and manage your own data curation projects, streamlining your workflow and enhancing productivity.",
        image: Image4,
        link:"/our-services/providing-platform"
    }
]