# FRONTEND HANDS-ON PRACTICE PROJECT (the frontend of an webapplication)

### Project Name: Tricell Intranet (Frontend Simulation)
### Environment: Local development (www.tricell.local)
### Scope: Frontend only – no backend, no real database

# Project Overview

This project is a multi-page internal company website built for the fictional corporation **Tricell**.

It began as a classic HTML intranet site and evolved into a frontend-driven web application using JavaScript.

The system runs locally and simulates internal company tools inside a controlled intranet-style environment.

---

# HTML – Classic Multi-Page Structure

## Purpose

To understand how websites were built before modern frameworks and backend integrations.

## Implemented Features

- Multi-page internal structure  
- Cross-linked local HTML files  
- Header containing:
  - Social media icons  
  - Contact information  
- Navigation menu below the header  
- Back-button navigation  
- Info-box structured layout  
- Customized template (removed default green bars)  
- Updated internal pages with realistic content  

## Included Pages

- `index.html` (Welcome page)  
- `ITXX-01.html`, `ITXX-02.html` (Employee profiles)  
- `personnel_registry.html`  
- `company_presentation.html`  
- `history.html`  
- `board_of_directors.html`  

## Learning Focus

- Classic table-based layouts  
- Multi-page architecture  
- Image and link management  
- File structure organization  
- Understanding legacy HTML design patterns  

---

# CSS – Layout Systems & Navigation Architecture

## Layout & Visual Control

- Custom header layout  
- Navigation bar styling  
- Structured content boxes  
- Controlled spacing and visual hierarchy  
- Template redesign  

## Dropdown Navigation

- Hover-based dropdown menus  
- Nested subpage structure  
- Visibility controlled using:
  - `position: relative`  
  - `position: absolute`  
  - `z-index`  
  - `display`  

## Slide-Out Site Map

- Toggle button in top corner  
- Collapsible overview panel  
- Full hierarchical page map  
- Combined CSS layering with minimal JavaScript state toggling  

## Learning Focus

- Positioning systems (relative, absolute, stacking context)  
- Layered UI behavior  
- Navigation systems without backend logic  
- Separation of structure (HTML) and presentation (CSS)  

---
# XML

# JavaScript – From Website to Web Application

This stage transitions the project from a static website to a frontend-driven web application.

The system runs inside a simulated intranet environment (HTTP-based, not `file://`).

There is no backend. All features are frontend simulations.

## Implemented / Planned Features

### Login System (Simulated)

- Client-side validation  
- Access control simulation  
- No real authentication security  

### Personnel Registry (CRUD)

- Add employees  
- Update records  
- Delete records  
- Data stored in LocalStorage  

### Headquarters Virus Database (CRUD)

- Add research entries  
- Update entries  
- Delete outdated data  
- Stored locally (frontend only)  

### Integrated Calculator

- Internal business calculation tool  
- JavaScript-based logic  

### Internal Chat Interface

- Frontend-only chat UI  
- Message handling simulation  
- No real-time server communication  

---

## Encryption & Security Exercise

Educational implementation:  
**“Tricell Encryption Algorithm 1.0”**

### Concept

- Based on Caesar cipher shifting  
- Numeric key encoded as a character  
- Optional filler characters  
- Demonstration of encrypt/decrypt flow  

### Files

- `login_encrypt.html`  
- `login_decrypt.html`  

### Transition to Hashing

In this project, we will transition from the Caesar-cipher-based “Tricell Encryption Algorithm 1.0” to **hashing** to understand the difference between encryption and secure password handling.

Planned focus:
- Implement a hashing-based login demo (frontend simulation)
- Compare **encryption vs hashing** (what each is for, and why hashing is used for passwords)
- Explain why real systems use **salted password hashing** (e.g., bcrypt / Argon2) instead of custom encryption 
 

# Webbserver


# Core Technical Competencies Demonstrated

- Multi-page frontend architecture  
- Navigation system engineering  
- CSS layout control and stacking context  
- CRUD logic in pure JavaScript  
- LocalStorage data persistence  
- State simulation without backend  
- Basic encryption vs hashing concepts  
- Transition from static website to frontend web application 
