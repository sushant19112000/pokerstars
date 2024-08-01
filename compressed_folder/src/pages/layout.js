// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.min.css';
// import './globals.css'
// import { Navigation } from '@/app/components/navigation'
// import BootstrapClient from '@/app/components/BootstrapClient.js';
// import { useRouter } from 'next/router';
// import { Newfooter } from '@/app/components/newfooter';
// import { useEffect, useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { RecoilRoot } from "recoil";

// const nonNavbar=[
//   "-mailer",
//   "generative-ai-myths-realities-and-practical-use-cases-landing-page",
//   "dzone-temp",
//   "gitex-africa-2024-check-point-software",
//   "gitex-africa-2024-exclusive-dinner-taste-the-essence-of-morocco",
//   "announcing-the-inaugural-cloud-solutions",
//   "series-s-track-busway",
//   "unveiling-it-digital-spending-trends",
//   "your-invitation-to-attend-the-inaugural-cloud-solutions",
//   "cisos-cloud-security-demands-and-influences",
//   "africa-ciso-cloud-security-readiness-survey"
// ]


// export default function RootLayout({ children }) {
//   const router = useRouter();
//   const [isMailerPage, setIsMailerPage] = useState(false)
//   const [isRootUrl, setRootUrl] = useState(false)
//   const { url } = router.query;
//   const path = router.pathname
//   const [shouldRenderNavAndFooter, setShouldRenderNavAndFooter] = useState(false);
//   useEffect(() => {
//     if (nonNavbar.some(item => path.includes(item))) {
//       setRootUrl(true)
//       const value=path.includes('-mailer')
      
//     }
//     if (url != null) {
//       const isMailer = url.includes('-mailer')
//       setIsMailerPage(isMailer)
//     }
//   }, [])

//   const isAdminPage = router.pathname.includes('admin')
//   return (
//     <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: '#000000', boxShadow: '' }}>
//      {!isRootUrl && !isMailerPage && !isAdminPage && (
//         <div style={{ backgroundColor: '#000000' }}>
//           <div className='container'>
//             <Navigation />
//           </div>
//         </div>
//       )}
//       <main className="flex-grow-1" style={{ backgroundColor: '#f3f4f6' }}>
//         <div className=''>
//           {children}
//         </div>
//       </main>
//       {!isRootUrl && !isMailerPage && !isAdminPage &&  <Newfooter />}
//       <BootstrapClient />
//     </div>
//   );
// }

// export const useClient = true;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './globals.css';
import { Navigation } from '@/app/components/navigation';
import BootstrapClient from '@/app/components/BootstrapClient.js';
import { useRouter } from 'next/router';
import { Newfooter } from '@/app/components/newfooter';
import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { RecoilRoot } from "recoil";

const nonNavbar = [
  "-mailer",
  "generative-ai-myths-realities-and-practical-use-cases-landing-page",
  "dzone-temp",
  "gitex-africa-2024-check-point-software",
  "gitex-africa-2024-exclusive-dinner-taste-the-essence-of-morocco",
  "announcing-the-inaugural-cloud-solutions",
  "series-s-track-busway",
  "unveiling-it-digital-spending-trends",
  "your-invitation-to-attend-the-inaugural-cloud-solutions",
  "cisos-cloud-security-demands-and-influences",
  "africa-ciso-cloud-security-readiness-survey",
  "survey2",
  "digital-technology-report-at-gitex-2024"
];

export default function RootLayout({ children }) {
  const router = useRouter();
  const [shouldRenderNavAndFooter, setShouldRenderNavAndFooter] = useState(false);

  useEffect(() => {
    const path = router.pathname;
    const { url } = router.query;

    const isRootUrl = nonNavbar.some(item => path.includes(item));
    const isMailerPage = url ? url.includes('-mailer') : false;
    const isAdminPage = path.includes('admin');

    if (!isRootUrl && !isMailerPage && !isAdminPage) {
      const timer = setTimeout(() => {
        setShouldRenderNavAndFooter(true);
      }, 1000); // Adjust the timeout duration as needed

      return () => clearTimeout(timer);
    }
  }, [router.pathname, router.query]);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: '#000000', boxShadow: '' }}>
      {/* {shouldRenderNavAndFooter && (
        <div style={{ backgroundColor: '#000000' }}>
          <div className='container'>
            <Navigation />
          </div>
        </div>
      )} */}
      <main className="flex-grow-1" style={{ backgroundColor: '#f3f4f6' }}>
        <div className=''>
          {children}
        </div>
      </main>
      {/* {shouldRenderNavAndFooter && <Newfooter />} */}
      <BootstrapClient />
    </div>
  );
}

export const useClient = true;
