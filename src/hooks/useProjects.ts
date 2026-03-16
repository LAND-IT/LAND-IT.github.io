import { translate } from "@docusaurus/Translate";

export default function useProjects() {

    return [
        {
            logo: "https://land-it.github.io/openlayers-style-editor/favicons/android-chrome-512x512.png",
            page: "https://land-it.github.io/openlayers-style-editor",
            title: "OpenLayers Style Editor",
            description: translate({id: "open_source.1.description"})
        }]
}