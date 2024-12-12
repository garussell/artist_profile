import React, { useRef, useEffect  } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCaptchaProps {
  onTokenChange: (token: string | null) => void;
  reset: boolean;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ onTokenChange, reset }) => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const onChange = (token: string | null) => {
    onTokenChange(token);
  };

  useEffect(() => {
    if (reset && recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, [reset]);

  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_SITE_KEY!}
        onChange={onChange}
        ref={recaptchaRef}
      />
    </div>
  );
};

export default ReCaptcha;
