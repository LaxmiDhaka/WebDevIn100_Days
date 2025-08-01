const synopses = {
  1: `Chapter One: The Hellfire Club
It's Spring Break 1986. Six months after the Battle of Starcourt, the gang is separated. Eleven, Will, Jonathan, and Joyce live in California. Eleven struggles to fit in and has lost her powers. In Hawkins, Mike and Dustin are part of the "Hellfire Club," a D&D group led by eccentric Eddie Munson. A popular cheerleader, Chrissy Cunningham, is brutally murdered by a new, terrifying entity known as Vecna.`,

  2: `Chapter Two: Vecna's Curse
Eddie becomes the prime suspect in Chrissy's murder, leading to a town-wide manhunt. Dustin suspects a supernatural cause and believes Vecna is responsible. Max begins experiencing strange visions and headaches, realizing she might be Vecna's next target. In California, Eleven struggles with bullying and her past, while Joyce receives a mysterious package hinting that Hopper might be alive.`,

  3: `Chapter Three: The Monster and the Superhero
Nancy and Robin investigate Chrissy's murder, uncovering a pattern of Vecna's past victims in Hawkins. Dustin, Lucas, Max, and Steve race to find Eddie before he's caught. Eleven is taken by Dr. Owens to a secret facility, hoping to help her regain her powers. Joyce and Murray travel to Alaska to investigate Hopper's potential survival, entering a dangerous Russian conspiracy.`,

  4: `Chapter Four: Dear Billy
Max's visions intensify, and she discovers she is indeed Vecna's next victim. The group realizes Vecna targets those with trauma and that music can offer a temporary shield. In an intense sequence, Max confronts Vecna in the Upside Down but is saved by the power of Kate Bush's "Running Up That Hill." Eleven begins a painful process of recovering her memories with Dr. Brenner, hoping to restore her powers.`,

  5: `Chapter Five: The Nina Project
Eleven delves deep into her past at the "Nina Project," a sensory deprivation tank that forces her to relive traumatic memories of Hawkins Lab, revealing her connection to the other children with powers. In Russia, Hopper is alive but imprisoned in a labor camp, facing a brutal Demogorgon in a gladiatorial fight for survival. Nancy, Robin, Steve, and Eddie investigate a potential portal to the Upside Down at Lovers' Lake.`,

  6: `Chapter Six: The Dive
The Hawkins group deduces that the Upside Down gate is at the bottom of Lovers' Lake. Steve bravely dives in to investigate and is pulled through to the Upside Down, followed by Nancy, Robin, and Eddie. They find themselves in a twisted version of Hawkins. Joyce and Murray infiltrate the Russian prison to rescue Hopper, facing deadly Demogorgons in the process. Eleven continues to recover more memories from her past, leading to shocking revelations.`,

  7: `Chapter Seven: The Massacre at Hawkins Lab
Eleven's recovered memories culminate in a horrifying truth: she was not the one who caused the massacre at Hawkins Lab. Instead, Henry Creel, also known as One, was the true perpetrator. Eleven, unknowingly, opened a portal and banished One to the Upside Down, transforming him into Vecna. The episode ends with the various groups still separated, facing their own dire circumstances.`,

  8: `Chapter Eight: Papa
The Hawkins group finds themselves trapped in the Upside Down, seeking a way back to the real world while evading Vecna. Eleven, having fully recovered her memories, confronts Dr. Brenner about One/Vecna's true identity and origin. Joyce, Murray, and Hopper fight to escape the Russian prison after a harrowing encounter with a Demogorgon. Will confesses his deep-seated fears about the Upside Down to Mike.`,

  9: `Chapter Nine: The Piggyback
The groups formulate a desperate plan to defeat Vecna. The Hawkins team in the Upside Down distracts Vecna's physical form by attacking him while Eleven, remotely connected from the Nina Project, battles Vecna in his mindscape. In Russia, Hopper, Joyce, and Murray attack the Demogorgons at the prison to weaken the Mind Flayer's hive mind and help Eleven. During the intense final confrontation, Eddie Munson makes a heroic sacrifice. Max is gravely injured by Vecna but is saved by Eleven, albeit falling into a coma. The season ends with Vecna seemingly defeated for now, but the Upside Down spilling into Hawkins through new gates, signifying the start of a terrifying new invasion.`
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
