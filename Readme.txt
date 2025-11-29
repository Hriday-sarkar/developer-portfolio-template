==================================================================
  DEVELOPER PORTFOLIO TEMPLATE by Jaxon (v1.0)
==================================================================

Thank you for choosing this Developer Portfolio Template! This guide will walk you through everything you need to know to customize it and make it your own.


✨ FEATURES
------------------------------------------------------------------
- Clean, modern, and minimal design
- Fully responsive layout for all devices
- Smooth-scrolling one-page design
- Animated light/dark theme toggle with user preference saving
- Easy to customize content, colors, and fonts


🚀 GETTING STARTED
------------------------------------------------------------------
1.  **Extract the Files**: Unzip the downloaded file to a folder on your computer.
2.  **Open `index.html`**: Open the `index.html` file in a web browser (like Chrome or Firefox) to see the template live.
3.  **Open in a Code Editor**: Open the project folder in a code editor to start making changes. We recommend Visual Studio Code, which is free and powerful.


🎨 CUSTOMIZATION GUIDE
------------------------------------------------------------------

### 1. Editing Content (in `index.html`)

Open `index.html` in your code editor. The file is commented to show you exactly where to make changes. Look for comments that start with `<!-- EDITABLE: ... -->`.

-   **Name/Logo**: Change "JaxonDev" in the `<nav>` section.
-   **Hero Section**: Update your name and tagline (`<h1>` and `<p>`).
-   **About Me**: Replace the profile picture path in `<img src="assets/profile.jpg">` and edit the bio text inside the `<p>` tag.
-   **Projects**:
    -   To edit a project, change its image (`<img>`), title (`<h3>`), and description (`<p>`).
    -   To add a new project, copy and paste an entire `<div class="card">...</div>` block.
-   **Contact Links**: Update the `href` values for GitHub, LinkedIn, and Email in the "Get in Touch" section.
-   **Footer**: Change the copyright text in the `<footer>`.


### 2. Changing Images

All images are in the `/assets` folder.

-   **Profile Picture**: Replace `profile.jpg` with your own photo. A square image (e.g., 400x400 pixels) works best.
-   **Project Images**: Replace `project1.jpg`, `project2.jpg`, etc. A widescreen aspect ratio (like 16:9) is recommended.


### 3. Customizing Styles (in `style.css`)

Open `style.css` to change the look and feel of your portfolio.

#### Changing Colors:
Look for the `CUSTOMIZATION: COLORS` section at the top of the file.

-   **Dark Theme**: Edit the color values under `:root`.
-   **Light Theme**: Edit the color values under `[data-theme="light"]`.

    --bg:     #0f172a; /* Main background color */
    --text:   #f8fafc; /* Main text color */
    --accent: #38bdf8; /* Color for buttons, links, and highlights */
    --card:   #1e293b; /* Background for project cards and footer */

#### Changing Fonts:
Look for the `CUSTOMIZATION: FONT` section.

1.  Go to Google Fonts (https://fonts.google.com) and find a font you like.
2.  Click "Get font" and then "Get embed code".
3.  Select the `@import` option and copy the URL inside the `<style>` tags.
4.  Paste it at the top of `style.css`, replacing the existing `@import` line.
5.  Update the `font-family` property in the `body` style rule with the name of your new font.


🌐 DEPLOYING YOUR PORTFOLIO
------------------------------------------------------------------
Once you're done customizing, you can host your portfolio online for free using services like:
-   **GitHub Pages**: Push your code to a GitHub repository and enable Pages in the settings.
-   **Netlify**: Drag and drop your project folder directly onto the Netlify dashboard.
-   **Vercel**: Connect your Git repository for seamless deployments.


💬 SUPPORT
------------------------------------------------------------------
If you have any questions or run into any issues, please don't hesitate to contact me via the platform where you purchased this template.

Thank you and happy coding!

Created by Jaxon © 2025
