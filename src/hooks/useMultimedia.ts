import {translate} from '@docusaurus/Translate';

export default function useMultimedia() {

    return [
        {
            name: translate({id: "multimedia.main-page"}),
            image: 'multimedia/main-menu.png'
        },
        {
            name: translate({id: "multimedia.stats1"}),
            image: 'multimedia/stats.png'
        },
        {
            name: translate({id: "multimedia.stats2"}),
            image: 'multimedia/stats2.png'
        },
        {
            name: translate({id: "multimedia.transformations"}),
            image: 'multimedia/transformations.png'
        },
        {
            name: translate({id: "multimedia.addPolygon"}),
            image: 'multimedia/add_polygon_to_POSP.mp4'
        },
        {
            name: translate({id: "multimedia.applyFilters"}),
            image: 'multimedia/apply filters.mp4'
        },
        {
            name: translate({id: "multimedia.polygonTransformation"}),
            image: 'multimedia/set polygon transformation.mp4'
        }
    ];
}