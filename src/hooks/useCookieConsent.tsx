import { useState, useEffect } from 'react'

export type CookieCategory = 'essential' | 'analytics' | 'marketing'

export interface CookiePreferences {
    essential: boolean // Sempre true
    analytics: boolean
    marketing: boolean
}

export type ConsentStatus = 'pending' | 'accepted' | 'rejected' | 'customized'

interface CookieConsentState {
    status: ConsentStatus
    preferences: CookiePreferences
    lastUpdated: string | null
}

const STORAGE_KEY = 'midas-cookie-consent'

const defaultPreferences: CookiePreferences = {
    essential: true,
    analytics: false,
    marketing: false
}

export function useCookieConsent() {
    const [consentState, setConsentState] = useState<CookieConsentState>(() => {
        // Ler do localStorage na inicialização
        try {
            const stored = localStorage.getItem(STORAGE_KEY)
            if (stored) {
                return JSON.parse(stored)
            }
        } catch (error) {
            console.error('Error reading cookie consent from localStorage:', error)
        }

        return {
            status: 'pending' as ConsentStatus,
            preferences: defaultPreferences,
            lastUpdated: null
        }
    })

    // Salvar no localStorage quando mudar
    useEffect(() => {
        if (consentState.status !== 'pending') {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(consentState))
            } catch (error) {
                console.error('Error saving cookie consent to localStorage:', error)
            }
        }
    }, [consentState])

    const acceptAll = () => {
        setConsentState({
            status: 'accepted',
            preferences: {
                essential: true,
                analytics: true,
                marketing: true
            },
            lastUpdated: new Date().toISOString()
        })
    }

    const rejectAll = () => {
        setConsentState({
            status: 'rejected',
            preferences: {
                essential: true, // Essenciais sempre ativos
                analytics: false,
                marketing: false
            },
            lastUpdated: new Date().toISOString()
        })
    }

    const savePreferences = (preferences: CookiePreferences) => {
        setConsentState({
            status: 'customized',
            preferences: {
                ...preferences,
                essential: true // Garantir que essenciais estão sempre ativos
            },
            lastUpdated: new Date().toISOString()
        })
    }

    const resetConsent = () => {
        localStorage.removeItem(STORAGE_KEY)
        setConsentState({
            status: 'pending',
            preferences: defaultPreferences,
            lastUpdated: null
        })
    }

    return {
        status: consentState.status,
        preferences: consentState.preferences,
        lastUpdated: consentState.lastUpdated,
        acceptAll,
        rejectAll,
        savePreferences,
        resetConsent,
        hasConsent: consentState.status !== 'pending'
    }
}
