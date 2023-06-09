import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PopularInstructors = () => {
    const instructor = [
        {
            id: 1,
            image: "https://pbs.twimg.com/profile_images/1053756865136521216/0l9lC-cj_400x400.jpg",
            name: "Sarah Anderson",
            subject: "Music Theory",
            rating: 4.5,
            students: 98,
        },
        {
            id: 1,
            image: "https://www.turnerpadget.com/828895/assets/images/attorneys/2/DJohnson.jpg",
            name: "David Johnson",
            subject: "Instrument Lessons",
            rating: 4.9,
            students: 90,
        },
        {
            id: 1,
            image: "https://pbs.twimg.com/profile_images/713116537381646340/qHgAmB1X_400x400.jpg",
            name: "Emily Thompson",
            subject: "Band Practice",
            rating: 4,
            students: 88,
        },
        {
            id: 1,
            image: "https://www.venable.com/-/media/images/professionals/bio-images/d/davis_michael.jpg?rev=b9ce5fd4cedb4513abfa8b71c442416a",
            name: "Michael Davis",
            subject: "Vocal Training",
            rating: 4.0,
            students: 85,
        },
        {
            id: 1,
            image: "https://etonbridgepartners.com/wp-content/uploads/2021/10/Jessica-Roberts-0580.jpg",
            name: "Jessica Roberts",
            subject: "Ensemble Playing",
            rating: 4.5,
            students: 80,
        },
        {
            id: 1,
            image: "https://i.insider.com/5e1cd3fa24fe127f6c7d5187?width=600&format=jpeg",
            name: "Matthew Wilson",
            subject: "Song Writing",
            rating: 5.0,
            students: 78,
        },
    ];
    return (
        <div className="my-20">
            <h1 className="text-center text-4xl font-bold mb-5">
                Popular Instructors
            </h1>
            <div className="grid sm:grid-cols-3 gap-4 px-2 xl:px-0">
                {Array.isArray(instructor) &&
                    instructor.map(
                        ({ id, image, name, subject, students, rating }) => (
                            <div
                                key={id}
                                className="card w-full bg-[#6672a3] shadow-xl"
                            >
                                <figure>
                                    <img
                                        className="w-full h-[250px]"
                                        src={image}
                                        alt="classes"
                                    />
                                </figure>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Name: {name}</h2>
                                    <p>
                                        <b>Subject:</b> {subject}
                                    </p>
                                    <p className=" text-[#0f1744f5] font-bold">
                                        Number of Students: {students}
                                    </p>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={rating}
                                        readOnly
                                    />
                                    <div className="card-actions justify-end">
                                        <button className="btn bg-[#4715709d] text-white hover:bg-[#13041fe1]">
                                            Enroll Now
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

export default PopularInstructors;
