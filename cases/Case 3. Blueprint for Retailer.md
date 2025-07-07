# Case 2. Blueprint for Retailer

Implement a template for a big retailer to start and maintain new web applications. Propose step by step guide how to get rid of technical zoo and start using the same approach for web app development. The approach must consider different variants of the app, it can be public/private, seo optimized or PWA offline web app.

Let's consider a case when different apps are written with a totally different tech stack (jQuery, Angular, React, etc.) and 

## Option 1. Prepare Template Project with Tech Stack which Supports SSR & CSR

### Step 1. Analyze Current Projects and Establish Used Technologies

Establish common most used technologies and best practices on current projects. Find most used libraries and based on them determine which framework could be used for SSR & CSR (e.g Next.js, Nuxt, Angular). The framework must cover cases when it's needed to create PWA or CEO optimized application.

### Step 2. Create Common Design System and Component Libraries

Determine what common features each project has (e.g http client with auth handling) and create separate libraries which provide that functionality.

If most projects use the same design then it's possible to create common components which coulbe be installed as npm packages.

It might be useful to create common design system to develop new application faster.

### Step 3. Create Repositories with Common Project Templates

Create repositories with a common project templates (e.g a template for pre-configured PWA application, library template etc.) based on which new projects must be created.

These templates must have:
- configured package.json with required minimum common libraries
- common style guide doc and configured automated quality checks
- useful scripts to maintain a project
- documentation for all scripts with examples

### Step 4. Configure Common CI/CD Infrastructure

Configure common CI/CD infrastructure with possibility to extend existing steps using custom Jenkins scripts. As a result custom scripts must build static files which should be nadled by common CI/CD pipeline.

### Step 5. Start Migration on First Test Projects

Pick 2-3 projects with different core stack. Create migration guide for a stack. Present the guide for teams. Create new repositories from prepared templates and star migration. Collect arisen issues and solutions. Adopt initial migration guide.

To migrate projects gradually it might be possible to migrate applications page by page and use iframes to show legacy pages. In that case it also requires to update navigation and links in a legacy project if it's possible.

If legacy projects use the same libraries for a page rendering (Next for new projects + react was initial), then it's possible to copy existing components to new project at once. And after that adopt those components gradually according to agreed style guide.

### Step 6. Migrate All Projects to the New Stack

Present result migration guides to all teams and start migration of other projects.

### Pros
- Standartize development, makes easier to maintain previous projects and start new ones

### Cons
- Might require a lot of time and development resources to migrate to different stack on all projects
- May requires to replace prev engineers from old projects with totally different stack to support updated projects
