import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) {
            throw new Error("File path is required");
        }
        //upload the file
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
        });
        console.log(response.url);
        console.log("File uploaded successfully");
        return response;
    } catch (error) {
        fs.unlinkSync(filePath); // Delete the file if upload fails
        console.error("Error uploading file:", error);
        return null;
    }
};

export { uploadOnCloudinary };
