/* eslint-disable no-unused-vars */
import React from 'react'
import Img1 from "../../assets/images/masaaimara.jpg";
import Img2 from "../../assets/images/mountkenya.jpg";
import Img3 from "../../assets/images/amboseli.jpg";
import Img4 from "../../assets/images/lamuisland.jpg";
import Img5 from "../../assets/images/nairobi.jpg";
import Img6 from "../../assets/images/nakuru.jpg";
import BlogCard from './BlogCard';



const BlogsData = [
    {
        id: 1,
        img: Img1,
        "title": "Exploring the Maasai Mara: A Wildlife Adventure",
    "description": "Embark on an unforgettable journey through the iconic Maasai Mara National Reserve, where the sweeping savannahs come alive with Africa's most majestic wildlife. Traverse the vast plains alongside seasoned guides as you witness the annual wildebeest migration, marvel at the graceful movements of cheetahs and lions, and capture the essence of the untamed wilderness.",
    "author": "John Kariuki",
        date: "March 2024"
    },
    {
        id: 2,
        img: Img2,
        "title": "Hiking to the Summit: Conquering Mount Kenya",
    "description": "Join us on an exhilarating expedition to the summit of Mount Kenya, Africa's second-highest peak. Trek through lush montane forests, traverse rugged alpine terrain, and navigate challenging glaciers as you ascend to Uhuru Peak. Experience the thrill of standing atop the 'Roof of Africa' and be rewarded with panoramic vistas stretching as far as the eye can see.",
    "author": "John Ochieng",
        date: "March 2024"
    },
    {
        id: 3,
        img: Img3,
        "title": "Safari Chronicles: An Expedition in Amboseli National Park",
    "description": "Embark on a captivating safari adventure through the enchanting landscapes of Amboseli National Park. Set against the backdrop of Mount Kilimanjaro, witness a symphony of wildlife roaming freely across vast plains and shimmering marshlands. Encounter herds of majestic elephants, graceful giraffes, and elusive predators, while immersing yourself in the timeless beauty of the African wilderness.",
    "author": "Emily Njeri",
        date: "March 2024"
    },
    {
        id: 4,
        img: Img4,
        "title": "Discovering Lamu Island: A Cultural Escape",
    "description": "Indulge your senses in the vibrant tapestry of culture and history that defines Lamu Island, a UNESCO World Heritage Site nestled off the coast of Kenya. Wander through the narrow streets of Lamu Town, where ancient Swahili architecture whispers tales of a bygone era. Immerse yourself in the rhythms of traditional music and dance, savor the flavors of authentic Swahili cuisine, and unwind on pristine beaches fringed by azure waters.",
    "author": "Reagan Pessah",
        date: "March 2024"
    },
    {
        id: 5,
        img: Img5,
        "title": "A Day in Nairobi National Park: Wildlife Amidst the City",
        "description": "Experience the unique juxtaposition of urban life and untamed wilderness at Nairobi National Park, a pristine sanctuary located just moments away from the bustling city center. Embark on a game drive through the park's diverse habitats, where you'll encounter an array of iconic African wildlife, including lions, rhinos, and giraffes, against the iconic backdrop of Nairobi's skyline.",
        "author": "Sophia Anyango",
        date: "March 2024"
    },
    {
        id: 6,
        img: Img6,
        "title": "Flamingo Paradise: Birdwatching at Lake Nakuru National Park",
        "description": "Immerse yourself in the kaleidoscope of color and beauty that awaits at Lake Nakuru National Park, renowned as a haven for birdwatchers and nature enthusiasts alike. Witness the mesmerizing spectacle of thousands of flamingos painting the shores of the alkaline lake in vibrant hues of pink, while keeping an eye out for elusive leopards, endangered rhinos, and a myriad of other wildlife species that call this sanctuary home.",
        "author": "Michael Kiplangat",
        date: "March 2024"
    },
]

export const BlogsComp = () => {
  return (
    <div >
        <div className='container my-8' data-aos="fade-up">
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Our Recent Blogs</h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 items-center'>
                {
                    BlogsData.map((item,index)=>(
                        <BlogCard key={index} {...item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
