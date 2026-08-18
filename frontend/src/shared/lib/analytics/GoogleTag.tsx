import { getGaMeasurementId } from './config';
import {
  getGoogleTagInlineScript,
  getGoogleTagScriptSrc,
} from './google-tag-snippet';

const INIT_SCRIPT_ID = 'ga-gtag-init';
const SRC_SCRIPT_ID = 'ga-gtag-js';

/**
 * Server-rendered Google tag. Lives in `<head>` on every locale page so coverage
 * tools see the snippet in HTML, not only after client hydration / cookie consent.
 * Script order matches the official tag: async gtag.js, then the inline bootstrap.
 * The src is async, so consent defaults in the inline script still run first.
 */
export function GoogleTag() {
  const measurementId = getGaMeasurementId();
  if (!measurementId) return null;

  return (
    <>
      <script
        id={SRC_SCRIPT_ID}
        async
        src={getGoogleTagScriptSrc(measurementId)}
      />
      <script
        id={INIT_SCRIPT_ID}
        dangerouslySetInnerHTML={{
          __html: getGoogleTagInlineScript(measurementId),
        }}
      />
    </>
  );
}
