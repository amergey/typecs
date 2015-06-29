var path;
(function (_path) {
    function getNormalizedPathComponents(path, currentDirectory) {
        path = this.normalizeSlashes(path);
        var rootLength = this.getRootLength(path);
        if (rootLength == 0) {
            // If the path is not rooted it is relative to current directory
            path = this.combinePaths(this.normalizeSlashes(currentDirectory), path);
            rootLength = this.getRootLength(path);
        }
        return this.normalizedPathComponents(path, rootLength);
    }
    _path.getNormalizedPathComponents = getNormalizedPathComponents;
    function getNormalizedPathFromPathComponents(pathComponents) {
        if (pathComponents && pathComponents.length) {
            return pathComponents[0] + pathComponents.slice(1).join("/");
        }
    }
    function normalizeSlashes(path) {
        return path.replace(/\\/g, "/");
    }
    function getRootLength(path) {
        if (path.charCodeAt(0) === 47) {
            if (path.charCodeAt(1) !== 47)
                return 1;
            var p1 = path.indexOf("/", 2);
            if (p1 < 0)
                return 2;
            var p2 = path.indexOf("/", p1 + 1);
            if (p2 < 0)
                return p1 + 1;
            return p2 + 1;
        }
        if (path.charCodeAt(1) === 58) {
            if (path.charCodeAt(2) === 47)
                return 3;
            return 2;
        }
        var idx = path.indexOf('://');
        if (idx !== -1)
            return idx + 3;
        return 0;
    }
    function combinePaths(path1, path2) {
        var directorySeparator = "/";
        if (!(path1 && path1.length))
            return path2;
        if (!(path2 && path2.length))
            return path1;
        if (this.getRootLength(path2) !== 0)
            return path2;
        if (path1.charAt(path1.length - 1) === directorySeparator)
            return path1 + path2;
        return path1 + directorySeparator + path2;
    }
    function normalizedPathComponents(path, rootLength) {
        var normalizedParts = this.getNormalizedParts(path, rootLength);
        return [path.substr(0, rootLength)].concat(normalizedParts);
    }
    function getNormalizedParts(normalizedSlashedPath, rootLength) {
        var parts = normalizedSlashedPath.substr(rootLength).split("/");
        var normalized = [];
        for (var _i = 0; _i < parts.length; _i++) {
            var part = parts[_i];
            if (part !== ".") {
                if (part === ".." && normalized.length > 0 && normalized[normalized.length - 1] !== "..") {
                    normalized.pop();
                }
                else {
                    if (part) {
                        normalized.push(part);
                    }
                }
            }
        }
        return normalized;
    }
})(path || (path = {}));
//# sourceMappingURL=path.util.js.map