import {Carousel} from 'primereact/carousel';
import './multimedia.css';
import {MultimediaObj} from "../../Definitions.ts";
import useMultimedia from "../containers/useMultimedia.ts";
// Import css
import 'react-iv-viewer/dist/react-iv-viewer.css';
import { FullScreenViewer } from 'react-iv-viewer';

export default function Multimedia() {

    const media = useMultimedia();

    const productTemplate = (product: MultimediaObj) => {
        return (
            <div>
                {product.image.endsWith(".png") &&  <FullScreenViewer className="images" img={product.image}
                                                                      defaultZoom={100}/>}
                {product.image.endsWith(".mp4") && <video src={product.image} controls autoPlay className="images"/>}
                <h4 className="mb-1">{product.name}</h4>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={media}
                      className="carousel" circular
                      autoplayInterval={4000} itemTemplate={productTemplate}/>
        </div>
    )
}
         