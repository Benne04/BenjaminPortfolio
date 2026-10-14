import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Benjamin Ahola",
  role: "Student",
    introduction: "Aspiring game developer with a passion for creating interactive experiences. I specialize in developing games using Unity and Unreal Engine 5",
    description: "Hey, i'm Benjamin! i've been gaming my whole life, and making games has always interested me. I Recently started to go all in and decided to go a full 2 year eduction within game development and have already learned so much. My goal is to create games that brings pure enjoyment while playing. Right now, I'm looking to join a company where I can sharpen my skills, learn from others, and build some awesome games.",
    image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
    cvUri: `${process.env.PUBLIC_URL}/files/my_cv.pdf`,
  links: {
    github: "https://github.com/Benne04",
    itchIO: "",
    linkedIn: "https://www.linkedin.com/in/benjamin-ahola-076721303/",
  }
};

export const games: Game[] = [
  {
    name: "Submarine Hotel",
      description: "Submarine Hotel is a management game, where you have to puzzle guests into the rooms they request. Some have higher standards than others so be careful not to place them close to someone they don't like.  \n\nMY ROLE in this group project was the grid system for all the rooms and to logic behind the likability system of neighbors and room types",
    genres: ["puzzle", "2D"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
        { source: LinkImageSource.ItchIo, url: "https://yrgo.itch.io/submarine-hotel" },
    ],
    media: [
        { source: "/images/games/SubmarineHotel/submarinehotelpic_1.png", type: MediaType.Image },
        { source: "/images/games/SubmarineHotel/submarinehotelpic_2.png", type: MediaType.Image },
    ],
  },
  {
    name: "Go! My Scarab",
      description: "A 3d Platformer where your are beetle that have to get the ball through a course to all the checkpoints using whatever means necessary. \n\nMY ROLE in this group project was sound design and logic but also some obstacles. But the hardest one was to make real time portals that the ball can go through seamlessly.",
      genres: ["3D-Platformer", "Puzzle"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
        { source: LinkImageSource.ItchIo, url: "https://yrgo.itch.io/go-my-scarab" },
    ],
    media: [
        { source: "/images/games/GoMyScarab/GoScarab_1.png", type: MediaType.Image },
        { source: "/images/games/GoMyScarab/GoScarab_2.png", type: MediaType.Image },
        { source: "/images/games/GoMyScarab/GoScarab_3.png", type: MediaType.Image },
        { source: "/images/games/GoMyScarab/GoScarab_4.png", type: MediaType.Image },
        { source: "/images/games/GoMyScarab/GoScarab_5.png", type: MediaType.Image },
    ],
  },
   {
    name: "VampireSurvivorslikeDEMO",
      description: "A 8 week solo project of a Vampire Survivors like game where you fight waves of enemies while leveling up and getting stronger so you can survive for as long as possible.",
      genres: ["Survivors-like", "Action", "2D"],
    platforms: [Platform.Android],
        engine: GameEngine.Unity,
       links: [],
    media: [
        { source: "/images/games/MobileGameProt/mobilspel1.png", type: MediaType.Image },
        { source: "/images/games/MobileGameProt/mobilspel2.png", type: MediaType.Image },
        { source: "/images/games/MobileGameProt/mobilspel3.png", type: MediaType.Image },
    ],
  },
      {
    name: "ParkourSystemDEMO",
          description: "A 5 week solo project where i wanted to make a parkour system in UE5. Possibly to use in future projects",
      genres: ["parkour", "3D"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [],
          media: [
              {
                  source: "https://www.youtube.com/embed/4IrGfANTlb4",
                  type: MediaType.YouTube,
              },
          ],
  },
     {
      name: "VRMechHorror",
      description: "40 hour total Goup Project in which we created a VR Mech Horror game where you make your way through a dark maze to complete objectives and Deal with different types of enemies. Remains unfinished due to not enough time.\n\n MY ROLE was to make a grid Maze editor to easily build levels where you can simply just press on each tile to change it from wall to floor or vice versa",
      genres: ["Horror", "VR", "3D"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
         links: [],
    media: [
        { source: "/images/games/VRMechGame/VRMechGame1.png", type: MediaType.Image },
        { source: "/images/games/VRMechGame/VRMechGame2.png", type: MediaType.Image },
        { source: "/images/games/VRMechGame/VRMechGame3.png", type: MediaType.Image },
    ],
  },
      {
      name: "SokobanGame",
          description: "7 week groupproject to make a Sokoban puzzle game with a custom sdl3 engine. Instead of being able to just push boxes around whenever you need to store inputs into each movable object and then release all inputs att once where all boxes will move at the same time.  \n\nMY ROLE was to do all the setup to the engine same as the others since it was a part of a course. I did all sound design and logic and also did all the UI. ",
      genres: ["Horror", "VR", "3D"],
    platforms: [Platform.Windows],
    engine: GameEngine.Custom,
          links: [],
    media: [
        { source: "/images/games/SokobanGame/SDLGame1.png", type: MediaType.Image },
        { source: "/images/games/SokobanGame/SDLGame2.png", type: MediaType.Image },
        { source: "/images/games/SokobanGame/SDLGame3.png", type: MediaType.Image },
    ],
  },
];