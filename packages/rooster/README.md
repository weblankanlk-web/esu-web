# Rooster Jobs

A lightweight JavaScript package to easily integrate [Rooster Jobs](https://rooster.jobs) boards into your website. Includes all necessary CSS and scripts to display job listings, filters, and load more functionality without additional setup.

## Features

- Display jobs from Rooster Jobs on any website.
- Includes filtering by:
  - Job Class
  - Subclass
  - Department
  - Job Type
  - Subsidiary/Company
- Load more functionality for pagination.
- Search jobs by keywords.
- Fully styled with included `rooster.css`.

## Installation

Install via npm:

```bash
npm install rooster-jobs
````

## Usage


### **1. TypeScript / Next.js (React)**

```ts
"use client";

import React, { useEffect } from "react";
import Rooster from "rooster-jobs"; // TypeScript will need declaration file
import "./style.scss";

const CareersPage = () => {
  useEffect(() => {
    const rooster = new Rooster("#rooster", 155337, {
      defaultSubsidiary: 23,
      showSearch: true,
      showClass: true,
      showSubclass: true,
      showDepartment: true,
      showJobType: true,
      showSubsidiaryFilter: true,
    });
    rooster.setup();
  }, []);

  return (
    <section className="careersSection">
      <div id="rooster"></div>
    </section>
  );
};

export default CareersPage;
```

### **TypeScript Notes:**

1. Add a declaration file to avoid type errors:

```
/types/rooster-jobs.d.ts
```

```ts
declare module "rooster-jobs" {
  interface RoosterOptions {
    defaultSubsidiary?: number;
    showSearch?: boolean;
    showClass?: boolean;
    showSubclass?: boolean;
    showDepartment?: boolean;
    showJobType?: boolean;
    showSubsidiaryFilter?: boolean;
    pageSize?: number;
    sandbox?: boolean;
  }

  export default class Rooster {
    constructor(selector: string, companyId: number, options?: RoosterOptions);
    setup(): void;
  }
}
```

2. Make sure your `tsconfig.json` includes the types folder:

```json
{
  "compilerOptions": {
    "typeRoots": ["./types", "./node_modules/@types"]
  }
}
```

✅ Now TypeScript will recognize the `rooster-jobs` module and provide proper typing/autocomplete.

---

## Options

* `defaultSubsidiary` - Show jobs from a specific subsidiary by default.
* `showSearch` - Enable search bar.
* `showClass` - Enable job class filter.
* `showSubclass` - Enable subclass filter.
* `showDepartment` - Enable department filter.
* `showJobType` - Enable job type filter.
* `showSubsidiaryFilter` - Enable subsidiary/company filter.
* `pageSize` - Number of jobs per page (default: 10, max: 50).

## License

ISC

---

> **Note:** This package is a wrapper around the official Rooster Jobs integration script, packaged for easier use with npm projects.