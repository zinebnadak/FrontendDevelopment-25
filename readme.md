# FRONTEND HANDS-ON PRACTICE PROJECT (the frontend of an webapplication)
## HTML 
### Website: www.tricell.local

Description:
This folder contains my actual course project: a complete internal (intranet-style) website for the fictional company Tricell. The website is not published online; instead, it consists of local HTML files that link to each other.

Goal:
To build a multi-page internal company website using classic HTML techniques, based on the requirements from my teacher.

Pages included:
- ✅index.html (welcome page)
- ✅ITXX-01.html, ITXX-02.html, etc. (employee profiles)
- ✅personnel_registry.html
- company_presentation.html
- history.html
- board_of_directors.html

Requirements implemented:
- Header with social media icons and contact information
- Navigation menu under the header
- Back button leading to index.html
- Section titles moved inside the info-box layout
- Removal of green bars from the teacher’s original template
- Updated info pages with real content

HTML learning goals:
- Working with classic HTML layouts using <table> and <font>
- Understanding how sites were built before CSS
- Managing images, links, attributes, and multi-page structure

Notes:
This is the live version of the website that I customize, fill with content, and hand in as the final assignment.

## CSS 

The CSS part of the project focuses on layout control, navigation systems,
and visual structure for a multi-page intranet website.

### Layout & Styling
- Custom header layout with logo, contact information, and social media icons
- Structured navigation bar under the header
- Styled info-box layout for internal content pages
- Controlled spacing, alignment, and visual hierarchy
- Removal and redesign of elements from the original template

### Dropdown Navigation
- Hover-based dropdown menus built using HTML + CSS
- Nested navigation structure for subpages
- Visibility controlled through CSS positioning and display properties
- Demonstrates layered UI behavior (hover states and stacking)

### Slide-Out Site Map (Overview System)
- Collapsible/slide-out site map panel
- Toggle button in the top corner
- Full overview of all pages in the project
- Hierarchical structure (main sections + subpages)
- Combined CSS layout control with minimal JavaScript for state toggling

### CSS Learning Goals
- Understanding classic layout methods
- Managing positioning (relative, absolute, z-index)
- Building layered UI components
- Creating interactive navigation without backend logic

## XML 

## JavaScript

In the JavaScript part of the course, we move from a static website to a frontend-driven web application inside the **Tricell school network**.  
The project is accessed and tested through the internal Tricell environment (intranet-style), meaning it runs over HTTP on internal servers rather than directly from `file://`.

Scope note: This course covers **frontend only** — there is **no backend** and **no real database** connection.  
All “application features” are implemented/simulated in JavaScript, with data stored locally in the browser when needed (e.g., LocalStorage).

### Planned system functionality (frontend simulation)

1. **Login / Authentication (simulated)**
   - Login flow that controls access to internal pages/features  
   - No real security (since there is no backend)

2. **Personnel Register (CRUD)**
   - Add new staff members  
   - Update existing employee information  
   - Delete employee records  
   - Stored locally in the browser (no database)

3. **Integrated Calculator**
   - Small internal calculation tool built with JavaScript

4. **Headquarters “Virus Database” (CRUD)**
   - Add new research entries  
   - Update existing entries  
   - Delete outdated/incorrect entries  
   - Stored locally (frontend-only)

5. **Internal Team Chat (UI simulation)**
   - Chat interface and message handling in the frontend  
   - No real-time server communication in this course

## Webbserver
