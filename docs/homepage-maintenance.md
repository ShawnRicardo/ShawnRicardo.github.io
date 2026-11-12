# Homepage maintenance

The homepage uses the **default Home** layout from
[luost26/academic-homepage](https://github.com/luost26/academic-homepage),
adapted from commit `69f658932b7c912305a861b88a0cadcfac46e071`.
The template's MIT license is retained in `assets/academic-homepage/LICENSE`.
The existing Jekyll/GitHub Pages setup and URLs are retained; the new layout
is isolated from the older Academic Pages layouts.

## Content

- `_pages/about.md`: biography and homepage metadata.
- `_config.yml`: name, email, portrait, affiliation, and social links.
- `_data/homepage.yml`: research interests, education, awards, news, and publications.
- `_data/navigation.yml`, `pages`: navigation for the new layout.
- `files/cv.pdf`: downloadable CV.

Add publications under `publications` in `_data/homepage.yml`, in display order.
Use the real author order and resource URLs. An author matching `site.name`
(`Lijun Guo`) is rendered in bold. Both the homepage and `/publications/` use
this data, so a new entry appears in both places.

## Layout and assets

- `_layouts/academic.html`: shell, navigation, footer.
- `_layouts/academic-home.html`: default Home grid (profile left, content right).
- `_includes/academic/`: profile, education, news, and publication components.
- `assets/academic-homepage/global.css`: upstream template styles.
- `assets/academic-homepage/personal.css`: local fonts and responsive adaptations.
- `assets/academic-homepage/navigation.js`: mobile navigation.

Essential CSS, icons, fonts, and thumbnails are served locally. Bootstrap 4.6.0
and Font Awesome 6.5.1 retain their upstream license headers; the existing
Academicons and Font Awesome font assets are reused. Lato is distributed under
the SIL Open Font License (`assets/academic-homepage/fonts/OFL.txt`).
Paper thumbnail source URLs are recorded as `cover_source` in the data file.
Short publication descriptions are based on the project pages and abstracts.

## Preview

```sh
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Build without serving:

```sh
bundle exec jekyll build --trace
```

On this Mac, Ruby 3.4.1 is installed under
`/Users/ricardo/.rubies/ruby-3.4.1/bin`; put that directory first on `PATH`
when the system Ruby is selected by default.
