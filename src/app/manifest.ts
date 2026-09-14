import type { MetadataRoute } from "next";

export default function manifest():MetadataRoute.Manifest{return{name:"The Paw District",short_name:"Paw District",description:"Pet boarding, grooming and practical dog training in Chennai.",start_url:"/",scope:"/",display:"standalone",background_color:"#FFFDF8",theme_color:"#17251F",icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml"},{src:"/images/paw-district-mark.webp",sizes:"256x256",type:"image/webp"}]}}
