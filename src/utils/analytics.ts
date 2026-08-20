/**
 * Universal Analytics & Conversion Event Tracking Utility
 * Safely integrates with Google Analytics (gtag), Google Tag Manager (dataLayer),
 * Meta Pixel (fbq), and custom analytics endpoints without breaking if trackers are absent.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export type ConversionEvent =
  | 'page_view'
  | 'click_strategy_call'
  | 'submit_strategy_lead'
  | 'submit_contact_form'
  | 'calculate_roi'
  | 'click_whatsapp'
  | 'view_case_study'
  | 'select_service';

export function trackEvent(
  eventName: ConversionEvent,
  params?: Record<string, string | number | boolean | undefined>
): void {
  try {
    // 1. Google Analytics 4 (gtag.js)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // 2. Google Tag Manager (dataLayer)
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Meta Pixel (fbq)
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (eventName === 'submit_strategy_lead' || eventName === 'submit_contact_form') {
        window.fbq('track', 'Lead', params);
      } else {
        window.fbq('trackCustom', eventName, params);
      }
    }

    // 4. Development logging
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Analytics Event] ${eventName}:`, params);
    }
  } catch (err) {
    // Silent fail in production to avoid crashing UI
    console.debug('[Analytics Error]', err);
  }
}
