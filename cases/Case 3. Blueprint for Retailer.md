# Case 2. Blueprint for Retailer

Implement a template for a big retailer to start and maintain new web applications. Propose step by step guide how to get rid of technical zoo and start using the same approach for web app development. The approach must consider different variants of the app, it can be public/private, seo optimized or PWA offline web app.

Let's consider a case when different apps are written with a totally different tech stack (jQuery, Angular, React, etc.).

## Option 1. Prepare Template Project with Framework which Supports Native SSR & CSR

### Step 1. Analyze Current Projects and Establish Used WEB Libraries

Establish common most used technologies and best practices

### Step 2. Create Common Design System and Components Library

Create common components which coulbe be installed as npm package

### Step 3. Create a Repository with Common Project Template 

common style guide and automated quality checks

useful scripts to maintain the project

documentation how to implement different features

### Step 4. Configure Common CI/CD Infrastructure

Configure common CI/CD infrastructure with possibility to extend existing steps using custom Jenkins scripts. As a result custom scripts must build static files which should be nadled by common CI/CD pipeline

### Step 5. Start Migration on First Test Projects

TODO: think about it

Pick 2-3 projects with different core stack. Apply quality checks and core libraries from the template project, replace existing code step by step. Collect arisen issues and solutions. Adopt initial migration guide.

### Step 6. Migrate All Projects to the New Stack

<!-- First of all it's required to establish what deployment plan and which technologies are used in current projects. For instance, if the retailer has its own development team and most of developers are familiar with Angular only, it might be difficult and expensive for the retailer to find Next.js developers. But if the team is small and it supports legacy projects only, it might be easier to  -->

### Pros
- It 

### Cons
- Might require a lot of time and development resources to migrate to different stack on all projects
