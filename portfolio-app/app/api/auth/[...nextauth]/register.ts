import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'POST') return res.status(405).end();

    const {email, firstName, lastName, password} = req.body;

    try{

        const existingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        });

        if(existingUser) return res.status(422).json({error: 'Email Taken'})

        const hashedPassword = bcrypt.hash(password, 12);

        const user = prismadb.user.create({
            data: {
                email,
                firstName,
                lastName,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        });

        if(user) return res.status(200).json(user);

    }catch(error){
        console.log("Fehler bei der Registierung", error);
    }
}