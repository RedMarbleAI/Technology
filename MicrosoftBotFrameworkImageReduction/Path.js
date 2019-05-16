export default class Path {
    static getExtension(path) {
        let extensionWithoutDot = path.slice((path.lastIndexOf(".") - 1 >>> 0) + 2);

        if (extensionWithoutDot === "" && path[0] === ".") {
            return path;
        }
        else {
            return extensionWithoutDot === "" ? extensionWithoutDot : "." + extensionWithoutDot;
        }
    }
}