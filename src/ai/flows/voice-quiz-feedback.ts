'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing feedback on voice quizzes.
 *
 * The flow takes the user's voice input and the expected answer, compares them,
 * and returns feedback on the correctness of the answer.
 *
 * @exports {
 *   voiceQuizFeedback,
 *   VoiceQuizFeedbackInput,
 *   VoiceQuizFeedbackOutput,
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VoiceQuizFeedbackInputSchema = z.object({
  userInput: z
    .string()
    .describe('The user input from the voice quiz, converted to text.'),
  expectedAnswer: z
    .string()
    .describe('The expected answer to the voice quiz question.'),
});

export type VoiceQuizFeedbackInput = z.infer<typeof VoiceQuizFeedbackInputSchema>;

const VoiceQuizFeedbackOutputSchema = z.object({
  isCorrect: z.boolean().describe('Whether the user input matches the expected answer.'),
  feedback: z.string().describe('Feedback for the user on their answer.'),
});

export type VoiceQuizFeedbackOutput = z.infer<typeof VoiceQuizFeedbackOutputSchema>;

export async function voiceQuizFeedback(input: VoiceQuizFeedbackInput): Promise<VoiceQuizFeedbackOutput> {
  return voiceQuizFeedbackFlow(input);
}

const voiceQuizFeedbackPrompt = ai.definePrompt({
  name: 'voiceQuizFeedbackPrompt',
  input: {schema: VoiceQuizFeedbackInputSchema},
  output: {schema: VoiceQuizFeedbackOutputSchema},
  prompt: `You are a helpful tutor providing feedback on a user\'s voice quiz answer.

  User Input: {{{userInput}}}
  Expected Answer: {{{expectedAnswer}}}

  Determine if the user input matches the expected answer. If it is a close match (e.g., accounting for minor variations in phrasing or accents), consider it correct.

  Provide feedback to the user, indicating whether their answer was correct and explaining why.
  If the answer was incorrect, provide a hint or suggestion for improvement.
  Keep the feedback concise and encouraging.

  Your response MUST be valid JSON conforming to the following schema:
  ${JSON.stringify(VoiceQuizFeedbackOutputSchema.describe(''))}
  `,
});

const voiceQuizFeedbackFlow = ai.defineFlow(
  {
    name: 'voiceQuizFeedbackFlow',
    inputSchema: VoiceQuizFeedbackInputSchema,
    outputSchema: VoiceQuizFeedbackOutputSchema,
  },
  async input => {
    const {output} = await voiceQuizFeedbackPrompt(input);
    return output!;
  }
);
