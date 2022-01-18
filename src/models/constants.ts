export const MOBILE_MIN_WIDTH = '280px'
export const TABLET_MIN_WIDTH = '560px'
export const DESKTOP_MIN_WIDTH = '1024px'

export const PRIMARY_COLOR = '#8DCC71' // manifest.json 파일의 theme_color 필드랑 일치
export const PRIMARY_ACHROMATIC_COLOR = '#4D4D4D'
export const PRIMARY_BACKGROUND_COLOR = '#F8F6FA'
export const PRIMARY_GREY_COLOR = '#B5B5B5'
export const PRIMARY_DARK_GREY_COLOR = '#787878'
export const PRIMARY_RED_COLOR = '#D70F0F'

export const NAVIGATION_HEIGHT = '4.5rem'

export const SECONDARY_BACKGROUND_COLOR = '#2fccba'
export const SECONDARY_TEXT_COLOR = '#2fccba'
export const SECONDARY_ACHROMATIC_COLOR = '#2fccba'

export const APPLICATION_SHORT_NAME = '제주식물'
export const APPLICATION_NAME = '제주식물 (Jeju plant)'
export const CANONICAL_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://jeju-plant.vercel.app'
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'
