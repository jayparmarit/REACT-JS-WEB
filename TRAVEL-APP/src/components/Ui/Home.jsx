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
                    <h1 className='fw-bold'>Explore Amazing Destinations</h1>
                    <p className=''>Discover the world's most beautiful places with us.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.goway.com/production/hero/iStock-1919241099.jpeg"
                    alt="Beautiful beach destination"
                    style={{ height: '600px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h1 className='fw-bold'>Tropical Paradise</h1>
                    <p>Relax on pristine beaches and crystal clear waters.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHwwz"
                    alt="Beautiful beach destination"
                    style={{ height: '600px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h1 >Mountain Adventures</h1>
                    <p>
                        Experience breathtaking views and unforgettable journeys.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;