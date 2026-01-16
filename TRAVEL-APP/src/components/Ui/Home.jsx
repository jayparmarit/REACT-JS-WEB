import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                {/* <video className="d-block w-100 p-3 " autoPlay loop muted rounded style={{ height: '600px', objectFit: 'cover' }}
                >
                    <source src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4" type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video> */}
                <img className="d-block w-100" src="https://images.pexels.com/photos/18629862/pexels-photo-18629862.jpeg" alt="Mountain landscape" style={{ height: '600px', objectFit: 'cover' }}
                />

                {/* <Carousel.Caption>
                    <h3>Tropical Paradise</h3>
                    <p>Relax on pristine beaches and crystal clear waters.</p>
                </Carousel.Caption> */}
                <Carousel.Caption>
                    <h3>Explore Amazing Destinations</h3>
                    <p>Discover the world's most beautiful places with us.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Beautiful beach destination"
                    style={{ height: '600px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Tropical Paradise</h3>
                    <p>Relax on pristine beaches and crystal clear waters.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5819278/pexels-photo-5819278.jpeg"
                    alt="Beautiful beach destination"
                    style={{ height: '600px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Mountain Adventures</h3>
                    <p>
                        Experience breathtaking views and unforgettable journeys.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;