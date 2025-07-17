// assets/controllers/csrf_protection_controller.js
import { Controller } from '@hotwired/stimulus';

const nameCheck = /^[-_a-zA-Z0-9]{4,22}$/;
const tokenCheck = /^[-_\/+a-zA-Z0-9]{24,}$/;

export default class extends Controller {
    connect() {
        console.log('CSRF protection controller connected');
        document.addEventListener('submit', (event) => {
            this.generateCsrfToken(event.target);
        }, true);

        document.addEventListener('turbo:submit-start', (event) => {
            const headers = this.generateCsrfHeaders(event.detail.formSubmission.formElement);
            Object.keys(headers).forEach((key) => {
                event.detail.formSubmission.fetchRequest.headers[key] = headers[key];
            });
        });

        document.addEventListener('turbo:submit-end', (event) => {
            this.removeCsrfToken(event.detail.formSubmission.formElement);
        });
    }

    generateCsrfToken(formElement) {
        const csrfField = formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
        if (!csrfField) return;

        let csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
        let csrfToken = csrfField.value;

        if (!csrfCookie && nameCheck.test(csrfToken)) {
            csrfField.setAttribute('data-csrf-protection-cookie-value', csrfCookie = csrfToken);
            csrfField.defaultValue = csrfToken = btoa(String.fromCharCode.apply(null, (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(18))));
            csrfField.dispatchEvent(new Event('change', { bubbles: true }));
        }

        if (csrfCookie && tokenCheck.test(csrfToken)) {
            const cookie = `${csrfCookie}_${csrfToken}=${csrfCookie}; path=/; samesite=strict`;
            document.cookie = window.location.protocol === 'https:' ? `__Host-${cookie}; secure` : cookie;
        }
    }

    generateCsrfHeaders(formElement) {
        const headers = {};
        const csrfField = formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
        if (!csrfField) return headers;

        const csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
        if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
            headers[csrfCookie] = csrfField.value;
        }

        return headers;
    }

    removeCsrfToken(formElement) {
        const csrfField = formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
        if (!csrfField) return;

        const csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
        if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
            const cookie = `${csrfCookie}_${csrfField.value}=0; path=/; samesite=strict; max-age=0`;
            document.cookie = window.location.protocol === 'https:' ? `__Host-${cookie}; secure` : cookie;
        }
    }
}
