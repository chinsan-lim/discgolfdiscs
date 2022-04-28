# Disc Golf Discs
A simple API of disc golf disc profiles.
Each disc has:
 - Manufacturer
 - Name
 - Speed
 - Glide
 - Turn
 - Fade
 - Diameter
 - Height
 - RimDepth
 - RimWidth

All flight ratings were collected via [DiscSearcher](https://www.reddit.com/r/discgolf/comments/kna7gq/discsearcher_is_born/) and PDGA approved discs.

## Deployed API <br />
https://discgolfdiscs.herokuapp.com/discs

## Endpoints:

all discs - /discs
<br />
individual disc - /discs/:id

## Endpoints to be added
- filter by manufacturer
- filter by each flight rating
- attach over/unstable tags to each disc

## Technologies Used
- Node.js
- Mongoose
- Express
- Database: MongoDB
- dotenv
- cors

## Disc Model

```
const DiscSchema = new mongoose.Schema({
	Manufacturer: String,
	Name: String,
	Speed: Number,
	Glide: Number,
	Turn: Number,
	Fade: Number,
	Diameter: Number,
	Height: Number,
	RimDepth: Number,
	RimWidth: Number,
})
```

## Installation
1. Fork and clone repo
2. If you identify bugs, submit an issue on the Git repo. Please detail the bug in your issue. 
3. If you know how to fix it, feel free to note the methods you would use. You could also submit a pull request with suggested code to fix it.
