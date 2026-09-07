# SCUUBA — GitHub Pages package

This ZIP is intentionally FLAT so that `index.html` is in the repository root.

Upload the CONTENTS of this ZIP directly into your GitHub repository:

index.html
css/
js/
assets/
...

Do NOT upload the ZIP file itself.

Then:
1. Repository -> Settings
2. Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Save

The site is static and can be hosted by GitHub Pages.

The future Python control system is kept separate. GitHub Pages cannot run Python directly.
A Python API can later control OPEN / CLOSE / LOCK state for the public website.
Never put admin passwords or private API tokens into this repository.
