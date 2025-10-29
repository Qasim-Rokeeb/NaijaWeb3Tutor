# **App Name**: NaijaWeb3Tutor

## Core Features:

- Lesson Delivery: Deliver Web3 lessons in bite-sized video and article formats. Lessons are loaded from JSON.
- AI Study Buddy: An AI chat interface where users can ask questions about Web3 topics. The AI tool provides instant answers, with Pidgin English as an option. A hybrid approach (HuggingFace API with local fallback) is employed.
- Voice Quiz: Users can take voice quizzes to test their knowledge and receive immediate feedback.
- Gamification Engine: Track user progress with XP, streaks, and level badges. Progress is stored locally.
- Certificate Generator: Generate a shareable certificate upon course completion. The certificate contains a QR code verifying the user's achievement.
- Theming: Automatic dark/light mode detection, with manual toggle available. The user's theme preference is stored in local storage.
- Offline Support: Service worker enables offline access to lessons, models and other assets.

## Style Guidelines:

- Primary color: Naira-Green (#069e3e) to highlight correct AI responses and quiz successes.
- Background color: Midnight Purple (#1b0033) for dark mode, providing a sophisticated backdrop.
- Accent color: Solana-Cyan (#00FFA3) for AI bot message bubbles and active mic indicators.
- Display font: 'Clash Display', sans-serif.
- Body font: 'Inter', sans-serif.
- Code font: 'JetBrains Mono', monospace, used for AI-generated code snippets.
- Subtle slide-in animations for AI bot messages, creating a dynamic yet non-intrusive feel.
- Animated voice wave inside the voice recording button while recording audio.
- Confetti animation when a user achieves 100 XP, celebrating their accomplishments.
- Use of custom SVG icons for lesson categories, AI interactions, and gamification elements. Robot icons will use #00FFA3.
- Mobile-first design approach ensuring every pixel feels well-spent, optimizing for Nigerian users' typical data usage.