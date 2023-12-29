class xor {
    static encode(str) {
        return encodeURIComponent(
            str
                .toString()
                .split("")
                .map((char, ind) =>
                    ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
                )
                .join("")
        );
    }
    static decode(str) {
        if (str.charAt(str.length - 1) == "/") str = str.slice(0, -1);
        return decodeURIComponent(str)
            .split("")
            .map((char, ind) =>
                ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
            )
            .join("");
    }
}

const isOnline = navigator.onLine;

if (isOnline) {
    const osData = localStorage.getItem("os");
    if (osData) {
        const os = JSON.parse(osData);
        const { proxy } = os;
        
        const encodedURL = xor.encode("https://ruffle.rs/demo");

        if (proxy === "uv") {
            window.location.href = `/uv/service/${encodedURL}`;
        } else {
            window.location.href = `/service/${encodedURL}`;
        }
    }
} else {
    window.location.href = "/apps/ruffle/local/index.html";
}