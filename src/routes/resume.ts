import { Router } from 'express';
import path from 'path';

export const router = Router();

router.get('/', (req,res) => {
    res.redirect('/#resume');
});

router.get('/#resume', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})