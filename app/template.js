export default function Template({ children }) {
  return (
    <>
      <style>{`
        .site-header .brand {
          display: flex;
          align-items: center;
          width: auto;
          min-width: 215px;
          height: 64px;
          padding-left: 74px;
          background: transparent url('/nikah-logo.png') left center / 62px auto no-repeat;
          font-size: 0 !important;
          line-height: 0 !important;
          letter-spacing: 0 !important;
          color: transparent !important;
        }

        .site-header .brand::after {
          content: 'Online Nikah Services';
          display: block;
          font: 700 17px/1.15 var(--serif);
          letter-spacing: -0.02em;
          color: var(--emerald);
          white-space: nowrap;
        }

        .site-header .brand em,
        .site-header .brand span {
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
        }

        @media (max-width: 800px) {
          .site-header .brand {
            min-width: 190px;
            height: 56px;
            padding-left: 64px;
            background-size: 54px auto;
          }

          .site-header .brand::after {
            font-size: 15px;
          }
        }
      `}</style>
      {children}
    </>
  )
}
