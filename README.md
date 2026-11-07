# Brew & Co. Café ☕

**A modern, minimalist, and responsive café landing page built with HTML, CSS, and JavaScript.**

[Live Website](https://brewco-cafe-test.vercel.app/)

## About the Project

Brew & Co. Café is a self-initiated web development project created to simulate a real-world client website project.

The goal was to plan, design, develop, test, document, and deploy a professional-looking landing page for a fictional coffee shop. It demonstrates how I approach building a business website, from presenting business information and showcasing products to implementing responsive layouts and interactive features.

The website features a warm coffee-inspired color palette, elegant typography, and a clean layout designed to introduce the café concept and encourage visitors to explore its menu and business information.

> **Project Disclaimer**
>
> This is a personal practice project, not a commissioned client project or the official website of an actual business. Brew & Co. Café is a fictional business concept created for demonstration and learning purposes.
>
> All business details, contact information, social media links, menu items, prices, operating hours, and location displayed on the website are fictional and provided for demonstration only. Any resemblance to an actual business is coincidental.

## Features

- **Responsive Design** – Adapts to desktop, tablet, and mobile screen sizes.
- **Modern Landing Page** – Clean layout with a warm café-inspired visual identity.
- **Café Introduction** – Presents the fictional café concept and its atmosphere.
- **Interactive Menu** – Allows visitors to filter menu items by category.
- **Product Showcase** – Displays sample drinks and pastries with images, descriptions, and prices.
- **Custom Preloader** – Includes a loading screen with a fade-out transition.
- **Business Information** – Displays sample location, contact details, and operating hours.
- **Google Maps Integration** – Provides a directions link for the sample location.
- **Social Media Links** – Includes sample Facebook and Instagram links.
- **Custom Favicon** – Uses a custom SVG favicon.

## Technologies Used

| Technology   | Purpose                                                        |
| ------------ | -------------------------------------------------------------- |
| HTML5        | Website structure and content                                  |
| CSS3         | Styling, layout, animations, and responsiveness                |
| JavaScript   | Menu filtering, mobile navigation, and preloader functionality |
| Google Fonts | Typography                                                     |
| Unsplash     | Placeholder product and café imagery                           |
| Google Maps  | Directions integration                                         |

## Design System

The website uses a warm, minimalist visual style inspired by coffee shops.

### Color Palette

| Color         | Hex Code  | Usage                    |
| ------------- | --------- | ------------------------ |
| Coffee Brown  | `#4B3025` | Primary color            |
| Cream         | `#F5EBDD` | Backgrounds and surfaces |
| Caramel       | `#C68B59` | Accent color             |
| Dark Charcoal | `#292522` | Main text                |

### Typography

- **Playfair Display** – Used for headings and prominent text.
- **DM Sans** – Used for body text, navigation, and interface elements.

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- A web browser (Google Chrome, Firefox, etc.)
- Visual Studio Code or another code editor
- Git installed on your computer (optional, for cloning)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LianVillacruel/Brew-Co_Cafe-test-proj.git
   ```

2. Navigate to the project folder:

   ```bash

   cd Brew & Co. Café Landing page
   =======

   ```

3. Open the folder in Visual Studio Code.

4. Run the website using the Live Server extension, or open `index.html` directly in your browser.

## Sample Business Information

The following information is used to demonstrate how a café business website can present its details.

**Business Name:** Brew & Co. Café  
**Business Type:** Coffee Shop  
**Location:** Unit 2, Ground Floor, Mabini Commercial Center, Daet, Camarines Norte, Philippines  
**Phone:** 0917 825 4630  
**Email:** brewandco.cafe@gmail.com  
**Facebook:** facebook.com/brewandco.cafe  
**Instagram:** instagram.com/brewandco.cafe

### Sample Operating Hours

| Day               | Operating Hours    |
| ----------------- | ------------------ |
| Monday            | Closed             |
| Tuesday – Friday  | 8:00 AM – 9:00 PM  |
| Saturday – Sunday | 9:00 AM – 10:00 PM |

_All business information above is fictional and used for demonstration purposes only._

## Sample Menu

The menu below contains illustrative products and prices displayed on the website.

### Coffee

| Item              | Price |
| ----------------- | ----: |
| Spanish Latte     |  ₱120 |
| Caramel Macchiato |  ₱130 |
| Iced Americano    |   ₱95 |
| Vanilla Latte     |  ₱125 |

### Non-Coffee

| Item              | Price |
| ----------------- | ----: |
| Iced Matcha Latte |  ₱135 |
| Strawberry Milk   |  ₱110 |

### Pastries

| Item              | Price |
| ----------------- | ----: |
| Butter Croissant  |   ₱85 |
| Chocolate Brownie |   ₱75 |

_Menu items and prices are fictional examples._

## Maintenance Guide

This section explains how the website can be updated if its content or design needs to change.

### 1. Updating Menu Items

To add, remove, or modify menu products:

1. Open `index.html`.
2. Locate the menu section.
3. Find the HTML element for the product you want to update.
4. Change the product name, description, price, or image.
5. Save the file and refresh the website to check your changes.

When adding a new menu item, follow the structure and category conventions of the existing menu items so that the category filters continue to work.

### 2. Updating Business Information

To change the café's business details:

1. Open `index.html`.
2. Locate the relevant section containing the business information.
3. Update the address, phone number, email, or other displayed details.
4. Save the file and check the updated information in your browser.

### 3. Updating Operating Hours

1. Open `index.html`.
2. Locate the operating hours section.
3. Modify the displayed days and times.
4. Save and refresh the website.

### 4. Updating Social Media Links

1. Open `index.html`.
2. Find the Facebook and Instagram links.
3. Replace the existing `href` values with the appropriate social media URLs.
4. Save and test each link.

### 5. Updating Images

1. Open `index.html`.
2. Locate the image you want to replace.
3. Update its image source (`src`) with the new image URL or local asset path.
4. If using local images, place them inside the `assets/` directory and reference the correct path.

The current website uses external Unsplash images, so an internet connection is required to load them.

### 6. Updating Website Styles

To change the website's appearance:

1. Open `style.css`.
2. Locate the relevant CSS selectors or design variables.
3. Modify colors, fonts, spacing, layout, or other styling properties.
4. Save and preview the changes.

### 7. Updating Website Functionality

To modify interactive features:

1. Open `script.js`.
2. Locate the relevant JavaScript functionality.
3. Make the necessary changes.
4. Test the affected features in the browser.

Be careful when changing existing selectors, class names, or element IDs because JavaScript functionality may depend on them.

## Deployment

The website is deployed using **Vercel**.

[Visit the Live Website](https://brewco-cafe-test.vercel.app/)

### Deployment Workflow

The GitHub repository can be connected to a Vercel project. Once connected, pushing changes to the configured production branch can automatically trigger a new deployment.

To publish updates:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

Vercel will automatically build and deploy the latest changes when the repository and deployment settings are configured correctly.

## Limitations

- This is a static informational landing page.
- The website does not include online ordering, checkout, or payment processing.
- Business information and menu content are sample data.
- External images and Google Fonts require an internet connection.
- Social media and map links are demonstration links and should be replaced with valid business links if adapting the project for an actual business.

## Project Purpose

This project was developed to practice and demonstrate:

- Building a responsive business landing page.
- Structuring websites using HTML, CSS, and JavaScript.
- Creating a consistent visual identity and user interface.
- Implementing interactive website features.
- Testing responsiveness and website functionality.
- Using Git and GitHub for source code management.
- Deploying a website through Vercel.
- Writing documentation and maintenance instructions.

---

**Brew & Co. Café** — A fictional café concept and self-initiated web development practice project.

Built with ☕ and code.
