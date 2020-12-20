import multer, { FileFilterCallback, Multer } from 'multer';
import { v4 as uuid } from 'uuid';
import { extname } from 'path';
import { Request } from 'express';

const storageEngine = multer.diskStorage({
	destination: 'public/images',
	filename: (_, file, cb) => {
		const fileName = uuid() + extname(file.originalname);
		cb(null, fileName);
	},
});

export const uploadOptions = {
	storage: storageEngine,
	dest: 'public/images',
	limits: {
		fileSize: 1000000,
	},
	fileFilter: (
		req: Request,
		file: Express.Multer.File,
		cb: FileFilterCallback
	) => {
		const fileTypes = /jpeg|jpg|png/;
		const mimeType = fileTypes.test(file.mimetype);
		const extension = fileTypes.test(extname(file.originalname));
		if (mimeType && extension) {
			return cb(null, true);
		}
		req.res.send({ error: true, msg: 'Extension del archivo invalida' });
	},
};
