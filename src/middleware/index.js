"use strict";
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../configs/cloudinary.config");
const storageFile = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: `task/${req.params.id}`,
      resource_type: "raw",
      raw_convert: "aspose",
      public_id: file.originalname,
    };
  },
});
<<<<<<< HEAD
const uploadFile = multer({
  storage: storageFile,
});
module.exports = { uploadFile };
=======
const storageProjectFile = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: `project/${req.params.id}`,
      resource_type: "raw",
      raw_convert: "aspose",
      public_id: file.originalname,
    };
  },
});
const uploadClient = multer({
  storage: storageClient,
});
const uploadProject = multer({
  storage: storageProjectFile,
});
module.exports = { uploadClient, uploadProject };
>>>>>>> 5806bdd8535c4636411fe4005766ab4eb05caf0d
