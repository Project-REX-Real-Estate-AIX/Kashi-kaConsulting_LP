import { SITE_CONFIG } from '../constants'

export function useConsultation() {
  const handleConsultationClick = () => {
    window.open(SITE_CONFIG.consultation_url, '_blank')
  }

  return { handleConsultationClick }
}