import type { SupportedLocale } from './locales';

type ErrorKey =
  | 'invalidSpread'
  | 'emptyQuestion'
  | 'emptyCards'
  | 'emptyCardName'
  | 'invalidReversed'
  | 'invalidDictionary'
  | 'emptyDescription'
  | 'descriptionTooShort'
  | 'serviceUnavailable'
  | 'interpretationFailed'
  | 'emptyResponse';

const errors: Record<SupportedLocale, Record<ErrorKey, string>> = {
  en: {
    invalidSpread: 'Invalid spread type',
    emptyQuestion: 'Question cannot be empty',
    emptyCards: 'Card list cannot be empty',
    emptyCardName: 'Card name cannot be empty',
    invalidReversed: 'Field reversed must be boolean',
    invalidDictionary: 'Invalid dream dictionary',
    emptyDescription: 'Dream description cannot be empty',
    descriptionTooShort: 'Describe the dream in more detail — at least 10 characters',
    serviceUnavailable: 'Interpretation service is temporarily unavailable. DeepSeek API key is not configured.',
    interpretationFailed: 'Could not get an interpretation from the oracle. Please try again later.',
    emptyResponse: 'The oracle returned an empty response.',
  },
  fr: {
    invalidSpread: 'Type de tirage invalide',
    emptyQuestion: 'La question ne peut pas être vide',
    emptyCards: 'La liste des cartes ne peut pas être vide',
    emptyCardName: 'Le nom de la carte ne peut pas être vide',
    invalidReversed: 'Le champ reversed doit être un booléen',
    invalidDictionary: 'Dictionnaire de rêves invalide',
    emptyDescription: 'La description du rêve ne peut pas être vide',
    descriptionTooShort: 'Décrivez le rêve plus en détail — au moins 10 caractères',
    serviceUnavailable: 'Le service d’interprétation est temporairement indisponible. La clé API DeepSeek n’est pas configurée.',
    interpretationFailed: 'Impossible d’obtenir une interprétation de l’oracle. Veuillez réessayer plus tard.',
    emptyResponse: 'L’oracle a renvoyé une réponse vide.',
  },
  es: {
    invalidSpread: 'Tipo de tirada no válido',
    emptyQuestion: 'La pregunta no puede estar vacía',
    emptyCards: 'La lista de cartas no puede estar vacía',
    emptyCardName: 'El nombre de la carta no puede estar vacío',
    invalidReversed: 'El campo reversed debe ser booleano',
    invalidDictionary: 'Diccionario de sueños no válido',
    emptyDescription: 'La descripción del sueño no puede estar vacía',
    descriptionTooShort: 'Describe el sueño con más detalle — al menos 10 caracteres',
    serviceUnavailable: 'El servicio de interpretación no está disponible temporalmente. La clave API de DeepSeek no está configurada.',
    interpretationFailed: 'No se pudo obtener una interpretación del oráculo. Inténtalo de nuevo más tarde.',
    emptyResponse: 'El oráculo devolvió una respuesta vacía.',
  },
  pt: {
    invalidSpread: 'Tipo de tiragem inválido',
    emptyQuestion: 'A pergunta não pode estar vazia',
    emptyCards: 'A lista de cartas não pode estar vazia',
    emptyCardName: 'O nome da carta não pode estar vazio',
    invalidReversed: 'O campo reversed deve ser booleano',
    invalidDictionary: 'Dicionário de sonhos inválido',
    emptyDescription: 'A descrição do sonho não pode estar vazia',
    descriptionTooShort: 'Descreva o sonho com mais detalhes — pelo menos 10 caracteres',
    serviceUnavailable: 'O serviço de interpretação está temporariamente indisponível. A chave API do DeepSeek não está configurada.',
    interpretationFailed: 'Não foi possível obter uma interpretação do oráculo. Tente novamente mais tarde.',
    emptyResponse: 'O oráculo retornou uma resposta vazia.',
  },
  de: {
    invalidSpread: 'Ungültiger Legesystem-Typ',
    emptyQuestion: 'Die Frage darf nicht leer sein',
    emptyCards: 'Die Kartenliste darf nicht leer sein',
    emptyCardName: 'Der Kartenname darf nicht leer sein',
    invalidReversed: 'Das Feld reversed muss ein Boolean sein',
    invalidDictionary: 'Ungültiges Traumlexikon',
    emptyDescription: 'Die Traumbeschreibung darf nicht leer sein',
    descriptionTooShort: 'Beschreiben Sie den Traum ausführlicher — mindestens 10 Zeichen',
    serviceUnavailable: 'Der Deutungsdienst ist vorübergehend nicht verfügbar. Der DeepSeek-API-Schlüssel ist nicht konfiguriert.',
    interpretationFailed: 'Die Deutung des Orakels konnte nicht abgerufen werden. Bitte versuchen Sie es später erneut.',
    emptyResponse: 'Das Orakel hat eine leere Antwort zurückgegeben.',
  },
  ru: {
    invalidSpread: 'Некорректный тип расклада',
    emptyQuestion: 'Вопрос не может быть пустым',
    emptyCards: 'Список карт не может быть пустым',
    emptyCardName: 'Название карты не может быть пустым',
    invalidReversed: 'Поле reversed должно быть boolean',
    invalidDictionary: 'Некорректный сонник',
    emptyDescription: 'Описание сна не может быть пустым',
    descriptionTooShort: 'Опишите сон подробнее — минимум 10 символов',
    serviceUnavailable: 'Сервис толкования временно недоступен. API-ключ DeepSeek не настроен.',
    interpretationFailed: 'Не удалось получить толкование от оракула. Попробуйте позже.',
    emptyResponse: 'Оракул вернул пустой ответ.',
  },
};

export function tError(locale: SupportedLocale, key: ErrorKey): string {
  return errors[locale][key];
}
