const multer = require('multer');

const path = require('path')

// ************ Multer ************
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        let folder = path.join(__dirname, '../../public/images/users');
        cb(null, folder);
    },
    filename: (req,file,cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        //`${Date.now()}_img${path.extname(file.originalname)}`;
        //let filename =file.fieldname + '-' + Date.now()
        cb(null,fileName)
        
    }
})
const uploadFile= multer({storage})

module.exports = uploadFile.single('avatar')