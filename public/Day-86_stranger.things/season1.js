const synopses = {
  1: `Chapter One: The Vanishing of Will Byers
On November 6, 1983, in the quiet town of Hawkins, Indiana, 12-year-old Will Byers vanishes mysteriously after a late-night Dungeons & Dragons game with his friends. His single mother, Joyce, is frantic, and local police chief Jim Hopper begins a reluctant investigation. Simultaneously, a young girl with shaved head and psychokinetic abilities, designated Eleven, escapes from a secret government laboratory and is discovered by Will's best friends – Mike, Dustin, and Lucas – in the woods.`,

  2: `Chapter Two: The Weirdo on Maple Street
Mike, Dustin, and Lucas hide Eleven in Mike's basement, slowly learning about her powers and her terrifying past at the Hawkins National Laboratory. Meanwhile, Joyce starts experiencing bizarre phenomena in her home, believing Will is trying to communicate with her through the flickering electrical lights. Concurrently, Mike's older sister, Nancy, attends a party with her friend Barb, where Barb mysteriously disappears from the poolside.`,

  3: `Chapter Three: Holly, Jolly
Joyce's conviction that Will is communicating through Christmas lights intensifies, leading her to create an alphabet wall. Nancy grows increasingly concerned about Barb's disappearance and starts investigating on her own, discovering that Jonathan, Will's older brother, was taking photos near the party where Barb vanished. Chief Hopper, initially skeptical, begins to suspect the Hawkins Lab after uncovering inconsistencies in the missing person's report.`,

  4: `Chapter Four: The Body
A body resembling Will is discovered in the quarry, seemingly bringing a grim conclusion to the search. However, Joyce refuses to believe it's her son, and Hopper quickly uncovers evidence that the body is a fake. Nancy, reviewing Jonathan's photographs, spots a blurry, shadowy figure in the background of a picture of Barb, realizing something supernatural is at play. With Eleven's telekinetic help, the boys use a D&D analogy to explain that Will is trapped in an alternate dimension, hunted by a monstrous entity they call the "Demogorgon."`,

  5: `Chapter Five: The Flea and the Acrobat
Determined to find answers, Hopper breaks into the Hawkins National Laboratory and uncovers disturbing evidence of secret experiments. The boys, guided by Eleven's limited insights, attempt to use their knowledge of physics and Eleven's powers to locate a "gate" to the alternate dimension where Will might be. Simultaneously, Nancy and Jonathan, convinced of a lurking monster, team up to confront the creature they believe took Barb.`,

  6: `Chapter Six: The Monster
Nancy and Jonathan set a trap for the creature, but are nearly caught themselves. Hopper and Joyce investigate a woman named Terry Ives, who claims her daughter, Jane (later revealed to be Eleven), was taken by the lab years ago and possessed similar abilities. Eleven has a powerful flashback to her time in the lab, revealing the extent of Dr. Brenner's cruel experiments and her accidental role in opening the portal to the Upside Down during a terrifying encounter with the Demogorgon.`,

  7: `Chapter Seven: The Bathtub
Lucas, increasingly suspicious of Eleven and the boys' secrets, tries to warn Mike and Dustin about the "bad men" from the lab. Despite their earlier friction, the friends reunite, and they, along with Hopper and Joyce, devise a plan to amplify Eleven's powers. They construct a makeshift sensory deprivation tank, similar to what Eleven used in the lab. Eleven bravely enters the "bathtub" and makes fleeting but crucial contact with both Will and Barb in the Upside Down.`,

  8: `Chapter Eight: The Upside Down
Following Eleven's lead, Hopper and Joyce bravely enter the Upside Down through the gate at Hawkins Lab and successfully rescue a barely alive Will. Back in the real world, Nancy and Jonathan prepare for a final showdown with the Demogorgon at Joyce's house, unexpectedly joined by Steve, Nancy's boyfriend. Dr. Brenner and his agents track Eleven and the boys to the school. The Demogorgon is drawn to the blood and chaos, leading to a climactic confrontation where Eleven sacrifices herself to destroy the monster, seemingly disappearing in the process. Will is safely returned home, but the episode ends with hints of his lingering connection to the Upside Down.`
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
