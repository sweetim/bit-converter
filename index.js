'use strict';

module.exports = {
    toByte: (src, startIndex) => {
        startIndex = startIndex || 0;

        return (src[startIndex] << 24) >> 24;
    },
    toShort: (src, startIndex) => {
        startIndex = startIndex || 0;

        return ((src[startIndex] << 8 | src[startIndex + 1]) << 16) >> 16;
    },
    toInt: (src, startIndex) => {
        startIndex = startIndex || 0;

        return src[startIndex] << 24
            | src[startIndex + 1] << 16
            | src[startIndex + 2] << 8
            | src[startIndex + 3];
    }
}
