import { useVisible } from '../hooks/useVisible';

function AboutBox({ children }) {
  const [ref, visible] = useVisible();

  return (
    <div ref={ref} className={`about-box${visible ? ' visible' : ''}`}>
      {children}
    </div>
  );
}

export default AboutBox;
