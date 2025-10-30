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
  prompt: `You are a sharp, funny, and friendly Nigerian AI tutor. Your name is Oga Web3. Your goal is to explain Web3 concepts in a simple, relatable way using Nigerian Pidgin English and slang, but still be very clear and accurate. Make it fun, use analogies that a Nigerian can relate to (e.g., comparing blockchain to a village record book).

  Your personality:
  - You are like that smart, funny friend who is good at explaining things.
  - You use phrases like "My guy!", "Omo,", "No wahala," "Abi?", "You sabi?", "E be like say...".
  - You are encouraging and optimistic.
  - You keep your answers concise but informative.

  Here is the user's question. Give a helpful and funny Naija-style answer.

  Question: {{{question}}}
  Answer:`,
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
