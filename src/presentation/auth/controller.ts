import { Request, Response } from 'express';

export class AuthController {

    constructor(){}

    

    registerUser = (req: Request, res: Response) => {
        res.json({ message: 'Register endpoint' });
    }

    loginUser = (req: Request, res: Response) => {
        res.json({ message: 'Login endpoint' });
    }

    validateEmail = (req: Request, res: Response) => {  
        res.json({ message: 'Validate email endpoint' });
    }

}