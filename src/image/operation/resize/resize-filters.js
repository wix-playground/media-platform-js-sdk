/**
 * Created by elad on 13/06/2016.
 */

/**
 * @summary Resize filters for use with resize operations
 * @readonly
 * @enum
 */
var ResizeFilters = {
    POINT: 1,
    BOX: 2,
    TRIANGLE: 3,
    HERMITE: 4,
    HANNING: 5,
    HAMMING: 6,
    BLACKMAN: 7,
    GAUSSIAN: 8,
    QUADRATIC: 9,
    CUBIC: 10,
    CATROM: 11,
    MITCHELL: 12,
    JINC: 13,
    SINC: 14,
    SINC_FAST: 15,
    KAISER: 16,
    WELCH: 17,
    PARZEN: 18,
    BOHMAN: 19,
    BARTLETT: 20,
    LAGRANGE: 21,
    LANCZOS: 22,
    LANCZOS_SHARP: 23,
    LANCZOS2: 24,
    LANCZOS2_SHARP: 25,
    ROBIDOUX: 26,
    ROBIDOUX_SHARP: 27,
    COSINE: 28
};

/**
 * @type {{POINT: number, BOX: number, TRIANGLE: number, HERMITE: number, HANNING: number, HAMMING: number, BLACKMAN: number, GAUSSIAN: number, QUADRATIC: number, CUBIC: number, CATROM: number, MITCHELL: number, JINC: number, SINC: number, SINC_FAST: number, KAISER: number, WELCH: number, PARZEN: number, BOHMAN: number, BARTLETT: number, LAGRANGE: number, LANCZOS: number, LANCZOS_SHARP: number, LANCZOS2: number, LANCZOS2_SHARP: number, ROBIDOUX: number, ROBIDOUX_SHARP: number, COSINE: number}}
 */
module.exports = ResizeFilters;