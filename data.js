var places = [
  {
    name: 'Schwack Beach Grill',
    address: '24502 Del Prado Ave Dana Point, CA 92629',
    range: 1,
    hours: 'Mon-Sun 8:00am - 9:00pm',
    delivery: 'Yes',
    reservations: 'No',
    creditCard: 'Yes',
    wifi: 'Yes',
    goodFor: 'Lunch',
    alcohol: 'Beer and Wine Only',
    review: ['Jack London', 'The old man peered from under his green leaf at the danger, and stood as  quietly as the boy. For a few seconds this mutual scrutinizing went  on; then, the bear betraying a growing irritability, the boy, with a  movement of his head, indicated that the old man must step aside from  the trail and go down the embankment. The boy followed, going backward,  still holding the bow taut and ready. They waited till a crashing among  the bushes from the opposite side of the embankment told them the bear  had gone on. The boy grinned as he led back to the trail.']
  },
  {
    name: 'Two Left Forks',
    address: '34212 Pacific Coast Hwy Dana Point, CA 92629',
    range: 2,
    hours: 'Tue-Sun 4:00pm - 11:00pm',
    delivery: 'No',
    reservations: 'Yes',
    creditCard: 'Yes',
    wifi: 'Yes',
    goodFor: 'Dinner',
    alcohol: 'Full Bar',
    review: ['Lewis Carroll','Here was another puzzling question; and as Alice could not think of any  good reason, and as the Caterpillar seemed to be in a VERY unpleasant state of mind, she turned away. Come back! the Caterpillar called after her. Ive something important to say! This sounded promising, certainly: Alice turned and came back again.']
  },
  {
    name: 'The Point',
    address: '34085 Pacific Coast Hwy Dana Point, CA 92629',
    range: 2,
    hours: 'Mon-Sun 11:30am - 2:00am',
    delivery: 'No',
    reservations: 'Yes',
    creditCard: 'Yes',
    wifi: 'No',
    goodFor: 'Dinner',
    alcohol: 'Full Bar',
    review: ['L. Frank Baum','And now, said Dorothy, how am I to get back to Kansas?We shall have to think about that, replied the little man. Give me two or three days to consider the matter and Ill try to find a way to carry you over the desert.  In the meantime you shall all be treated as my guests, and while you live in the Palace my people will wait upon you and obey your slightest wish.  There is only one thing I ask in return for my help--such as it is.  You must keep my secret and tell no one I am a humbug.']
  },
  {
    name: 'Coastal Kitchen',
    address: '4091 Pacific Coast Hwy Dana Point, CA 92629',
    range: 3,
    hours: 'Mon-Sun 11:30am - 9:30pm',
    delivery: 'No',
    reservations: 'Yes',
    creditCard: 'Yes',
    wifi: 'No',
    goodFor: 'Dinner',
    alcohol: 'Full Bar',
    review: ['Herman Melville','In the first place, you are struck by the general contrast between these heads. Both are massive enough in all conscience; but there is a certain mathematical symmetry in the Sperm Whales which the Right Whales sadly lacks. There is more character in the Sperm Whales head. As you behold it, you involuntarily yield the immense superiority to him, in point of pervading dignity. In the present instance, too, this dignity is heightened by the pepper and salt colour of his head at the summit, giving token of advanced age and large experience. In short, he is what the fishermen technically call a grey-headed whale.']
  },
  {
    name: 'Stacks Pancake House',
    address: '34255 Pacific Coast Hwy Ste 110 Dana Point, CA 92629',
    range: 1,
    hours: 'Mon-Sun 11:30am - 9:30pm',
    delivery: 'No',
    reservations: 'No',
    creditCard: 'Yes',
    wifi: 'No',
    goodFor: 'Breakfast',
    alcohol: 'No',
    review: ['Edgar Rice Burroughs','I saw no signs of extreme age among them, nor is there any appreciable difference in their appearance from the age of maturity, about forty, until, at about the age of one thousand years, they go voluntarily upon their last strange pilgrimage down the river Iss, which leads no living Martian knows whither and from whose bosom no Martian has ever returned, or would be allowed to live did he return after once embarking upon its cold, dark waters.']
  },
  {
    name: 'Jack’s Restaurant',
    address: '24462 Del Prado  Dana Point, CA 92629',
    range: 2,
    hours: 'Mon-Sun 5:00pm - 9:30pm',
    delivery: 'No',
    reservations: 'Yes',
    creditCard: 'Yes',
    wifi: 'No',
    goodFor: 'Dinner',
    alcohol: 'Full Bar',
    review: ['Lewis Carroll','In another moment down went Alice after it, never once considering how  in the world she was to get out again. The rabbit-hole went straight on like a tunnel for some way, and then  dipped suddenly down, so suddenly that Alice had not a moment to think  about stopping herself before she found herself falling down a very deep  well.']
  },
  {
  name: 'Taco Surf',
  address: '34195 Pacific Coast Hwy Dana Point, CA 92629',
  range: 1,
  hours: 'Mon-Sun 11:am - 9:00pm',
  delivery: 'No',
  reservations: 'No',
  creditCard: 'Yes',
  wifi: 'No',
  goodFor: 'Dinner',
  alcohol: 'Full Bar',
  review: ['H.G. Wells','For my own part, I had been feverishly excited all day.  Something very like the war fever that occasionally runs through a civilised community had got into my blood, and in my heart I was not so very sorry that I had to return to Maybury that night.  I was even afraid that that last fusillade I had heard might mean the extermination of our invaders from Mars.  I can best express my state of mind by saying that I wanted to be in at the death. It was nearly eleven when I started to return.  The night was unexpectedly dark;']
  },
  {
  name: 'Harbor House Cafe',
  address: '34157 Pacific Coast Hwy Dana Point, CA 92629',
  range: 1,
  hours: 'Mon-Sun Open 24 Hours',
  delivery: 'No',
  reservations: 'No',
  creditCard: 'Yes',
  wifi: 'No',
  goodFor: 'Breakfast',
  alcohol: 'No',
  review: ['L. Frank Baum','So they called the yellow Winkies and asked them if they would help to rescue their friends, and the Winkies said that they would be delighted to do all in their power for Dorothy, who had set them free from bondage.  So she chose a number of the Winkies who looked as if they knew the most, and they all started away.  They traveled that day and part of the next until they came to the rocky plain where the Tin Woodman lay, all battered and bent. ']
  },
  {
  name: 'Tutor & Spunky’s Deli',
  address: '34085 Pacific Coast Hwy Ste 116-117 Dana Point, CA 92629',
  range: 1,
  hours: 'Mon-Sun 7:00am - 7:00pm',
  delivery: 'Yes',
  reservations: 'No',
  creditCard: 'No',
  wifi: 'Yes',
  goodFor: 'Lunch',
  alcohol: 'No',
  review: ['Jules Verne','Yes. On the way to Yokohama? Certainly. Passepartout had for an instant feared that he was on the wrong boat; but, though he was really on the Carnatic, his master was not there. He fell thunderstruck on a seat.  He saw it all now.  He remembered that the time of sailing had been changed, that he should have informed his master of that fact, and that he had not done so.  It was his fault, then, that Mr. Fogg and Aouda had missed the steamer.  Yes, but it was still more the fault of the traitor who, in order to separate him from his master, and detain the latter at Hong Kong, had inveigled him into getting drunk!  He now saw the detectives trick; and at this moment Mr. Fogg was certainly ruined, his bet was lost, and he himself perhaps arrested and imprisoned!']
  },
];
