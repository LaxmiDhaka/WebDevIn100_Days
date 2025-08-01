const synopses = {
  1: "Chapter One: MADMAX\nIt's October 1984, almost a year after Will's disappearance and return. Hawkins is trying to move on, but Will still experiences unsettling flashbacks to the Upside Down and has strange 'visions.' A new girl, Max Mayfield, arrives in town, quickly capturing the attention of Dustin and Lucas. Meanwhile, Eleven is secretly living with Chief Hopper in a remote cabin, desperate to reconnect with Mike.",
  2: "Chapter Two: Trick or Treat, Freak\nIt's Halloween, and Will's visions intensify, showing a monstrous shadow figure in the sky. Mike, Dustin, Lucas, and Will dress as Ghostbusters for trick-or-treating, but Will's episode cuts their night short. Nancy struggles with guilt over Barb's death and wants to tell her parents the truth. Hopper investigates mysterious rotting pumpkins around town, which seem to be connected to the Upside Down.",
  3: "Chapter Three: The Pollywog\nDustin discovers a strange, slug-like creature in his trash can and names it 'D'Artagnan' (Dart), unaware of its true origins. Will's visions become more frequent and terrifying, drawing him into the Upside Down. Eleven, frustrated with her isolation, sneaks out and explores, leading to a confrontation with Mike. Joyce begins dating Bob Newby, a kind but somewhat goofy manager at RadioShack.",
  4: "Chapter Four: Will the Wise\nWill's connection to the Upside Down deepens; he becomes possessed by the Mind Flayer, a massive, shadowy entity from his visions. Joyce, Hopper, and Mike realize something is terribly wrong with Will as his behavior changes drastically. Dustin's pet Dart grows rapidly and reveals itself to be a Demodog, causing chaos in his house. Nancy and Jonathan team up with conspiracy theorist Murray Bauman to expose Hawkins Lab.",
  5: "Chapter Five: Dig Dug\nHopper gets trapped in an underground tunnel system beneath Hawkins, which Will has unknowingly been drawing. Joyce, Bob, and Mike attempt to rescue him. Dustin realizes Dart is a Demodog. Eleven learns about her past and discovers that her mother, Terry Ives, is still alive but catatonic. Nancy and Jonathan successfully record Dr. Owens admitting responsibility for Barb's death.",
  6: "Chapter Six: The Spy\nWill, now fully under the Mind Flayer's control, acts as a spy, sending the Demodogs to attack Hawkins Lab. Many scientists are killed. The gang realizes the Mind Flayer is controlling Will's body and mind, using him to unleash its forces. Eleven tracks down her biological mother, Terry Ives, and learns about her traumatic past at the lab and the existence of other children with powers.",
  7: "Chapter Seven: The Lost Sister\nEleven leaves Hawkins to find the 'sister' she saw in her mother's memories. She tracks down Kali (Eight), a girl with illusionary powers, and her crew of outcasts in Chicago. Eleven struggles with her identity and the temptation of revenge against those who wronged her and her mother. After helping Kali with a mission, she ultimately chooses to return to Hawkins to help her friends.",
  8: "Chapter Eight: The Mind Flayer\nWith the Mind Flayer's army of Demodogs threatening to overrun Hawkins, the group puts their plan into action. Joyce, Jonathan, and Nancy attempt to burn the Mind Flayer out of Will using heat. Hopper, Mike, and Dustin try to distract the Demodogs. Bob Newby heroically sacrifices himself to restore power at the lab and allow the others to escape.",
  9: "Chapter Nine: The Gate\nThe Mind Flayer, enraged, sends its creatures after the group. Eleven returns to Hawkins, her powers strengthened, and unleashes her full force against the Demodogs and the Mind Flayer. Hopper and Eleven go to close the Gate to the Upside Down at the lab. In a powerful display, Eleven uses her telekinesis to close the gate, severing the Mind Flayer's connection to their world and saving Hawkins, at least for now."
};


const listItems = document.querySelectorAll('.dropdown-list li');
const synopsisBox = document.getElementById('synopsis-box');

listItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const ep = item.getAttribute('data-episode');
    synopsisBox.innerText = synopses[ep];
    synopsisBox.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    synopsisBox.style.display = 'none';
  });
});
