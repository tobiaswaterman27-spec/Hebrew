# Yalla 🇮🇱 — Learn Modern Hebrew by chatting

**Yalla** (יאללה — "let's go!") teaches everyday, conversational Modern Hebrew the natural way: you **chat with an AI tutor**. New words get a spotlight (see it, say it, hear it), you can tap any Hebrew word for its meaning, and there are little role-play scenarios with a mission.

It's a single self-contained web page — no install, no build step. Open it in a browser on your phone or computer.

## Features

- 💬 **Chat tutor** — talk in everyday Modern Hebrew, at a difficulty you set.
- ✨ **New-word spotlight** — each new word is shown big, with how to say it, what it means, and a 🔊 button.
- 👆 **Tap any word** to see its meaning — it's saved to your word list automatically.
- 🎭 **Scenarios** — role-plays with a goal (café, shop, taxi, meeting someone…), with a ✅ at the end.
- ✏️ **Gentle corrections** — the tutor models the right way to say things without nagging.
- 📚 **Words + review** — spaced-repetition review of the words you're still learning.
- 💡 **"Help me answer"** — stuck? Get suggestions you can tap and send.
- ⌨️ **Pop-up Hebrew keyboard** — type Hebrew even without a Hebrew phone keyboard.
- 🔤 **Vowels on/off** (nikud) — your choice, changeable any time.
- 🔊 **Free Hebrew voice** — uses your device's built-in Hebrew voice (e.g. "Carmit" on iPhone/iPad).

## Getting started

1. **Open the app.** Either:
   - Open `index.html` directly in a browser, **or**
   - Host it (e.g. GitHub Pages) and open the link on your phone.
2. On first launch, pick vowels/no-vowels and (optionally) tell it your name and interests.
3. **Add your OpenAI key** (see below). The tutor needs it to talk.
4. Start chatting, or tap **Scenarios** to try a role-play.

> Tip: on a phone, use your browser's **"Add to Home Screen"** to make Yalla open full-screen like a normal app.

## About the OpenAI key 🔑

The tutor is powered by OpenAI, so it needs an API key.

- Get one from an OpenAI account at **platform.openai.com → API keys → "Create new secret key"**.
- In Yalla, paste it **once** (during setup, or in **Settings**). It's saved **only on your device** (in the browser's local storage) and is **never** put in the code or shared anywhere.
- Usage costs a small amount against that OpenAI account (the app uses the low-cost `gpt-4o-mini` model).

**Never paste an API key into a chat, a message, or the source code.** If a key is ever exposed, "roll" it — delete it at platform.openai.com and create a new one, then paste the new one into Settings.

## Privacy

Everything — your words, chat history, settings, and key — lives in your browser on your own device. Nothing is stored on any server run by this app. Your messages do go to OpenAI (that's what powers the tutor), under your own account.

## Tech notes

- Plain HTML/CSS/JS in one file (`index.html`) — no dependencies, no build.
- Calls the OpenAI Chat Completions API directly from the browser using your key.
- Text-to-speech uses the browser's built-in `speechSynthesis` (free, on-device).
