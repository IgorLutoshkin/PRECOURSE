let userName = {
  name: "Dima",
};

let card1 = {
  type: "debit",
  networkType: "mastercard",
  currencyType: "USD",
  balance: 5.75053,
  number: 5282345678901289,
  expirationYear: 2025,
  expirationMonth: 9,
  isActive: true,
  isBlocked: false,
  transaction: {
    title: "Order Revenue",
    amount: 874,
    date: new Date(2023, 3, 16, 25, 43, 22),
  },
};

let card2 = {
  type: "credit",
  networkType: "visa",
  currencyType: "EUR",
  balance: 1.34353,
  number: 9232654321012032,
  expirationYear: 2026,
  expirationMonth: 4,
  isActive: false,
  isBlocked: true,
  transaction: {
    title: "Order Revenue",
    amount: 874,
    date: new Date(2023, 3, 16, 25, 43, 22),
  },
};

let card3 = {
  type: "credit",
  networkType: "visa",
  currencyType: "EUR",
  balance: 1.34353,
  number: 9232654321012032,
  expirationYear: 2026,
  expirationMonth: 4,
  isActive: false,
  isBlocked: true,
  transaction: {
    title: "Order Revenue",
    amount: 874,
    date: new Date(2023, 3, 16, 25, 43, 22),
  },

  transactions: [
    {
      title: "Order Revenue",
      amount: 874,
      date: new Date(2023, 3, 16, 25, 43, 22),
    },
    {
      title: "Order Revenue",
      amount: 874,
      date: new Date(2023, 3, 16, 25, 43, 22),
    },
  ],
};
// render is 'for'
let cards = [card1, card2, card3];
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  document.write("<h2>Welcome Back, ", `${userName.name}`, "!", "</h2>");
  document.write("<h3>My cards</h3>");

  document.write("<div>");

  document.write("<h2>", card.type + " " + "Card", "</h2>");
  document.write("<h3>", card.networkType, "</h3>");
  document.write("<h3>", "Current Balanse", "</h3>");
  document.write("<p>", card.balance, "</p>");
  document.write("<p>", card.number, "</p>");
  document.write(
    "<p>",
    card.expirationMonth + "/" + card.expirationYear,
    "</p>"
  );
  document.write("<h2>", "History Transaction", "</h2>");
  document.write(
    "<ul>",
    "<li>",
    card.transaction.title,
    ", ",
    card.transaction.amount,
    ", ",
    card.transaction.date,
    "</li>",

    "</ul>"
  );
  document.write("<hr>");
}

// render card 1
/* document.write('<h2>Welcome Back, ', `${userName.name}`, '!', '</h2>')
document.write('<h3>My cards</h3>')

document.write('<div>')

document.write('<h2>', card1.type + ' ' + 'Card', '</h2>')
document.write('<h3>', card1.networkType, '</h3>')
document.write('<h3>', 'Current Balanse', '</h3>')
document.write('<p>', card1.balance, '</p>')
document.write('<p>', card1.number, '</p>')
document.write('<p>', card1.expirationMonth + '/' + card1.expirationYear, '</p>')
document.write('<br>')
document.write('<h2>', 'History Transaction', '</h2>')
document.write('<>')

document.write('</>') */

// render card 2

/* document.write('<h2>Welcome Back, ', `${userName.name}`, '!', '</h2>')
document.write('<h3>My cards</h3>')

document.write('<div>')

document.write('<h2>', card2.type + ' ' + 'Card', '</h2>')
document.write('<h3>', card2.networkType, '</h3>')
document.write('<h3>', 'Current Balanse', '</h3>')
document.write('<p>', card2.balance, '</p>')
document.write('<p>', card2.number, '</p>')
document.write('<p>', card2.expirationMonth + '/' + card2.expirationYear, '</p>')
document.write('<br>')
document.write('<h2>', 'History Transaction', '</h2>')
document.write('<>')

document.write('</>') */
