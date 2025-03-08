"use client";

import {Carousel} from 'primereact/carousel';
import {MultimediaObj} from "../../Definitions";
import useMultimedia from "../../hooks/useMultimedia";
// Import css
import 'react-iv-viewer/dist/react-iv-viewer.css';
import { FullScreenViewer } from 'react-iv-viewer';
import styles from './multimedia.module.css';

export default function Multimedia() {

    const media = useMultimedia();

    const productTemplate = (product: MultimediaObj) => {
        return (
            <div>
                {product.image.endsWith(".png") &&  <FullScreenViewer className={styles.images} img={product.image}
                                                                      defaultZoom={100}/>}
                {product.image.endsWith(".mp4") && <video src={product.image} controls autoPlay className={styles.images}/>}
                <h4 className="mb-1">{product.name}</h4>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={media}
                      className={styles.carousel} circular
                      autoplayInterval={4000} itemTemplate={productTemplate}/>
        </div>
    )
}
         