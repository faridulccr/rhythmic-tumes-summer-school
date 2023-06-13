import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Heading from "../../components/Heading/Heading";

const Testimonial = () => {
    const testimonial = [
        {
            id: 1,
            name: "Emily Johnson",
            comment:
                "Attending the summer music camp was an incredible experience! I learned so much about music theory and got the opportunity to perform with other talented musicians. The teachers were amazing and supportive. I can't wait to come back next year!",
            rating: 5,
        },
        {
            id: 2,
            name: "Alexandra Lee",
            comment:
                "The music lessons at the summer camp were fantastic! I received personalized instruction for my instrument, and the teachers were skilled and patient. I improved my skills significantly and made lifelong friends. Highly recommended!",
            rating: 4.8,
        },
        {
            id: 3,
            name: "Daniel Thompson",
            comment:
                "I had an amazing time at the summer music camp! The variety of classes offered allowed me to explore different instruments and musical genres. The teachers were knowledgeable and made learning fun. I'm grateful for the experience!",
            rating: 4.9,
        },
        {
            id: 4,
            name: "Sophia Rodriguez",
            comment:
                "The summer music camp was a transformative experience for me. The supportive environment allowed me to gain confidence in my musical abilities. The teachers inspired me to pursue my passion for music further. It was an unforgettable summer!",
            rating: 5,
        },
        {
            id: 5,
            name: "Michael Chen",
            comment:
                "The summer music camp exceeded my expectations! The classes were engaging and interactive, and the teachers created a positive learning atmosphere. I was able to enhance my skills and perform in front of an audience. I highly recommend this camp!",
            rating: 4.7,
        },
        {
            id: 6,
            name: "Olivia Wilson",
            comment:
                "The summer music camp was an incredible experience! I received excellent instruction on my chosen instrument and had the opportunity to collaborate with other talented musicians. The teachers were knowledgeable and supportive, and the camp fostered a creative and inclusive environment. I would highly recommend it to anyone passionate about music!",
            rating: 4.9,
        },
    ];

    return (
        <div className="my-20">
            <Heading>Testimonials</Heading>
            <div className="carousel w-full">
                {testimonial.map(({ id, name, comment, rating }) => (
                    <div
                        key={id}
                        id={`slide${id}`}
                        className="carousel-item relative w-full"
                    >
                        <div className="text-center text-white w-5/6 md:w-3/4 mx-auto">
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                            <p className="my-5">{comment}</p>
                            <h3 className="text-3xl">{name}</h3>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href={`#slide${
                                    id == 1 ? testimonial.length : id - 1
                                }`}
                                className="btn btn-circle bg-[rgba(0,0,0,0.2)]"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${
                                    id == testimonial.length ? 1 : id + 1
                                }`}
                                className="btn btn-circle bg-[rgba(0,0,0,0.2)]"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
