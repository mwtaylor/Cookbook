import ExifImage from 'exif';
import { globSync } from 'glob'

let passed_test = false;

await (async () => {
    try {
        let jpeg_files = globSync("**/*.jpeg", {});
        if (jpeg_files.length !== 0) {
            console.log("Found " + jpeg_files.length + " files with invalid extension .jpeg");
            console.log(jpeg_files);
            process.exit(1);
        }
        let files = globSync("**/*.jpg", {});
        let funcs = files.map(async function (file) {
            await new Promise((resolve, reject) => {
                new ExifImage({image: file}, function (error, exifData) {
                    if (error) {
                        if (error.code === "NO_EXIF_SEGMENT") {
                            console.log('No Exif data in ' + file);
                        } else {
                            console.log('Exif Error in file ' + file + ': ' + error.message);
                            process.exit(1);
                        }
                    } else {
                        let gps = exifData['gps'];
                        let has_gps_info = false;
                        if ('GPSLatitudeRef' in gps) {
                            has_gps_info = true;
                        }
                        if ('GPSLatitude' in gps) {
                            has_gps_info = true;
                        }
                        if ('GPSLongitudeRef' in gps) {
                            has_gps_info = true;
                        }
                        if ('GPSLongitude' in gps) {
                            has_gps_info = true;
                        }
                        if (has_gps_info) {
                            if (file.startsWith('node_modules/exif/test')) {
                                console.log("Found a test file with GPS information");
                                passed_test = true;
                            } else {
                                console.log(file + " contains GPS information");
                                process.exit(1);
                            }
                        } else {
                            console.log(file + " does not contain GPS information");
                        }
                    }
                    resolve();
                });
            });
        });
        for (let i = 0; i < funcs.length; i++) {
            await funcs[i];
        }
    } catch (error) {
        console.log('Error: ' + error.message);
        process.exit(1);
    }
})();

if (!passed_test) {
    console.log("Expected to find a test file with GPS information but none were found");
    process.exit(1);
}

console.log("No GPS information found")
