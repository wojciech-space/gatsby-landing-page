# Gatsby Landing Page
Gatsby page template for creating static &amp; simple landing page.

<span>![](https://img.shields.io/github/package-json/v/wiewiordev/gatsby-landing-page?style=flat-square) ![](https://img.shields.io/github/followers/wiewiordev?label=Follow%20on%20GitHub&style=flat-square) ![](https://img.shields.io/twitter/follow/wiewior_dev?color=blue&label=Follow%20on%20Twitter&style=flat-square)</span>

![](https://raw.githubusercontent.com/wiewiordev/gatsby-landing-page/6c47c4f44cbd3c152ff379770e103501b3af3619/gatsby-page.png)

## Features

- statically rendered page
- lightweight
- SEO-ready (Twitter and OpenGraph tags included)

## How to change data

Text data displayed on page and in meta tags in <head> can be found and changed in `config/site-metadata.js`.

| **Property**        | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `pageTitle`         | Page title displayed in browser tab.                         |
| `name`              | Name used in About Me description and footer with copyrights |
| `pageSubtitle`      | Text displayed under Name in About Me section                |
| `seoTitle`          | Page title used in social media where page is shared (e.g. on Twitter or Facebook) |
| `seoDescription`    | Page description used in social media where page is shared (e.g. on Twitter or Facebook) |
| `siteUrl`           | Page URL used in social media where page is shared (e.g. on Twitter or Facebook) |
| `backgroundColor`   | Background color of page                                     |
| `twitterHandle`     | Your Twitter account; used in Twitter where page is shared   |
| `personDescription` | Description displayed in About Me section. One line per each object with `text` property. |
| `socialMedia`       | Array of objects with your social media accounts.<br /><br />`url`: URL of your social media account<br />`displayName`: display name of given account<br />`iconName`: name of icon for given account (find name icon here: [Fork Awesome](https://forkaweso.me/Fork-Awesome/icons/)) |
| `projects`          | Array of objects with your projects.<br /><br />`url`: URL of your project<br />`displayName`: display name of given project<br />`languageIconName`: name of icon for project's main language (find name icon here: [Fork Awesome](https://forkaweso.me/Fork-Awesome/icons/))<br />`sourceIconName`: name of icon for given project's repository page, e.g. GitHub, GitLab, BitBucket (find name icon here: [Fork Awesome](https://forkaweso.me/Fork-Awesome/icons/)) |

- Image used in About Me section can be replaced in `src/images/avatar.png`. Suggested image size is 240x240 px. If you want to rename file, please update filename in `src/pages/index.js` in `query` function:

```javascript
imageSharp(fixed: {originalName: {eq: "<new filename>.[ext]"}}) {
```

- Image used for displaying in social media can be replaced in `src/images/social-media-cover.png`. Suggested image size is 1200x630 px. If you want to rename file, please update filename in `src/components/seo.js` in `useStaticQuery` function:

```javascript
imageSharp(fixed: {originalName: {eq: "<new filename>.[ext]"}}) {
```

- Favicon can be replaced in `src/images/favicon.png`. If you want to rename file, please update filename in `src/components/seo.js` in `useStaticQuery` function:

```javascript
favicon: imageSharp(fixed: {originalName: {eq: "<new filename>.[ext]"}}) {
```

## Copyrights

<span>Photo used for OpenGraph tag by <a href="https://unsplash.com/@cgower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Christopher Gower</a> on <a href="https://unsplash.com/s/photos/web-development?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## License

[MIT License](LICENSE)

