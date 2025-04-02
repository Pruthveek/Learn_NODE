const prompt =require("prompt-sync")();
const guestList=["Pruthveek","Parth","Rupesh","Rupesh","jenish"];
const guestName = prompt("Enter guest name: ");
const foundGuest = guestList.find(guest => guest === guestName);

if (foundGuest) {
    console.log(`Welcome to the party, ${guestName}!`);
} else {
    console.log(`Sorry, you are not on the guest list.`);
}