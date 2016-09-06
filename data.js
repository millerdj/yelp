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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.384822587955!2d-117.70416768522567!3d33.46533048076965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf050a9c5d9d3%3A0x58cd1bf17376ec5c!2sThe+Shwack+Beach+Grill!5e0!3m2!1sen!2sus!4v1473178711659',
    images: ['https://lh3.google.com/u/0/d/0B7_6ySbBX3lsS1RMWEwxbEcxOWs=w1384-h652-k-iv1?v=1473178396347', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsanluRE9DWXBvTXM=w1384-h652-k-iv1?v=1473178397736', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsSVN3dTVFMHFFdXc=w1384-h652-k-iv1?v=1473178397736'],
    review: [{
      commentor: 'Jack London',
      description: 'The old man peered from under his green leaf at the danger, and stood as  quietly as the boy. For a few seconds this mutual scrutinizing went  on; then, the bear betraying a growing irritability, the boy, with a  movement of his head, indicated that the old man must step aside from  the trail and go down the embankment. The boy followed, going backward,  still holding the bow taut and ready. They waited till a crashing among  the bushes from the opposite side of the embankment told them the bear  had gone on. The boy grinned as he led back to the trail.'
    },
    {
    commentor: 'Lewis Carroll',
    description: 'Here was another puzzling question; and as Alice could not think of any  good reason, and as the Caterpillar seemed to be in a VERY unpleasant state of mind, she turned away. Come back! the Caterpillar called after her. Ive something important to say! This sounded promising, certainly: Alice turned and came back again.'
    }]
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.307077397647!2d-117.69732188387793!3d33.467355080769224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf053ec31c47d%3A0xcdcf7ec13d241ddc!2sTwo+Left+Forks!5e0!3m2!1sen!2sus!4v1473179649210',
    images: ['https://lh3.google.com/u/0/d/0B7_6ySbBX3lsaWFldGsycWZjS28=w1280-h1276-k-iv1?v=1473178405185', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsdVAydnhpSWNkZ0U=w1280-h1276-k-iv1?v=1473178405185', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsOXdqQmVtN3dpMFE=w1280-h1276-k-iv1?v=1473178405185'],
    review: [{
      commentor: 'Lewis Carroll',
      description: 'Here was another puzzling question; and as Alice could not think of any  good reason, and as the Caterpillar seemed to be in a VERY unpleasant state of mind, she turned away. Come back! the Caterpillar called after her. Ive something important to say! This sounded promising, certainly: Alice turned and came back again.'}]
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.3876410898383!2d-117.70966428387797!3d33.46525708076973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf05b9245ad2f%3A0xa0453d00ec40980!2sThe+Point+Restaurant+%26+Bar!5e0!3m2!1sen!2sus!4v1473183701026',
    images: ['https://lh3.google.com/u/0/d/0B7_6ySbBX3lsTzloelBnR2haREE=w1280-h1276-k-iv1?v=1473178401980', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsWkdSYkdtV0ljY3M=w1280-h1276-k-iv1?v=1473178401980', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsNV82TVpIYXdNQnc=w1280-h1276-k-iv1?v=1473178401980'],
    review: [{
      commentor: 'L. Frank Baum',
      description: 'And now, said Dorothy, how am I to get back to Kansas?We shall have to think about that, replied the little man. Give me two or three days to consider the matter and Ill try to find a way to carry you over the desert.  In the meantime you shall all be treated as my guests, and while you live in the Palace my people will wait upon you and obey your slightest wish.  There is only one thing I ask in return for my help--such as it is.  You must keep my secret and tell no one I am a humbug.'}]
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.385663531189!2d-117.70859728387796!3d33.465308580769616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf05bbe5b4c69%3A0x98a764fbff7460c6!2sCoastal+Kitchen!5e0!3m2!1sen!2sus!4v1473183821189',
    images: ['https://lh3.google.com/u/0/d/0B7_6ySbBX3lsMU9wNy1LNlFxRjQ=w1384-h652-k-iv1?v=1473178389439', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsN1RQX1k2ek1hdkU=w1384-h652-k-iv1?v=1473178390164', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsbWJzZmE5bjJwZzg=w1280-h975-k-iv1?v=1473178390164'],
    review: [{
      commentor: 'Herman Melville',
      description: 'In the first place, you are struck by the general contrast between these heads. Both are massive enough in all conscience; but there is a certain mathematical symmetry in the Sperm Whales which the Right Whales sadly lacks. There is more character in the Sperm Whales head. As you behold it, you involuntarily yield the immense superiority to him, in point of pervading dignity. In the present instance, too, this dignity is heightened by the pepper and salt colour of his head at the summit, giving token of advanced age and large experience. In short, he is what the fishermen technically call a grey-headed whale.'}]
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.3696356070745!2d-117.69342788387803!3d33.465725980769655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf054c57e2b37%3A0x6ad611d58ec4476d!2sStacks+Pancake+House!5e0!3m2!1sen!2sus!4v1473183860271',
    images: ['https://lh3.google.com/u/0/d/0B7_6ySbBX3lsdjBtMUZ6eWpSRVk=w1280-h1276-k-iv1?v=1473178397736', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsSS13TFcxb0MtZkk=w1280-h1276-k-iv1?v=1473178399867', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsZklwMnlJUElNRTA=w1280-h1276-k-iv1?v=1473178400656'],
    review: [{
      commentor: 'Edgar Rice Burroughs',
      description: 'I saw no signs of extreme age among them, nor is there any appreciable difference in their appearance from the age of maturity, about forty, until, at about the age of one thousand years, they go voluntarily upon their last strange pilgrimage down the river Iss, which leads no living Martian knows whither and from whose bosom no Martian has ever returned, or would be allowed to live did he return after once embarking upon its cold, dark waters.'}]
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.0960096377142!2d-117.7035458707216!3d33.4653508987981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf05a0db9307d%3A0x92281d1acbf96255!2s24462+Del+Prado+Ave%2C+Dana+Point%2C+CA+92629!5e0!3m2!1sen!2sus!4v1473184315160',
    images: ['https://lh3.google.com/u/0/d/0B7_6ySbBX3lsdXRSZ254WFFjODA=w1280-h1276-k-iv1?v=1473178396347', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsWTRYOHo4NndmMVk=w1280-h1276-k-iv1?v=1473178396347', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsQVdQRUxOYzRYNWs=w1280-h1276-k-iv1?v=1473178396347'],
    review: [{
      commentor: 'Lewis Carroll',
      description: 'In another moment down went Alice after it, never once considering how  in the world she was to get out again. The rabbit-hole went straight on like a tunnel for some way, and then  dipped suddenly down, so suddenly that Alice had not a moment to think  about stopping herself before she found herself falling down a very deep  well.'}]
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
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.3112285720576!2d-117.69888458387786!3d33.467246980769126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf0515c37b9c7%3A0xdb09ccde2b088fe1!2sTaco+Surf!5e0!3m2!1sen!2sus!4v1473183934420',
  images: ['https://lh3.google.com/u/0/d/0B7_6ySbBX3lsV2w1Q19hU1U4QWc=w1280-h1276-k-iv1?v=1473178400656', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lscXpwQzFUYXhkVjQ=w1280-h1276-k-iv1?v=1473178400656', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsWERCZC1abHNFWEE=w1280-h1276-k-iv1?v=1473178401980'],
  review: [{
    commentor: 'H.G. Wells',
    description: 'For my own part, I had been feverishly excited all day.  Something very like the war fever that occasionally runs through a civilised community had got into my blood, and in my heart I was not so very sorry that I had to return to Maybury that night.  I was even afraid that that last fusillade I had heard might mean the extermination of our invaders from Mars.  I can best express my state of mind by saying that I wanted to be in at the death. It was nearly eleven when I started to return.  The night was unexpectedly dark;'}]
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
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.335305917979!2d-117.70220568387782!3d33.46661998076953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf050c2ef2ccb%3A0x30b758d16bf82103!2sHarbor+House+Cafe!5e0!3m2!1sen!2sus!4v1473183966358',
  images: ['https://lh3.google.com/u/0/d/0B7_6ySbBX3lsREJod3BJUlVjc3c=w1280-h975-k-iv1?v=1473178395644', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsQ0ZDWEV6dVpOYkk=w1280-h1276-k-iv1?v=1473178396347', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsaUw1cW9KNnlWbWs=w1280-h1276-k-iv1?v=1473178396347'],
  review: [{
    commentor: 'L. Frank Baum',
    description: 'So they called the yellow Winkies and asked them if they would help to rescue their friends, and the Winkies said that they would be delighted to do all in their power for Dorothy, who had set them free from bondage.  So she chose a number of the Winkies who looked as if they knew the most, and they all started away.  They traveled that day and part of the next until they came to the rocky plain where the Tin Woodman lay, all battered and bent.'}]
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
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.408334255889!2d-117.70902308387792!3d33.464718180769914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf05b8d1dda7d%3A0x8de4bb79637e4ca9!2sTutor+and+Spunky&#39;s+Deli!5e0!3m2!1sen!2sus!4v1473183998352',
  images: ['https://lh3.google.com/u/0/d/0B7_6ySbBX3lsbEpqN01BU0RILXc=w1280-h1276-k-iv1?v=1473178401980', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsNF9aYk8yV0M5bXM=w1280-h1276-k-iv1?v=1473178401980', 'https://lh3.google.com/u/0/d/0B7_6ySbBX3lsUmFYRWYzWVdnUTQ=w1280-h1276-k-iv1?v=1473178404444'],
  review: [{
    commentor: 'Jules Verne',
    description: 'Yes. On the way to Yokohama? Certainly. Passepartout had for an instant feared that he was on the wrong boat; but, though he was really on the Carnatic, his master was not there. He fell thunderstruck on a seat.  He saw it all now.  He remembered that the time of sailing had been changed, that he should have informed his master of that fact, and that he had not done so.  It was his fault, then, that Mr. Fogg and Aouda had missed the steamer.  Yes, but it was still more the fault of the traitor who, in order to separate him from his master, and detain the latter at Hong Kong, had inveigled him into getting drunk!  He now saw the detectives trick; and at this moment Mr. Fogg was certainly ruined, his bet was lost, and he himself perhaps arrested and imprisoned!'}]
  },
];
