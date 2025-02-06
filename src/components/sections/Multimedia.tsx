import {Carousel} from 'primereact/carousel';
import './multimedia.css';
import {useTranslation} from "react-i18next";

interface Product {
    name: string;
    image: string;
}

export default function Multimedia() {

    const {t} = useTranslation();

    const media = [
        {
            name: t('multimedia.main-page'),
            image: 'public/multimedia/main-menu.png'
        },
        {
            name: t('multimedia.stats1'),
            image: 'public/multimedia/stats.png'
        },
        {
            name: t('multimedia.stats2'),
            image: 'public/multimedia/stats2.png'
        },
        {
            name: t('multimedia.transformations'),
            image: 'public/multimedia/transformations.png'
        }
    ];

    const productTemplate = (product: Product) => {
        return (
            <div>
                <img src={product.image} alt={product.name} className="images"/>
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
         