import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Benjamin Ahola",
  role: "Student",
    introduction: "Aspiring game developer with a passion for creating interactive experiences. i Specialize in developing games using Unity and Unreal Engine 5",
    description: "Hey, i'm Benjamin! i've been gamung my whole life, and making games has always interested me. I Recently started to go all in and decided to go a full 2 year eduction within game development and have already learned so much. My goal is to create games that brings pure enjoyment while playing. Right now, I’m looking to join a company where I can sharpen my skills, learn from others, and build some awesome games.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/NAME",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/NAME",
  }
};

export const games: Game[] = [
  {
    name: "Submarine Hotel",
        description: "Submarine Hotel is a management game, where you have to puzzle guests into the rooms they request. Some have higher standards than others so be careful not to place them close to someone they don't like.",
    genres: ["puzzle", "2D"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
        { source: LinkImageSource.ItchIo, url: "https://yrgo.itch.io/submarine-hotel" },
    ],
    media: [
        { source: "/images/games/SubmarineHotel/submarinehotelpic_1.png", type: MediaType.Image }
    ],
  },
  {
    name: "Go! My Scarab",
      description: "The wizards have messed up a spell so horribly that the entire tower is in shambles and magic stars have scattered all over! The only way to fix this is by retreving their precious magical orb, and you have to go get it. Explore three levels that wrap around on themselves, and see how fast you can collect all the stars! Go my scarab, fetch my orb!",
      genres: ["3D-Platformer", "Puzzle"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
        { source: LinkImageSource.ItchIo, url: "https://yrgo.itch.io/go-my-scarab" },
    ],
    media: [
        { source: "/images/games/GoMyScarab/GoScarab_1", type: MediaType.Image },
        { source: "/images/games/GoMyScarab/GoScarab_2", type: MediaType.Image },
        { source: "/images/games/GoMyScarab/GoScarab_3", type: MediaType.Image },
        { source: "/images/games/GoMyScarab/GoScarab_4", type: MediaType.Image },
        { source: "/images/games/GoMyScarab/GoScarab_5", type: MediaType.Image },
    ],
  }
];