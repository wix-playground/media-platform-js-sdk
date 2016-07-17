var ImageRequest = require('./image-request');
var urlParser = require('./image-url-parser');
var OriginalFileData = require('./operation/technical/original-file-data');

/**
 * @param {string} host
 * @param {ImageDTO} imageDto
 * @returns ImageRequest
 */
function fromDto (host, imageDto) {
    var parts = imageDto.fileUrl.split('/');
    var bucket = parts[0] + '/' + parts[1];
    var baseUrl = host + bucket;
    var imageId = imageDto.fileName;
    var imageName = imageDto.originalFileName;
    var fileData = new OriginalFileData(imageDto.width, imageDto.height, imageDto.mimeType);

    return new ImageRequest(baseUrl, imageId, imageName, fileData);
}

/**
 * @param {string} url
 * @returns ImageRequest
 */
function fromUrl (url) {
    return urlParser.toImageRequest(url);
}

//TODO: add fromUploadResponse

/**
 * @type {{fromDTO: fromDTO, fromURL: fromUrl}}
 */
module.exports = {
    fromDto: fromDto,
    fromUrl: fromUrl
};