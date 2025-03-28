'use server'

import { db, auth } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams) {
    const { uid, name, email} = params;

    try {
        const userRecord = await db.collection('users').doc(uid).get();
        if(userRecord.exists) {
            return {
                success: false,
                message: 'User already exists, please sign in',
            }
        }

        await db.collection('users').doc(uid).set({
            name,
            email,
        });

        return {
            success: true,
            message: 'Accountcreated successfully. Please sign in.'
        }
        
        
    } catch (error: any) {
        console.error('Error creating user', error);

        if(error.code === 'auth/email-already-exist') {
            return {
                success: false,
                error: 'This email is already in use',
            }
        }

        return {
            success: false,
            error: 'Failed to create account',
        }
    }
}

export async function signIn(params: SignInParams) {
    const { email, idToken } = params;

    try{
        const userRecord = await auth.getUserByEmail(email);
        if(!userRecord) {
            return {
                success: false,
                message: 'User does not exist, please create an account',       
            }
        }

        await setSessionCookie(idToken);
    } catch (error: any) {
        console.log(error);

        return {
            success: false,
            error: 'Failed to log into an account',
        }
    }
}

export async function setSessionCookie(idToken: string) {
    const cookeStore = await cookies();
    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000,
    });

    cookeStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
    });
}

export async function getCurrentUser() : Promise<User | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if(!sessionCookie) {
        return null;
    }

    try {
        const decodeClaims = await auth.verifySessionCookie(sessionCookie, true);
        const userRecord = await db.
            collection('users')
            .doc(decodeClaims.uid)
            .get();

        if(!userRecord.exists) {
            return null;
        }

        return {
            ...userRecord.data(),
            id: userRecord.id,
        } as User;
             
    } catch(error){
        console.log(error)
        return null;
    }
        
}

export async function isAuthenticated() {
    const user = await getCurrentUser();
    return !!user;
}
