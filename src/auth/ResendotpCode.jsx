/**
 * @component   : ResendotpCode
 * @author      : ale (ale@ale)
 * @created     : sábado ago 17, 2024 11:31:33 -04
 * @description : ResendotpCode
 */
import React from 'react';

function ResendotpCode() {
  return (
    <div className="max-w-sm max-w-md mx-auto mt-20 border rounded">
      <form className="px-4 py-6 shadow-md">
        <div className="flex justify-center mb-6 gap-2">
          <input
            className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            maxLength="1"
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
          <input
            className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            maxLength="1"
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
          <input
            className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            maxLength="1"
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
          <input
            className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            type="text"
            maxLength="1"
            pattern="[0-9]"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Verify
          </button>
          <a
            className="inline-block ml-4 text-sm font-bold text-teal-500 align-baseline hover:text-teal-800"
            href="#"
          >
            Resend OTP
          </a>
        </div>
      </form>
    </div>
  );
}

export default ResendotpCode;

