/*global Ultraviolet*/
self.__uv$config = {
    prefix: window.location.origin + '/uv/service',
    bare: window.location.origin + '/bare1/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
