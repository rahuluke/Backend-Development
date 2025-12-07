import {v2 as cloudninary} from 'cloudinary'
import { response } from 'express';
import fs, { unlink, unlinkSync } from "fs"

 cloudninary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const uploadOnCloudinary = async (localfilePath) => {
  try{
        if(!localfilePath) return null
        //upload the file on cloudinary
         const response = cloudninary.uploader.upload(localfilePath,{
          resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log('file is uploaded on cloudinary',
          response.url);
          return response
  } catch(error){
    fs/unlinkSync(localfilePath) // remove the locally saved temporary file as the upload operation got failed
    return null
  }
}

export {uploadOnCloudinary};
