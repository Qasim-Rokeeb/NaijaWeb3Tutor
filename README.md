
# NaijaWeb3Tutor

**Simplifying your Web3 journey. Built for Nigeria.**

NaijaWeb3Tutor is a free, mobile-first learning platform dedicated to making Web3 education accessible and relatable for Nigerians. Our mission is to onboard the next wave of Nigerian talent into the global decentralized ecosystem by simplifying complex topics and providing clear, structured learning paths.

## Live Demo

The application is deployed on Vercel and can be accessed here: [https://naija-web3-tutor.vercel.app/](https://naija-web3-tutor.vercel.app/)

## Key Features

*   **Curated Learning Tracks:** Step-by-step guides on topics like Web3 Basics, Solana, DeFi, and Smart Contract Development.
*   **Integrated Video Lessons:** Watch tutorials directly on the platform, sourced from high-quality YouTube content.
*   **AI Study Buddy:** An integrated AI assistant to answer your Web3 questions in simple terms, available 24/7.
*   **Community & Opportunity Hubs:** Curated lists of vibrant Nigerian and African Web3 communities, developer job boards, and hackathon platforms to help you connect and grow.
*   **Modern, Responsive UI:** A clean, mobile-first interface built with ShadCN UI and Tailwind CSS for a great learning experience on any device.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
*   **Generative AI:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit)
*   **Deployment:** [Vercel](https://vercel.com/)

## Project Structure

The project follows a standard Next.js App Router structure.

```
/
├── src/
│   ├── app/                    # Main application routes
│   │   ├── communities/        # Page for Web3 communities
│   │   ├── learn/              # Dynamic routes for learning tracks and lessons
│   │   ├── opportunities/      # Page for developer opportunities
│   │   ├── globals.css         # Global styles and Tailwind directives
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   │
│   ├── components/             # Reusable React components
│   │   ├── ai/                 # Components for the AI Study Buddy
│   │   ├── ui/                 # ShadCN UI components
│   │   ├── header.tsx          # Site header
│   │   └── home-page.tsx       # Component for the landing page content
│   │
│   ├── ai/                     # Genkit AI flows and configuration
│   │   ├── flows/              # Genkit flow definitions
│   │   └── genkit.ts           # Genkit initialization
│   │
│   ├── lib/                    # Helper functions, types, and static data
│   │   ├── lessons.json        # Data for individual lessons
│   │   ├── placeholder-images.json # Image URLs and metadata
│   │   ├── tracks.json         # Data for learning tracks
│   │   └── types.ts            # TypeScript type definitions
│   │
│   └── hooks/                  # Custom React hooks
│
├── public/                     # Static assets (images, fonts, etc.)
│
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Project dependencies and scripts
```

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.
