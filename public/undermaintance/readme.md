# 🚧 Under Maintenance Page – Customization Guide

This guide explains how to customize the `index.html` file for your **Under Maintenance Countdown Page**, including changing the countdown timer, site logo, and previewing the layout.

---

### 📸 Preview

![Preview](images/demo.png)

---


### 🔄 1. Update Countdown End Time

Locate the following script in `index.html`:

```html
<script>
    $('.cd100').countdown100({
        /* Set Endtime here */
        /* Endtime must be > current time */
        endtimeYear: 2025,
        endtimeMonth: 5,
        endtimeDate: 10,
        endtimeHours: 0,
        endtimeMinutes: 0,
        endtimeSeconds: 0,
        timeZone: ""  
        // ex:  timeZone: "America/New_York"
        // Visit http://momentjs.com/timezone/ for options
    });
</script>
```

#### ✅ To Change Countdown:

* **`endtimeYear`**: Year (e.g., `2025`)
* **`endtimeMonth`**: Month number (1 = Jan, 12 = Dec)
* **`endtimeDate`**: Date (1 to 31)
* **`endtimeHours` / `Minutes` / `Seconds`**: Time of day (24-hour format)
* **`timeZone`** (Optional): Specify a timezone string if needed

---

### 🖼 2. Change Logo Image

Locate the following section:

```html
<div class="wrappic1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6gue9Ms8KY68VrycgGK9rNhouEUXzqWE0Q&s" alt="LOGO">
</div>
```

#### ✅ To Replace Logo:

* Update the `src` attribute with the **URL of your desired logo**:

```html
<img src="https://www.example.com/path-to-your-logo.png" alt="LOGO">
```

---

### 📂 File Location

* The file to edit is typically found at:

```
/under-maintenance/index.html
```

---

### ✅ Example Update

```html
<script>
    $('.cd100').countdown100({
        endtimeYear: 2025,
        endtimeMonth: 6,
        endtimeDate: 1,
        endtimeHours: 10,
        endtimeMinutes: 30,
        endtimeSeconds: 0,
        timeZone: "Asia/Colombo"
    });
</script>
```

```html
<div class="wrappic1">
    <img src="https://yourdomain.com/assets/logo.png" alt="Company Logo">
</div>
```

---

Let me know if you'd like a sample zipped `index.html` template or GitHub README layout.
