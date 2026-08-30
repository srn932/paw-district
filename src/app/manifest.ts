import type { MetadataRoute } from "next";

export default function manifest():MetadataRoute.Manifest{return{name:"Paw District",short_name:"Paw District",description:"Everything your pet needs. One happy district.",start_url:"/",display:"standalone",background_color:"#FFFDF8",theme_color:"#17251F",icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml"}]}}
