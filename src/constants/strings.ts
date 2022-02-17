export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Fena Değil!', 'Süper', 'Güzel İş!']
export const GAME_COPIED_MESSAGE = 'Oyun panoya kopyalandı'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Yeterli Harf Yok! (5 harf giriniz)'
export const WORD_NOT_FOUND_MESSAGE = 'Kelime Listesinde Bulunamadı!'
export const HARD_MODE_ALERT_MESSAGE =
  'Zor Mod yalnızca başlangıçta etkinleştirilebilir!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Kelime ${solution} idi`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Sil'
export const STATISTICS_TITLE = 'İSTATİSTİKLER'
export const GUESS_DISTRIBUTION_TEXT = 'TAHMİN DAĞILIMI'
export const NEW_WORD_TEXT = 'Yeni Kelime'
export const SHARE_TEXT = 'Paylaş'
export const TOTAL_TRIES_TEXT = 'Toplam Deneme'
export const SUCCESS_RATE_TEXT = 'Başarı Oranı'
export const CURRENT_STREAK_TEXT = 'Mevcut Galibiyet'
export const BEST_STREAK_TEXT = 'En İyi Galibiyet'
