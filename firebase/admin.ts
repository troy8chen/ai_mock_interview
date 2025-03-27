import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { adminConfig } from '../firebase.config';

const apps = getApps();

if (!apps.length) {
  initializeApp({
    credential: cert(adminConfig)
  });
}

export const db = getFirestore();
