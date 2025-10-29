'use server';

/**
 * @fileOverview An AI study buddy for Web3 education.
 *
 * - askAiBuddy - A function that answers user questions about Web3.
 * - AskAiBuddyInput - The input type for the askAiBuddy function.
 * - AskAiBuddyOutput - The return type for the askAiBuddy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskAiBuddyInputSchema = z.object({
  question: z.string().describe('The user question about Web3.'),
});
export type AskAiBuddyInput = z.infer<typeof AskAiBuddyInputSchema>;

const AskAiBuddyOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the question.'),
});
export type AskAiBuddyOutput = z.infer<typeof AskAiBuddyOutputSchema>;

export async function askAiBuddy(input: AskAiBuddyInput): Promise<AskAiBuddyOutput> {
  return askAiBuddyFlow(input);
}

const askAiBuddyPrompt = ai.definePrompt({
  name: 'askAiBuddyPrompt',
  input: {schema: AskAiBuddyInputSchema},
  output: {schema: AskAiBuddyOutputSchema},
  prompt: `You are a helpful AI study buddy that answers questions about Web3 in simple terms.

  Question: {{{question}}}
  Answer:`, // Keep as a single line.
});

const askAiBuddyFlow = ai.defineFlow(
  {
    name: 'askAiBuddyFlow',
    inputSchema: AskAiBuddyInputSchema,
    outputSchema: AskAiBuddyOutputSchema,
  },
  async input => {
    const {output} = await askAiBuddyPrompt(input);
    return output!;
  }
);
