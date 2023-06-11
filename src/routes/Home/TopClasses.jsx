import img1 from "../../assets/music/slide1.jpg";
import img2 from "../../assets/music/slide2.jpg";
import img3 from "../../assets/music/slide3.jpg";
import img4 from "../../assets/music/slide4.jpg";
import img5 from "../../assets/music/slide5.jpg";
import img6 from "../../assets/music/slide6.jpg";
import Heading from "../../components/Heading.jsx/Heading";

const TopClasses = () => {
    const classesData = [
        {
            id: 1,
            image: img1,
            title: "Music Theory",
            subTitle: "Learn the fundamentals of music theory and notation.",
            students: 100,
        },
        {
            id: 2,
            image: img2,
            title: "Instrument Lessons",
            subTitle:
                "Choose from a variety of instruments and receive expert lessons.",
            students: 97,
        },
        {
            id: 3,
            image: img3,
            title: "Band Practice",
            subTitle:
                "Join a band and practice playing together with other talented musicians.",
            students: 90,
        },
        {
            id: 4,
            image: img4,
            title: "Vocal Training",
            subTitle:
                "Develop your singing skills with professional vocal training.",
            students: 98,
        },
        {
            id: 5,
            image: img5,
            title: "Ensemble Playing",
            subTitle:
                "Experience the joy of playing music together in a group ensemble.",
            students: 85,
        },
        {
            id: 6,
            image: img6,
            title: "Song Writing",
            subTitle:
                "Unleash your creativity and learn the art of songwriting.",
            students: 93,
        },
    ];

    const sortedByStudents = classesData.sort((a, b) => {
        return b.students - a.students;
    });

    return (
        <div className="my-20">
            <Heading>Popular Classes</Heading>
            <div className=" grid sm:grid-cols-3 gap-4 px-2 xl:px-0">
                {Array.isArray(sortedByStudents) &&
                    sortedByStudents.map(
                        ({ id, image, title, subTitle, students }) => (
                            <div
                                key={id}
                                className="card w-full bg-base-100 shadow-xl image-full text-white"
                            >
                                <figure>
                                    <img src={image} alt={title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{title}</h2>
                                    <p className="block">{subTitle}</p>
                                    <p>Number of Students: {students}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn bg-[#1B1464] text-[#F79F1F] hover:bg-transparent border-none">
                                            Enroll now!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
            </div>
        </div>
    );
};

export default TopClasses;
