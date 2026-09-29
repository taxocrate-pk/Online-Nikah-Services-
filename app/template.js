export default function Template({ children }) {
  return (
    <>
      <style>{`
        .site-header .brand {
          display: block;
          width: 94px;
          min-width: 94px;
          height: 64px;
          background: transparent url('/nikah-logo.png') center / contain no-repeat;
          font-size: 0 !important;
          line-height: 0 !important;
          letter-spacing: 0 !important;
          color: transparent !important;
        }

        .site-header .brand em,
        .site-header .brand span {
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
        }

        @media (max-width: 800px) {
          .site-header .brand {
            width: 82px;
            min-width: 82px;
            height: 56px;
          }
        }
      `}</style>
      {children}
    </>
  )
}
