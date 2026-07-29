# Yalla 🇮🇱 — Learn Modern Hebrew by chatting

**Yalla** (יאללה — "let's go!") teaches everyday, conversational Modern Hebrew by having you **chat with an AI tutor** — backed by ordered word packs so you actually build vocabulary instead of drowning.

It's a single self-contained web page: no install, no build step. Open it in a browser on your phone or computer.

## How it works — the learning loop

1. **Learn a pack** (📖 Learn) — a small set of words, taught with cards (see it, hear it, meaning) then quick **practice games**.
2. **Chat** (💬) — the tutor talks with you using **only the words you know**, dropping in a new word now and then.
3. Every ~10 messages it asks if you want the **next pack** — say yes to grab more words.
4. Those new words flow back into the chat, so your vocabulary and the conversation grow together. 📈

## Features

- 💬 **Chat tutor** — everyday Modern Hebrew that reacts to you and varies what it says (not just "how are you?").
- 🧠 **Stays understandable** — the app tracks the words you know and keeps the tutor to those plus, occasionally, one new word. If a reply comes out too hard, the app quietly asks for a simpler one before you see it.
- 🔵 **Blue words** — any Hebrew word you haven't mastered yet shows in blue. Tap it to hear it, see its meaning, and add it to your list. Words stay blue until you've actually learned them (in a pack, or by reviewing).
- 📖 **Word packs** — an ordered path (First words → More people → Handy phrases → verbs → food → numbers…), each ending in **practice games** (Hebrew↔English, listen-and-choose) with a score.
- 🎭 **Scenarios** — role-plays with a mission (café, shop, taxi, market, directions…), with a ✅ at the end.
- ✏️ **Gentle corrections** and 🔤 **grammar tips** (with a tap-a-verb conjugation table).
- 📚 **Review** — spaced-repetition review of the words you're still learning.
- 🧱 **Tap-to-build** — a searchable tray of your words (search by English, Hebrew, or sound); tap to build a reply without typing Hebrew.
- 💡 **Help me answer** — suggestions built only from words you already know.
- ⌨️ **Pop-up Hebrew keyboard** — type Hebrew even without a Hebrew phone keyboard.
- 🔊 **Voice** — the tutor reads Hebrew aloud (made by OpenAI, so it works on any phone).
- 🚹🚺 **Gender-aware** and ✍️ **Hebrew name** — teaches the correct forms and spells your name the way you want.
- 🔤 **Vowels on/off** (nikud) and a difficulty dial — your choice, changeable any time.

## Getting started

1. **Open the app** — from its web link (recommended), or by opening `index.html` in a browser.
2. First launch: pick vowels/no-vowels, your gender, your name (you can type it in Hebrew), and your interests.
3. **Add your OpenAI key** (see below). The tutor and voice need it.
4. You're dropped into **Pack 1** to learn your first words — then start chatting.

> Tip: on a phone, use your browser's **"Add to Home Screen"** so Yalla opens full-screen like a normal app — and so you're always on the latest online version rather than a saved copy.

## The OpenAI key 🔑

The tutor and the voice are powered by OpenAI, so the app needs an API key.

- Get one from an OpenAI account at **platform.openai.com → API keys → "Create new secret key"**.
- In Yalla, paste it **once** (during setup, or in **Settings**). It's saved **only on your device** and is **never** put in the code or shared anywhere.
- Usage costs a small amount against that OpenAI account (the app uses the low-cost `gpt-4o-mini` model for chat and OpenAI's text-to-speech for the voice).

**Never paste an API key into a chat, a message, or the source code.** If a key is ever exposed, "roll" it — delete it at platform.openai.com and create a new one, then paste the new one into Settings.

## Privacy

Your words, packs, chat history, settings, and key all live in your browser on your own device — nothing is stored on any server run by this app. Your messages do go to OpenAI (that's what powers the tutor and voice), under your own account.

## Tech notes

- Plain HTML/CSS/JS in one file (`index.html`) — no dependencies, no build.
- Calls the OpenAI Chat Completions and Text-to-Speech APIs directly from the browser using your key.
- Vocabulary difficulty is enforced **client-side**: the app knows your word list, highlights unmastered words, counts unknown words in each reply, and asks the model to simplify when needed — so difficulty doesn't depend on the model behaving.
