import {SideBar} from "./side-bar.js";
import {RequestData} from "./ajax.js"
import {CreateResultCarItems} from "./CreateResultCarItems.js"


let host = "";
if (window.location.hostname === "127.0.0.1") {
    host = "http://dev.mitsubishi.by/";
}

new SideBar()
