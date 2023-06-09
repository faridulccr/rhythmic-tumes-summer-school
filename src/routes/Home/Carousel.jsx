const Carousel = () => {
    const carouselData = [
        {
            id: 1,
            image: "https://www.wikihow.com/images/thumb/7/77/Count-Rhythms-Step-10-Version-3.jpg/aid1418890-v4-1200px-Count-Rhythms-Step-10-Version-3.jpg",
            title: "Rhythms & Melodies",
            subTitle: "Discover the Magic of Music",
        },
        {
            id: 2,
            image: "https://artsandculturetx.com/wp-content/uploads/2016/07/axiom.jpg",
            title: "Harmony in the Air",
            subTitle: "Unleash Your Musical Potential",
        },

        {
            id: 3,
            image: "https://melodymakerschoir.co.uk/wp-content/uploads/2016/11/0119A611-236E-4459-A794-A4F0BE80A877.jpeg",
            title: "Melody Makers",
            subTitle: "Create, Perform, Inspire",
        },
        // {
        //     id: 4,
        //     image: img3,
        //     title: "Symphony of Sounds",
        //     subTitle: "Experience the Joy of Music",
        // },
        // {
        //     id: 5,
        //     image: img3,
        //     title: "The Music Journey",
        //     subTitle: "Explore, Learn, Grow",
        // },
        // {
        //     id: 6,
        //     image: img3,
        //     title: "Musical Adventures",
        //     subTitle: "Join Us for a Summer of Music",
        // },
    ];

    return (
        <>
            <div className="carousel w-full h-80 xs:h-auto md:h-[600px]">
                {Array.isArray(carouselData) &&
                    carouselData.map(({ id, image, title, subTitle }) => (
                        <div
                            key={id}
                            id={`item${id}`}
                            className="carousel-item w-full relative"
                        >
                            <img src={image} className="w-full h-full" />
                            <div className="text-center absolute top-1/2 left-1/2 bg-[rgba(0,0,0,0.5)] text-white font-bold w-5/6 md:w-1/2 px-4 md:px-9 py-9 md:py-24 rounded transform -translate-x-1/2 -translate-y-1/2">
                                <h3 className="text-3xl md:text-5xl mb-5">
                                    {title}
                                </h3>
                                <p>{subTitle}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {Array.isArray(carouselData) &&
                    carouselData.map(({ id }) => (
                        <a key={id} href={`#item${id}`} className="btn btn-xs">
                            {id}
                        </a>
                    ))}
            </div>
        </>
    );
};

export default Carousel;
