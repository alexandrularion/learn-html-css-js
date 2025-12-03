# ✅ **HTML Beginner Tasks (15 Tasks, Very Explanatory, ~45 min)**

*You will gradually build a complete multi-section webpage using Live Server.*

---

## **1. Create Your Project Folder & Open it With Live Server**

### **Task Requirements**

* Create a folder named `html-practice`.
* Inside it, create a file named `index.html`.
* Open the folder with VS Code.
* Right-click `index.html` → **Open with Live Server**.

### **Tips**

* Live Server automatically reloads the page when you save.
* Keep the browser open on the side so you instantly see changes.

---

## **2. Add the HTML Boilerplate (Document Structure)**

### **Task Requirements**

* Add the following elements to your page:
  `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`.
* Add a title inside `<title>` that describes the project.

### **Tips**

* Type `!` + Enter in VS Code to auto-generate the boilerplate.
* The document structure ensures your file is correctly interpreted by the browser.

---

## **3. Add a Main Page Heading**

### **Task Requirements**

* Inside `<body>`, add a single `<h1>` element with a title for your webpage (e.g., “My First Webpage”).

### **Tips**

* Use only **one** `<h1>` per page — it represents the top-level title.
* Make it descriptive and clear.

---

## **4. Add a Descriptive Paragraph**

### **Task Requirements**

* Add one or two `<p>` paragraphs explaining what this page is about.
* Write at least 2–3 sentences.

### **Tips**

* Split long text into separate `<p>` elements for readability.
* Think of paragraph text as the “content” under your main title.

---

## **5. Create an Unordered List (Bullet Points)**

### **Task Requirements**

* Create a `<ul>` that contains **at least 3 list items** (`<li>`).
* Choose any topic (e.g., hobbies, favorite foods, movies).

### **Tips**

* `<ul>` = unordered list → bullet points.
* Each list item goes inside `<li></li>`.

---

## **6. Create an Ordered List (Numbered Steps)**

### **Task Requirements**

* Create an `<ol>` with **at least 3 steps**.
* It could describe a process (e.g., “How I start my day”).

### **Tips**

* `<ol>` automatically numbers items.
* Use this when order matters.

---

## **7. Add a Simple Table**

### **Task Requirements**

* Create a `<table>` with:

  * **2 columns**
  * **3 rows**
* Fill it with any simple data (e.g., “Task / Status”).

### **Tips**

* Structure reminder: `<table>` → `<tr>` → `<td>`.
* Tables are for structured, grid-like data.

---

## **8. Use `id` and `class` Attributes**

### **Task Requirements**

* Give **one element** (any element) a unique `id`.
* Give **three elements** the same `class`.
* Choose meaningful names (e.g., `id="main-title"`, `class="highlight"`).

### **Tips**

* `id` must be unique in the entire document.
* `class` is reusable and helps grouping elements for styling later.

---

## **9. Create Semantic Layout Sections**

### **Task Requirements**

Inside `<body>`, create:

* a `<header>`
* a `<main>`
* a `<footer>`

Move your existing content into:

* `<header>` → main heading
* `<main>` → paragraphs, lists, table
* `<footer>` → simple text (e.g., © 2025)

### **Tips**

* Semantic tags help browsers and screen readers understand the structure.
* This layout prepares your page for CSS later.

---

## **10. Build a “Hero” Section**

### **Task Requirements**

Inside `<main>`, add:

```html
<section id="hero">
  <h2>Hero Section Title</h2>
  <p>A short description explaining the purpose of this page.</p>
</section>
```

### **Tips**

* `<h2>` is used for section titles (never use multiple `<h1>`s).
* Keep the hero description short (2–4 sentences).

---

## **11. Add an Image Inside an “About” Section**

### **Task Requirements**

Create a new section:

```html
<section id="about">
  <h2>About Me</h2>
  <p>Write a short description.</p>
  <img src="IMAGE_URL_HERE" alt="Description of the image">
</section>
```

* Use an online image URL or file from your folder.
* The image must be visible in the browser.

### **Tips**

* If the image doesn’t load, check the `src` path.
* `alt` text helps screen readers and SEO.
* Choose a small image so it loads fast.

---

## **12. Add a Video Using YouTube Embed**

### **Task Requirements**

Create a section:

```html
<section id="media">
  <h2>Featured Video</h2>
  <iframe ...></iframe>
</section>
```

* Go to YouTube → Share → Embed → copy the `<iframe>`.
* Add it inside the section.

### **Tips**

* If the video looks too big, adjust width/height in the iframe.
* Always ensure the full `<iframe>` tag is included.
* Test playback in Live Server.

---

## **13. Create a Contact Form**

### **Task Requirements**

Inside a new section:

```html
<section id="contact">
  <h2>Contact Me</h2>
  <form>
    <label>Name:</label>
    <input type="text">

    <label>Email:</label>
    <input type="email">

    <label>Message:</label>
    <textarea></textarea>

    <button type="submit">Send</button>
  </form>
</section>
```

### **Tips**

* Labels help users understand each input.
* The form doesn’t need to send data yet — structure only.
* Use simple, clear field names.

---

## **14. Add Content to the Footer**

### **Task Requirements**

Inside `<footer>`, add:

* Copyright
* Your name or project name
* Year (e.g., “© 2025 My Project”)

### **Tips**

* Keep the footer short.
* Footers usually contain static information.

---

## **15. Final Cleanup and Review**

### **Task Requirements**

* Remove unnecessary empty lines.
* Make sure every `<section>` has a heading.
* Verify that:

  * Hero section shows correctly
  * Image loads
  * Video loads
  * Form displays cleanly
  * Footer appears at the bottom
* Save the file and check everything in Live Server.

### **Tips**

* Scan the page top-to-bottom for missing closing tags.
* Organize your code with indentation (2 spaces or 4 spaces).
* A clean structure makes future CSS much easier.
