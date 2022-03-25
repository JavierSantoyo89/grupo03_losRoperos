const multer = require('multer');

const path = require('path')

// ************ Multer ************
const multerDiskStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        let folder = path.join(__dirname, '../../public/images/users');
        cb(null, folder);
    },
    filename: (req,file,cb) => {
        let filename = 'User' + Date.now() + path.extname(file.originalname);
        //`${Date.now()}_img${path.extname(file.originalname)}`;
        //let filename =file.fieldname + '-' + Date.now()
        cb(null,filename)
        console.log('El nombre de la imagen en el router es: ' + filename);
    }
})
let fileUpload= multer({ storage: multerDiskStorage}).single("avatar")

module.exports = fileUpload