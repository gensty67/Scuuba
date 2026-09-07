# SCUUBA GitHub Pages setup

This version is prepared for GitHub Pages.

Changes made:
- Removed Netlify deployment configuration/references.
- Added `.nojekyll`.
- Added GitHub Pages notes.
- Added an optional Python API bridge under `api/`.
- Existing HTML/CSS/JS design and content were not intentionally redesigned.

GitHub:
1. Create a repository.
2. Upload the CONTENTS of this folder (not the ZIP itself).
3. Settings -> Pages.
4. Source: Deploy from a branch.
5. Branch: main, folder: / (root).
6. Save.

Python control:
GitHub Pages is static, so the Python control server must run separately.
The public website can later call the Python API to read the OPEN/CLOSE/LOCK state.
Do not put admin passwords or API secrets into this repository.
