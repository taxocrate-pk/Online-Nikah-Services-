# Online Nikah Services migration checklist

## Status: incomplete pending a verified WordPress inventory

- [x] Proposed Next.js routes implemented for the reviewed brief.
- [x] Canonical base set to `https://onlinenikahservices.com`.
- [x] Sitemap and robots route added.
- [x] Country pages avoid unverified offices, legal guarantees and invented fees.
- [ ] Export the current WordPress URL inventory, including indexed city and post URLs.
- [ ] Compare the export against the new routes before removing, renaming or redirecting anything.
- [ ] Decide redirects only from verified old URLs; do not blanket redirect unknown city URLs.
- [ ] Review current legal, registration, translation and attestation wording with the service team.
- [ ] Confirm current phone routing and any physical office details before launch.
- [ ] Verify Search Console coverage and submit the production sitemap after DNS launch.

## Proposed URL mapping

| New route | Purpose | Old URL decision |
| --- | --- | --- |
| `/` | International Online Nikah homepage | Audit before mapping |
| `/our-services/` | Service overview | Audit before mapping |
| `/pakistan/` | Pakistan service guide | Audit before mapping |
| `/united-arab-emirates/` | UAE service guide | Audit before mapping |
| `/saudi-arabia/` | Saudi Arabia service guide | Audit before mapping |
| `/qatar/` | Qatar service guide | Audit before mapping |
| `/united-kingdom/` | UK service guide | Audit before mapping |
| `/united-states/` | US service guide | Audit before mapping |
| `/canada/` | Canada service guide | Audit before mapping |
| `/blogs/` | Blog index | Audit before mapping |
| `/about-us/` | About page | Audit before mapping |
| `/contact-us/` | Contact page | Audit before mapping |

No old URL has been invented or redirected in this review build.
