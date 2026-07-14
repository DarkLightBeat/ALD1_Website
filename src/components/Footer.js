import '../styles/layout.css';

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/ald1.official',     label: 'INSTAGRAM'  },
  { href: 'https://x.com/ALD1_official',                label: 'X (GLOBAL)' },
  { href: 'https://x.com/ALD1_jp',                      label: 'X (JAPAN)'  },
  { href: 'https://www.tiktok.com/@ald1_official',      label: 'TIKTOK'     },
  { href: 'https://www.youtube.com/@ALD1.official',     label: 'YOUTUBE'    },
  { href: 'https://www.douyin.com/user/@ALD1_official', label: 'DOUYIN'     },
  { href: 'https://weibo.com/u/alphadriveoneo',          label: 'WEIBO'      },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>FOLLOW ALPHA DRIVE ONE</h3>

        <div className="social-links">
          {SOCIAL_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="sns-link"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="footer-credit">
          SYSTEM STATUS: ONLINE | © 2025 ALPHA DRIVE ONE
        </p>
      </div>
    </footer>
  );
}

export default Footer;
