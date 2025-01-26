/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

console.log("hello world");

// Define the Google Drive file IDs and their corresponding destination paths
const files = {
    [process.env.PROFILE_PICTURE_ID]: "/root/portfolio/website/public/profile_picture/profile_mobile.png",
    [process.env.LOGENTRY_DETAILS_ID]: "/root/portfolio/website/src/app/content_config/career/logentryDetails.ts",
    [process.env.AUTHOR_DETAILS_ID]: "/root/portfolio/website/src/app/content_config/author/authorDetails.ts"
};

// Function to download a file from Google Drive
async function downloadFile(fileId, destination) {
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const writer = fs.createWriteStream(destination);

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

// Ensure the directory exists
function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

// Download each file and move it to the correct directory
async function downloadFiles() {
    for (const [fileId, destination] of Object.entries(files)) {
        if (fileId) {
            console.log(`Downloading file with ID ${fileId} to ${destination}`);
            ensureDirectoryExistence(destination);
            await downloadFile(fileId, destination);
        } else {
            console.log(`File ID for destination ${destination} is not set.`);
        }
    }
    console.log("All files have been downloaded and placed in the correct directories.");
}

downloadFiles().catch(console.error);