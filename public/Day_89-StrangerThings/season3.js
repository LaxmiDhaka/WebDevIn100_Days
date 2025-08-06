const synopses = {
  1: `Chapter One: Suzie, Do You Copy?
Summer of 1985. The new Starcourt Mall is the center of Hawkins' attention. Dustin returns from camp, trying to contact his new girlfriend Suzie. Meanwhile, the Russians open a new portal under Starcourt. Rats act strangely and Billy encounters a strange creature.`,
  
  2: `Chapter Two: The Mall Rats
Nancy and Jonathan investigate the case of rabid rats. Max and Eleven bond, leaving Mike frustrated. Hopper warns Mike to stay away. Billy becomes possessed by a strange entity, leading to darker consequences.`,
  
  3: `Chapter Three: The Case of the Missing Lifeguard
Eleven uses her powers to spy on Billy and discovers something sinister. Nancy and Jonathan get in trouble for pursuing their story. Dustin, Steve, Robin, and Erica crack part of the Russian code.`,
  
  4: `Chapter Four: The Sauna Test
The group tests Billy to see if he’s the host of the Mind Flayer. Tensions rise, leading to a violent confrontation. Meanwhile, Hopper and Joyce investigate mysterious magnets, ending up at a suspicious lab.`,
  
  5: `Chapter Five: The Flayed
The kids confirm the Flayer is back and controlling people. Hopper, Joyce, and Alexei head to Illinois to seek help. Dustin's group infiltrates the mall’s underground base and discover dangerous Russian experiments.`,
  
  6: `Chapter Six: E Pluribus Unum
Eleven dives into Billy’s mind and uncovers his traumatic past and how the Mind Flayer took control. Meanwhile, the Russian base is explored deeper. Chaos unfolds as the possessed townspeople merge into a monstrous creature.`,
  
  7: `Chapter Seven: The Bite
On the Fourth of July, the Flayer attacks Hopper's cabin. Eleven is injured. The gang regroups at the mall. Dustin's group makes contact. They all prepare for the final showdown against the Mind Flayer.`,
  
  8: `Chapter Eight: The Battle of Starcourt
The final battle erupts inside Starcourt Mall. Hopper and Joyce try to destroy the gate. Eleven is weakened. Billy sacrifices himself to save her. The gate is closed, but Hopper is presumed dead. The Byers family and Eleven move away. A post-credit scene hints the Russians have captured a Demogorgon—and "the American."`
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
