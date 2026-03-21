export const labels = {
  es: {
    siteName: 'Pensando en Voz Alta',
    about: 'Sobre',
    back: '← Volver',
    backToHome: '← Volver al inicio',
    searchPlaceholder: 'Buscar...',
    noResults: 'No se encontraron resultados.',
    noPosts: 'Aún no hay publicaciones.',
    allTags: 'Todos',
    watchVideo: 'Ver el vídeo original',
    translationDisclaimer: 'Esta es una traducción del español original, respetando el tono y la voz del autor lo más fielmente posible.',
  },
  en: {
    siteName: 'Thinking Out Loud',
    about: 'About',
    back: '← Back',
    backToHome: '← Back to home',
    searchPlaceholder: 'Search...',
    noResults: 'No results found.',
    noPosts: 'No posts yet.',
    allTags: 'All',
    watchVideo: 'Watch the original video',
    translationDisclaimer: 'This is a translation from the original Spanish, respecting the author\'s tone and voice as closely as possible.',
  },
} as const;

export type Locale = keyof typeof labels;

export function t(locale: Locale) {
  return labels[locale];
}
