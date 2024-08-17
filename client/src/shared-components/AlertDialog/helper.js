import Icons from './Icons'

export const COLORS = {
  success: {
    text: 'text-green-700',
    bg: 'bg-green-600',
    bg_soft: 'bg-green-100'
  },
  warning: {
    text: 'text-orange-500',
    bg: 'bg-orange-500',
    bg_soft: 'bg-orange-100'
  },
  error: {
    text: 'text-red-500',
    bg: 'bg-red-500',
    bg_soft: 'bg-red-100'
  },
  info: {
    text: 'text-blue-500',
    bg: 'bg-blue-500',
    bg_soft: 'bg-blue-100'
  },
  primary: {
    text: 'text-blue-500',
    bg: 'bg-blue-500',
    bg_soft: 'bg-blue-100'
  }
}

export const DEFAULT_OPTIONS = {
  title: 'Title placeholder',
  message: 'Message placeholder',
  variant: 'success',
  icon: Icons.success,
  color: COLORS.success
}
