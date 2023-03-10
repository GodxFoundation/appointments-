'use strict';

// [START import]
const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const spawn = require('child-process-promise').spawn;
// const path = require('path');
// const os = require('os');
// const fs = require('fs');
// [END import]

// [START generateThumbnail]
/**
 * When an image is uploaded in the Storage bucket We generate a thumbnail automatically using
 * ImageMagick.
 */
// [START generateThumbnailTrigger]
exports.generateThumbnail = functions.storage.bucket('instaflutter-images').object().onFinalize(async (object) => {
    //  // [END generateThumbnailTrigger]
    //    // [START eventAttributes]
    // const fileBucket = object.bucket; // The Storage bucket that contains the file.
    // const filePath = object.name; // File path in the bucket.
    // const contentType = object.contentType; // File content type.
    // const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.
    //    // [END eventAttributes]

    //    // [START stopConditions]
    //    // Exit if this is triggered on a file that is not an image.
    // if (!contentType.startsWith('image/')) {
    //     return functions.logger.log('This is not an image.');
    // }

    // //    // Get the file name.
    // const fileName = path.basename(filePath);
    // //    // Exit if the image is already a thumbnail.
    // if (fileName.startsWith('thumb_')) {
    //     return functions.logger.log('Already a Thumbnail.');
    // }
    //    // [END stopConditions]

    //    // [START thumbnailGeneration]
    //    // Download file from bucket.
    // const bucket = admin.storage().bucket(fileBucket);
    // const tempFilePath = path.join(os.tmpdir(), fileName);
    // const metadata = {
    //     contentType: contentType,
    // };
    // await bucket.file(filePath).download({ destination: tempFilePath });
    // functions.logger.log('Image downloaded locally to', tempFilePath);
    // //    // Generate a thumbnail using ImageMagick.
    // await spawn('convert', [tempFilePath, '-thumbnail', '500x500>', tempFilePath]);
    // functions.logger.log('Thumbnail created at', tempFilePath);
    // //    // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
    // const thumbFileName = `thumb_${fileName}`;
    // const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);
    // //    // Uploading the thumbnail.
    // await bucket.upload(tempFilePath, {
    //     destination: thumbFilePath,
    //     metadata: metadata,
    // });
    //    // Once the thumbnail has been uploaded delete the local file to free up disk space.
    // return fs.unlinkSync(tempFilePath);
    //    // [END thumbnailGeneration]
});
 // [END generateThumbnail]