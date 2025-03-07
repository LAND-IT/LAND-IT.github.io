import {useTranslation} from "react-i18next";


export default function useMultimedia() {

    const {t} = useTranslation();

    return [
        {
            name: t('multimedia.main-page'),
            image: 'multimedia/main-menu.png'
        },
        {
            name: t('multimedia.stats1'),
            image: 'multimedia/stats.png'
        },
        {
            name: t('multimedia.stats2'),
            image: 'multimedia/stats2.png'
        },
        {
            name: t('multimedia.transformations'),
            image: 'multimedia/transformations.png'
        },
        {
            name: t('multimedia.addPolygon'),
            image: 'multimedia/add_polygon_to_POSP.mp4'
        },
        {
            name: t('multimedia.applyFilters'),
            image: 'multimedia/apply filters.mp4'
        },
        {
            name: t('multimedia.polygonTransformation'),
            image: 'multimedia/set polygon transformation.mp4'
        }
    ];
}