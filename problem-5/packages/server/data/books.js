// i'll be honest
// this list was created by exporting my existing sqlite database to json
// but alas, no keys were given in the output file
// so i used regex to change the string lists to actual objects
// find: (.+,\n)(.+,\n)(.+,\n)(.+,\n)(.+,\n)(.+,\n)(.+,\n)(.+,\n)(.+,\n)
// replace: bookId: $1, bookTitle: $2, bookDescription: $3, bookPrice: $4, bookImgFile: $5, bookCategory: $6, bookSubCategory: $7,
// at 4:30 AM
export const books = [
  {
    bookTitle: 'Holy Bible - King James Version',
    bookDescription:
      '- The holy Christian bible\r\n- Anthology book\r\n- Multiple authors',
    bookPrice: '15.99',
    bookImgFile: 'kjv-bible.jpg',
    bookCategory: '3',
    bookSubCategory: '19',
  },
  {
    bookTitle: 'Torah',
    bookDescription:
      '- AKA "Five Books of Moses"\n- Anthology book\n- Multiple authors',
    bookPrice: '19.99',
    bookImgFile: 'torah.jpg',
    bookCategory: '3',
    bookSubCategory: '19',
  },
  {
    bookTitle: 'To Kill a Mockingbird',
    bookDescription:
      'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill a Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning filmalso a classic.',
    bookPrice: '10.99',
    bookImgFile: 'to-kill-a-mockingbird.jpg',
    bookCategory: '0',
    bookSubCategory: '17',
  },
  {
    bookTitle: 'Pride and Prejudice',
    bookDescription:
      'Since its immediate success in 1813Pride and Prejudice has remained one of the most popular novels in the English language.',
    bookPrice: '15.99',
    bookImgFile: 'pride-and-prejudice.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Animal Farm',
    bookDescription:
      'A farm is taken over by its overworkedmistreated animals. With flaming idealism and stirring slogansthey set out to create a paradise of progressjusticeand equality.',
    bookPrice: '9.99',
    bookImgFile: 'animal-farm.jpg',
    bookCategory: '0',
    bookSubCategory: '17',
  },
  {
    bookTitle: 'A Great Reckoning',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'agreatreckoning.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'A Long Walk to Water',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'alongwalktowater.png',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Beasts and Beauty',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'beastsandbeauty.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Before We Were Yours',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'beforewewereyours.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Blind Tiger',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'blindtiger.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Born a Crime',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'bornacrime.jpg',
    bookCategory: '1',
    bookSubCategory: '2',
  },
  {
    bookTitle: 'Boyfriend Material',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'boyfriendmaterial.jpg',
    bookCategory: '0',
    bookSubCategory: '20',
  },
  {
    bookTitle: 'Carnal Thirst',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'carnalthirst.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Cytonic',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'cytonic.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Downstairs Girl',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'downstairsgirl.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Dragons',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'dragons.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Educated',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'educated.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Eternal',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'eternal.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'The Girls in the Stilt House',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'girlsinstilthouse.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Girls Like Us',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'girlslikeus.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Hazelwood',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'hazelwood.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Heaven',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'heaven.jpeg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Home Before Dark',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'homebeforedark.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'House of Broken Angels',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'houseofbrokenangels.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'INLAND',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'inland.jpeg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Killing Commendatore',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'killingcommendatore.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Lord of The Rings',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'lotr.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: "Mama's Last Hug",
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'mamaslasthug.jpeg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Men Without Women',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'menwithoutwomen.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Nature of The Beast',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'natureofthebeast.png',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'NeuroTribes',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'neurotribes.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: "No Man's Land",
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'nomansland.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'I AM NOT YOUR PERFECT MEXICAN DAUGHTER',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'notperfectmexicandaughter.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Omens',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'omens.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Pearl of Wisdom',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'pearlofwisdom.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Rain in Portugal',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'raininportugal.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Red Pill',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'redpill.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Retribution Rails',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'retributionrails.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Shame Proof Parenting',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'shameproofparenting.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Sounds Like Titanic',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'soundsliketitanic.jpeg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Stamped From The Beginning',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'stampedfromthebeginning.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Sun Lit Weapon',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'sunlitweapon.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Super Vision Time',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'supervisiontime.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'The Boy in The Dress',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'theboyinthedress.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'The Detonator',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'thedetonator.jpeg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'The Girl With The Louding Voice',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'thegirlwiththeloudingvoice.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'The Nightingale',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'thenightingale.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'The Risk',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'therisk.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'A Thousand Steps Into Night',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'thousandstepsintonight.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Troublesome Creek',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'troublesomecreek.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'We Must Be Brave',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'wemustbebrave.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'When I Was a Child',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'wheniwasachild.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Where The Crawdads Sing',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'wherethecrawdadssing.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'The Winter of The Witch',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'winterofthewitch.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Wish You Were Here',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'wishyouwerehere.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'Young Elites',
    bookDescription: 'Lorem ipsum',
    bookPrice: '15.99',
    bookImgFile: 'youngelites.jpg',
    bookCategory: '0',
    bookSubCategory: '0',
  },
  {
    bookTitle: 'The Call of Cthulhu',
    bookDescription:
      'Cthulhuthe squid-facedwinged god created by H. P. Lovecraft emerges from the sea after centuries of slumber only to find his dark powers immediately sealed away by a mysterious holy wizard.',
    bookPrice: '6.66',
    bookImgFile: 'thecallofcthulhu.jpg',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'Holy Bible - King James Version (Leather-bound)',
    bookDescription:
      '- The holy Christian bible\r\n- Anthology book\r\n- Multiple authors',
    bookPrice: '29.99',
    bookImgFile: 'kjv-bible.jpg',
    bookCategory: '3',
    bookSubCategory: '19',
  },
  {
    bookTitle: 'Torah (Leather-bound)',
    bookDescription:
      '- AKA "Five Books of Moses"\n- Anthology book\n- Multiple authors',
    bookPrice: '39.99',
    bookImgFile: 'torah.jpg',
    bookCategory: '3',
    bookSubCategory: '19',
  },
  {
    bookTitle: 'The Other Gods',
    bookDescription:
      '"The Other Gods" is a fantasy short story written by American author H. P. Lovecrafton August 141921. It was first published in the November 1933 issue of The Fantasy Fan.',
    bookPrice: '9.99',
    bookImgFile: 'theothergods.jpg',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'The Dunwich Horror',
    bookDescription:
      '"The Dunwich Horror" is a horror novella by American writer H. P. Lovecraft. Written in 1928it was first published in the April 1929 issue of Weird Tales (pp. 481–508). It takes place in Dunwicha fictional town in Massachusetts. It is considered one of the core stories of the Cthulhu Mythos.',
    bookPrice: '4.99',
    bookImgFile: 'thedunwichhorror.jpg',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'The Colour Out of Space',
    bookDescription:
      '"The Colour Out of Space" is a science fiction/horror short story by American author H. P. Lovecraftwritten in March 1927. In the talean unnamed narrator pieces together the story of an area known by the locals as the "blasted heath" in the hills west of the fictional town of ArkhamMassachusetts. The narrator discovers that many years ago a meteorite crashed therepoisoning every living being nearby; vegetation grows large but foul-tastinganimals are driven mad and deformed into grotesque shapesand the people go insane or die one by one. ',
    bookPrice: '4.99',
    bookImgFile: 'thecoloroutofspace.jpg',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'The Silver Key',
    bookDescription:
      '"The Silver Key" is a fantasy short story by American writer H. P. Lovecraft. Written in 1926it is considered part of his Dreamlands series. It was first published in the January 1929 issue of Weird Tales. It is a continuation of "The Dream-Quest of Unknown Kadath"and was followed by a sequel"Through the Gates of the Silver Key"co-written with E. Hoffmann Price. The story and its sequel both feature Lovecraft\'s recurring character of Randolph Carter as the protagonist. ',
    bookPrice: '4.99',
    bookImgFile: 'thesilverkey.jpg',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'The Rats in the Walls',
    bookDescription:
      '"The Rats in the Walls" is a short story by American author H. P. Lovecraft. Written in August–September 1923it was first published in Weird TalesMarch 1924.',
    bookPrice: '4.99',
    bookImgFile: 'theratsinthewalls.png',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'The Outsider',
    bookDescription:
      '"The Outsider" is a short story by American horror writer H. P. Lovecraft. Written between March and August 1921it was first published in Weird TalesApril 1926. In this worka mysterious individual who has been living alone in a castle for as long as he can remember decides to break free in search of human contact and light. "The Outsider" is one of Lovecraft\'s most commonly reprinted works and is also one of the most popular stories ever to be published in Weird Tales. ',
    bookPrice: '4.99',
    bookImgFile: 'theoutsider.jpg',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'The Nameless City',
    bookDescription:
      '"The Nameless City" is a short horror story written by American writer H. P. Lovecraft in January 1921 and first published in the November 1921 issue of the amateur press journal The Wolverine. It is often considered the first story set in the Cthulhu Mythos world. In the storythe protagonist travels to the middle of the Arabian Desert to explore an ancient underground city.\n\nThough Lovecraft himself was quite fond of the storyit was roundly rejected by a variety of magazines. ',
    bookPrice: '0.99',
    bookImgFile: 'thenamelesscity.png',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'The Cats of Ulthar',
    bookDescription:
      "\"The Cats of Ulthar\" is a short story written by American fantasy author H. P. Lovecraft in June 1920. In the talean unnamed narrator relates the story of how a law forbidding the killing of cats came to be in a town called Ulthar. As the narrative goesthe city is home to an old couple who enjoy capturing and killing the townspeople's cats. When a caravan of wanderers passes through the citythe kitten of an orphan (Menes) traveling with the band disappears. Upon hearing of the couple's violent acts towards catsMenes invokes a prayer before leaving town that causes the local felines to swarm the cat-killers' house and devour them. Upon witnessing the resultthe local politicians pass a law forbidding the killing of cats. ",
    bookPrice: '7.99',
    bookImgFile: 'thecatsofulthar.jpg',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'Dagon',
    bookDescription:
      '"Dagon" is a short story by American author H. P. Lovecraft. It was written in July 1917 and is one of the first stories that Lovecraft wrote as an adult. It was first published in the November 1919 edition of The Vagrant (issue #11). Dagon was later published in Weird Tales. It is considered by many to be one of Lovecraft\'s most forward-looking stories. ',
    bookPrice: '4.99',
    bookImgFile: 'dagon.jpg',
    bookCategory: '0',
    bookSubCategory: '12',
  },
  {
    bookTitle: 'The Tomb',
    bookDescription:
      '"The Tomb" is a fictional short story by American writer H. P. Lovecraftwritten in June 1917 and first published in the March 1922 issue of The Vagrant. It tells the story of Jervas Dudleywho becomes obsessed with a mausoleum near his childhood home. ',
    bookPrice: '4.99',
    bookImgFile: 'thevagrant.jpg',
    bookCategory: '0',
    bookSubCategory: '12',
  },
]