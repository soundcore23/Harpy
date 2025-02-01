# Harpy Eagle Website

## Overview
This project provides information about the **Harpy Eagle**, one of the most powerful raptors in the world. The website includes an interactive **habitat map**, a gallery of **Harpy Eagle images**, and general information about the species.

## Features
- **Home Page** – General information about the Harpy Eagle.
- **Habitat Page** – An interactive **Mapbox GL JS** map highlighting the Amazon Basin.
- **Images Page** – A slideshow gallery displaying Harpy Eagle images.

## Project Structure
The repository is organized as follows:

Harpy/
├── index.html         # Main landing page
├── habitat.html       # Interactive map page
├── images.html        # Slideshow gallery
├── CSS/
│   ├── styles.css     # Stylesheet for the website
├── JS/
│   ├── Main.js        # JavaScript for navigation & slideshow
├── images/
│   ├── Harpy1.jpg     # Image files
│   ├── harpy2.jpg
│   ├── harpy3.jpg
│   ├── harpy4.jpg
├── Data/
│   ├── amazon.geojson # GeoJSON file for the habitat map
├── README.md          # Documentation file

## References & Credits
- **Amazon Basin GeoJSON Data**: Sourced from [Cartography Vectors](https://cartographyvectors.com/map/1255-amazon-basin).
- **Slideshow Gallery Template**: Based on an implementation from [W3Schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_image_grid).
- **Mapbox GL JS**: Used for the interactive mapping component.

## Technologies Used
- **HTML, CSS, JavaScript** – Core structure and styling.
- **Mapbox GL JS** – For rendering the interactive map.
- **GeoJSON** – For spatial data visualization.
- **GitHub Pages** – For hosting the website.
