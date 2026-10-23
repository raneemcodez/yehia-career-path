
# Pathway

**Created by:** Raneem Alrefaie

## Project Description

Pathway is a simple job-search website built with Next.js, React, TypeScript, and Tailwind CSS. It helps Yehia organize his job search by viewing opportunities, following a job-search plan, and tracking sample job applications through a dashboard.

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/raneemcodez/yehia-career-path.git
   ```

2. Open the project folder:

   ```bash
   cd yehia-career-path
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Explain Your Choices

### 1. Why did you use `await` when reading `params`?

In Next.js, `params` is asynchronous in my dynamic route, so I used `await` to get the route parameters before using them. I then used the ID to find the matching opportunity in my sample data.

### 2. Why is the route ID a string?

The route ID is a string because dynamic route parameters are received as strings in Next.js. My opportunity IDs are also strings, so I can compare them directly to find the correct opportunity.

### 3. What belongs in the dashboard layout, and what belongs in each dashboard page?

The dashboard layout contains shared elements, such as the navigation links for Overview and Applications. The dashboard pages contain their own content: the overview shows the total number of applications, while the applications page displays each application with its title, company, and status.
