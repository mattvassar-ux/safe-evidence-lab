# SAFE Evidence Lab website

Static website for the SAFE Evidence Lab at Oklahoma State University Center for Health Sciences. Plain HTML, CSS, and JavaScript: no build step, no dependencies. It works on GitHub Pages as-is.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `safe-evidence-lab`).
2. Upload everything in this folder to the repository root, keeping the folder structure.
3. In the repository, open **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/safe-evidence-lab/`.

To use a custom domain (for example `safe.vassar.team`), add it under **Settings → Pages → Custom domain** and create the matching DNS record with your domain host.

## Add headshots

Drop a photo for each person into `images/team/` using these file names. JPG, JPEG, PNG, or WebP all work. Roughly square or 4:5, at least 600 px wide. On Windows, turn on "File name extensions" in File Explorer so the file is not accidentally saved as `matt-vassar.jpg.jpg`. Until a photo exists, the site shows the person's initials in its place.

| Person | File |
|---|---|
| Matt Vassar | `matt-vassar.jpg` |
| Alicia Ito Ford | `alicia-ito-ford.jpg` |
| Josiah Taru | `josiah-taru.jpg` |
| Arnab Mukherjee | `arnab-mukherjee.jpg` |
| Melissa Miller | `melissa-miller.jpg` |
| Ryan Middleton | `ryan-middleton.jpg` |
| MacKenzie Lance-Jones | `mackenzie-lance-jones.jpg` |
| Amanda Sellers | `amanda-sellers.jpg` |
| Josh Wardle | `josh-wardle.jpg` |
| Evan Shetley | `evan-shetley.jpg` |
| Jack Jones | `jack-jones.jpg` |
| Kohl Kirby | `kohl-kirby.jpg` |
| Nick Camasso | `nick-camasso.jpg` |
| Tanner Livsey | `tanner-livsey.jpg` |
| Nevada Denton | `nevada-denton.jpg` |
| Lydia Hashemi | `lydia-hashemi.jpg` |
| Eva Chen | `eva-chen.jpg` |
| Malachi Penland | `malachi-penland.jpg` |
| Madeline Rowe | `madeline-rowe.jpg` |
| Cord Morlan | `cord-morlan.jpg` |
| Rylee Langerman | `rylee-langerman.jpg` |
| David Waxman | `david-waxman.jpg` |
| Kaley Armstrong | `kaley-armstrong.jpg` |
| Connor Casey | `connor-casey.jpg` |
| Kennedy Stone | `kennedy-stone.jpg` |
| William "Tag" Harris | `tag-harris.jpg` |
| Tasfia Hasin | `tasfia-hasin.jpg` |
| Kira Carter | `kira-carter.jpg` |
| Gant Duncan | `gant-duncan.jpg` |
| Lindsey Eshenbaugh | `lindsey-eshenbaugh.jpg` |
| Andrew Davis | `andrew-davis.jpg` |
| Haley Houk | `haley-houk.jpg` |
| Hayden Keeler | `hayden-keeler.jpg` |
| Keira Ley | `keira-ley.jpg` |
| Micaylon Moore | `micaylon-moore.jpg` |

## Update content

All people, awards, and publications live in `assets/data.js`. Edit names, titles, and descriptions there; the page rebuilds itself on load.

- **New person:** copy an existing entry, change the fields, and add a photo with the matching `photo` name.
- **Student groups:** each student has `groups: ["summer-2027"]` (or `"winter"`, `"summer-2028"`, or more than one). The headings and filter buttons come from `studentGroups` near the top of the students list; add a new entry there (for example `summer-2029`) to start a new cohort heading.
- **Publications:** each entry needs a `topic` (`harms`, `transparency`, `data`, `ai`, or `integrity`) and a DOI.
- **Bold names:** add a student's author-list form (e.g. `"Penland M"`) to `highlight`.

Page text (hero, research tracks, training, contact) is in `index.html`. Colors and fonts are set at the top of `assets/style.css`.

## Before going live, please confirm

- Credentials and titles in `assets/data.js` (PhD listed for postdoctoral fellows, Melissa Miller's start date, staff titles).
- Alicia Ito Ford's title is set to **Senior Faculty Investigator**.
- The hero chart is illustrative and labeled as such.

## Files

```
index.html          Page structure and section text
assets/style.css    Design tokens, layout, light and dark themes
assets/data.js      People, awards, publications
assets/main.js      Renders data, filters, mobile menu
images/team/        Headshots
.nojekyll           Tells GitHub Pages to serve files as-is
```
