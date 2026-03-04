# AI Tool Interface Starter

A minimal, chat-style UI starter built with **HTML**, **CSS**, and **vanilla JavaScript**.

## Features

- Chat-style prompt input with Enter-to-send (Shift+Enter for new line)
- Results panel for user and assistant messages
- Sidebar with prompt history
- Clean, minimal layout inspired by modern AI chat interfaces
- Mock response logic so you can prototype before wiring a real model API

## Project Structure

```text
ai-tool-interface
  index.html
  css/styles.css
  js/app.js
  components/
    chat.js
    sidebar.js
```

## Getting Started

1. Open `index.html` directly in your browser, **or** run a local static server.
2. Type a prompt and submit.
3. The app appends your message, stores it in history, and returns a mocked assistant response.

## Implementation Notes

- `components/chat.js` handles message creation and mock reply generation.
- `components/sidebar.js` manages history list rendering.
- `js/app.js` wires UI behavior together (submit handling, autoresize input, keyboard shortcuts, new chat reset).

## Next Steps

- Replace `getMockResponse()` with a real fetch call to your AI backend.
- Persist history with localStorage.
- Add streaming responses and loading states.
