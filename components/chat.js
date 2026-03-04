const responseLibrary = [
  'Here is a quick draft you can build on. Want me to expand it into a full answer?',
  'I analyzed your prompt and generated a mock result. You can replace this with a real API call.',
  'Great idea. Next step: map this output into cards, charts, or actions in your UI.',
  'Mock response complete ✅ — this is where your AI provider output would be displayed.'
];

export function getMockResponse(prompt) {
  const cleanPrompt = prompt.trim();

  if (!cleanPrompt) {
    return 'Please enter a prompt to continue.';
  }

  const seed = cleanPrompt.length % responseLibrary.length;
  return `Prompt received: "${cleanPrompt}"\n\n${responseLibrary[seed]}`;
}

export function createMessageElement(role, content) {
  const message = document.createElement('article');
  message.className = `message ${role}`;
  message.textContent = content;
  return message;
}
