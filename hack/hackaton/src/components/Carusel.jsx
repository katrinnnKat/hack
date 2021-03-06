import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function Carusel(props) {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj6p_oxD69t1kqmOGFEMESP9r_RkheBm_k87YyrOJrZp7Jrg-U6BuHzX4sqA&usqp=CAcc34"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYHCAto_mZNT7UN1BP5ZlVp9HZUZHhjzudr0qRPBjCRch3TAlDOLO-jnRhm2evrsXQyjCA6iKJ&usqp=CAc"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
// function ControlledCarousel() {
//     // const [index, setIndex] = useState(0);

//     // const handleSelect = (selectedIndex, e) => {
//     //     setIndex(selectedIndex);
//     // };

//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=First slide&bg=373940"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Second slide&bg=282c34"
//                     alt="Second slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>
//                         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     );
// }