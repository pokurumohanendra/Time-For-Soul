# Time For Soul

A React packing-list app for trips. Add items with a quantity, tick them off as you pack, and see how far along you are.

**Live demo:** [enjoy-your-trip.netlify.app](https://enjoy-your-trip.netlify.app/)

![Time For Soul packing list](https://raw.githubusercontent.com/pokurumohanendra/My-Portfolio/main/public/projects/enjoy-your-trip.jpg)

## Features

- Add items with a description and a quantity from 1 to 20
- Mark items as packed (they are struck through) or delete them
- Sort by input order, description or packed status
- Clear the whole list
- Footer statistics: items listed, items packed and the percentage packed

## Tech stack

React with hooks, Create React App.

## Getting started

You need Node.js (LTS).

```bash
npm install
npm start
```

| Script | What it does |
|--------|--------------|
| `npm start` | Run the development server |
| `npm run build` | Create a production build |
| `npm test` | Run the tests |

## Project structure

```
src/Components/
├── App.js          owns the list state
├── Logo.js
├── Form.js         add-item form (controlled inputs)
├── PackingList.js  list and sorting
├── Item.js         one item
└── Stats.js        derived statistics
```

## About

Built as a learning project to practise lifting state up, controlled forms, rendering lists and deriving values from state.

## Author

[Pokuru Mohanendra](https://github.com/pokurumohanendra) · [LinkedIn](https://www.linkedin.com/in/pokuru-mohanendra/)
