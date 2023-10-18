import { En } from './En';
import { Es } from './Es';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: En,
        es: Es,
    },
}));
